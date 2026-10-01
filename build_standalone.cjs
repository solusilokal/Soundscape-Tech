const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');

console.log('[1/3] Memulai bundling JavaScript...');
const jsResult = esbuild.buildSync({
  entryPoints: ['src/main.tsx'],
  bundle: true,
  format: 'iife',
  minify: true,
  loader: {
    '.css': 'empty',
    '.webp': 'dataurl',
    '.png': 'dataurl',
    '.jpg': 'dataurl',
    '.jpeg': 'dataurl',
    '.svg': 'dataurl'
  },
  define: {
    'process.env.NODE_ENV': '"production"'
  },
  write: false,
});

const bundledJs = jsResult.outputFiles[0].text;
console.log('✓ Bundled JS size:', (bundledJs.length / 1024).toFixed(1), 'KB');

console.log('[2/3] Membaca stylesheet CSS dari dist/assets/...');
let cssContent = '';
if (fs.existsSync('dist/assets')) {
  const distAssets = fs.readdirSync('dist/assets');
  const cssFile = distAssets.find(f => f.endsWith('.css'));
  if (cssFile) {
    cssContent = fs.readFileSync(path.join('dist/assets', cssFile), 'utf8');
    console.log('✓ CSS size:', (cssContent.length / 1024).toFixed(1), 'KB');
  }
}

if (!cssContent) {
  console.warn('[Peringatan] CSS dari dist/assets tidak ditemukan. Pastikan sudah menjalankan "npm run build".');
}

let faviconDataUri = './favicon.png';
if (fs.existsSync('favicon.png')) {
  const faviconBuffer = fs.readFileSync('favicon.png');
  faviconDataUri = `data:image/png;base64,${faviconBuffer.toString('base64')}`;
}

console.log('[3/3] Menyusun file standalone.html...');
const singleHtml = `<!doctype html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="theme-color" content="#0d1b2a" />

    <title>Soundscape Tech - Premium Music Production & Recording Studio</title>

    <link rel="icon" type="image/png" href="${faviconDataUri}" />
    <link rel="shortcut icon" href="${faviconDataUri}" />
    <link rel="apple-touch-icon" href="${faviconDataUri}" />

    <!-- Primary Meta Tags -->
    <meta name="title" content="Soundscape Tech - Premium Music Production & Recording Studio" />
    <meta name="description" content="Wujudkan karya audio dan visual terbaik Anda bersama Soundscape Tech. Menggabungkan akustik ruang berkelas dengan teknologi produksi modern untuk hasil standar industri." />
    <meta name="keywords" content="studio musik, recording studio, soundscape tech, mixing mastering, sewa studio musik, palangka raya" />
    <meta name="author" content="Soundscape Tech" />

    <!-- Open Graph / WhatsApp -->
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Soundscape Tech" />
    <meta property="og:title" content="Soundscape Tech - Premium Music Production & Recording Studio" />
    <meta property="og:description" content="Wujudkan karya audio dan visual terbaik Anda bersama Soundscape Tech. Reservasi jadwal studio rekaman & rehearsal mudah via WhatsApp." />
    <meta property="og:image" content="./hero-bg.jpg" />

    <!-- Google Fonts: Inter -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
    <style>
${cssContent}
    </style>
  </head>
  <body class="bg-[#0d1b2a]">
    <div id="root"></div>
    <script>
${bundledJs}
    </script>
  </body>
</html>`;

fs.writeFileSync('standalone.html', singleHtml, 'utf8');
console.log('✓ standalone.html berhasil dibuat! Total size:', (singleHtml.length / 1024).toFixed(1), 'KB');
