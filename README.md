# Soundscape Tech - Landing Page Preview

Mini website landing page untuk studio musik & produksi rekaman premium **Soundscape Tech** (Solusilokal.id).

## Cara Menjalankan Preview

### Cara 1: Buka Langsung File Standalone (Paling Cepat & Praktis)
Klik dua kali file:
- 👉 **`standalone.html`**

File ini sudah dibundel 100% mandiri (CSS & JS sudah embedded) sehingga bisa langsung dibuka di peramban apa pun (Chrome, Edge, Firefox) tanpa perlu terminal atau node server!

---

### Cara 2: Menggunakan Launcher Batch Script (.bat)
Cukup klik dua kali (double click):
- 👉 **`preview.bat`** : Menu interaktif (buka Standalone atau jalankan Dev Server)
- 👉 **`start_preview.bat`** : Langsung menjalankan preview

---

### Cara 3: Melalui Terminal / Command Prompt
Buka terminal di folder ini, lalu jalankan:
```bash
npm run dev
```
Buka URL yang ditampilkan (misal: [http://localhost:5174/](http://localhost:5174/)) di browser Anda.

---

### Perintah Build
Untuk membuat build produksi:
```bash
npm run build
```
File hasil build akan berada di dalam folder `dist/`.

Untuk menyusun ulang file `standalone.html`:
```bash
npm run standalone
```

---

## Struktur File
- [`soundscape_tech_landing_page.tsx`](file:///c:/Users/U%20S%20E%20R/Downloads/Tugas%20Magang%20Solusilokal.Id/Mini%20Website/studio%20musik/soundscape_tech_landing_page.tsx) : Kode komponen landing page Soundscape Tech.
- [`src/App.tsx`](file:///c:/Users/U%20S%20E%20R/Downloads/Tugas%20Magang%20Solusilokal.Id/Mini%20Website/studio%20musik/src/App.tsx) : Komponen utama yang menghubungkan ke landing page.
- [`src/index.css`](file:///c:/Users/U%20S%20E%20R/Downloads/Tugas%20Magang%20Solusilokal.Id/Mini%20Website/studio%20musik/src/index.css) : Konfigurasi Tailwind CSS dan font Google (Inter).
- [`standalone.html`](file:///c:/Users/U%20S%20E%20R/Downloads/Tugas%20Magang%20Solusilokal.Id/Mini%20Website/studio%20musik/standalone.html) : File HTML mandiri (single-file) untuk preview instan tanpa server.
- [`preview.bat`](file:///c:/Users/U%20S%20E%20R/Downloads/Tugas%20Magang%20Solusilokal.Id/Mini%20Website/studio%20musik/preview.bat) : Skrip launcher preview interaktif di Windows.
- [`start_preview.bat`](file:///c:/Users/U%20S%20E%20R/Downloads/Tugas%20Magang%20Solusilokal.Id/Mini%20Website/studio%20musik/start_preview.bat) : Skrip 1-klik preview.
