import React, { useState, useEffect } from 'react';
import { 
  Instagram, 
  MapPin, 
  MessageCircle, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ArrowDown, 
  Share,
  Copy,
  Check,
  Twitter,
  Clock,
  Calendar,
  Star,
  Quote,
  Mic,
  Headphones,
  Music,
  Info,
  History,
  Plus,
  Minus,
  Youtube,
  Radio,
  ListMusic,
  MicVocal,
  Speaker,
  Podcast,
  SlidersHorizontal
} from 'lucide-react';
import profileImg from './profile.png';
import heroImg from './hero-bg.jpg';
import studioAImg from './studio-a.webp';
import rehearsalImg from './rehearsal.webp';
import podcastImg from './podcast.webp';
import mixingImg from './mixing.webp';

const pageData = {
  name: "Soundscape Tech",
  phone: "6289529605601",
  address: "Palangka Raya, Kalimantan Tengah",
  title: "Premium Music Production & Recording Studio",
  description: "Wujudkan karya audio dan visual terbaik Anda bersama Soundscape Tech. Menggabungkan akustik ruang berkelas dengan teknologi produksi modern untuk hasil standar industri.",
  profileImg: profileImg, 
  heroImg: heroImg,
  links: {
    instagram: "https://www.instagram.com/solusilokal.id",
    maps: "https://www.google.com/maps/place/Palangka+Raya", 
    tiktok: "https://www.tiktok.com/@solusilokal.id" 
  },
  about: "Soundscape Tech adalah ruang kreatif yang didedikasikan untuk musisi, kreator konten, dan profesional audio. Kami menyediakan ekosistem produksi lengkap mulai dari pra-produksi, rekaman, hingga pasca-produksi (mixing & mastering) dengan dukungan engineer berpengalaman.",
  history: "Didirikan pada tahun 2018, Soundscape Tech berawal dari passion sekelompok sound engineer lokal yang bermimpi menyediakan fasilitas rekaman standar internasional yang tetap dapat diakses oleh musisi independen. Kini, kami telah memfasilitasi ratusan karya dari berbagai genre.",
  locationHighlights: [
    { text: "Strategis di Pusat Kota" },
    { text: "Akses 24 Jam (By Appt)" },
    { text: "Parkir Luas & Aman" },
    { text: "Acoustic Treated Rooms" }
  ],
  catalog: [
    { 
      name: "Recording Studio A", 
      price: "Rp 150.000 / Jam", 
      img: studioAImg, 
      desc: "Ideal untuk vokal, dubbing, dan instrumen solo. Termasuk operator/engineer dasar.",
      icon: "MicVocal"
    },
    { 
      name: "Rehearsal Room", 
      price: "Rp 100.000 / Jam", 
      img: rehearsalImg, 
      desc: "Ruang latihan full band kedap suara dengan alat standar panggung/konser profesional.",
      icon: "Speaker"
    },
    { 
      name: "Podcast Studio", 
      price: "Rp 120.000 / Jam", 
      img: podcastImg, 
      desc: "Setup 4 Mic Shure, lighting kamera ready, akustik ruang broadcast standard.",
      icon: "Podcast"
    },
    { 
      name: "Mixing & Mastering", 
      price: "Mulai Rp 500k / Track", 
      img: mixingImg, 
      desc: "Proses paska produksi audio oleh Head Engineer kami untuk hasil siap rilis di platform digital.",
      icon: "SlidersHorizontal"
    }
  ],
  faq: [
    { 
      q: "Apakah harga sewa studio rekaman sudah termasuk Sound Engineer?", 
      a: "Ya, untuk penyewaan Recording Studio A sudah termasuk satu orang operator dasar. Untuk kebutuhan mixing dan mastering lebih lanjut dikenakan biaya terpisah." 
    },
    { 
      q: "Berapa kapasitas maksimal untuk Rehearsal Room?", 
      a: "Rehearsal Room kami didesain cukup luas dan dapat menampung hingga maksimal 7 orang dengan sangat nyaman saat latihan." 
    },
    { 
      q: "Apakah bisa membawa alat atau perlengkapan musik sendiri?", 
      a: "Sangat bisa! Anda dipersilakan membawa instrumen, pedalboard, atau perlengkapan sendiri. Tim kami akan membantu setup di ruangan." 
    },
    { 
      q: "Apakah bisa melakukan booking mendadak (hari H)?", 
      a: "Kami sangat menyarankan booking minimal H-1 untuk memastikan jadwal. Namun, Anda tetap bisa menghubungi admin untuk mengecek ketersediaan slot kosong di hari H." 
    }
  ],
  testimonials: [
    { name: "Andi R.", role: "Indie Musician", rating: 5, text: "Akustik ruangannya juara! Hasil rekaman vokal sangat bersih. Operatornya juga sangat asik dan kooperatif ngebantu cari tone yang pas." },
    { name: "Sarah L.", role: "Podcaster", rating: 5, text: "Studio podcast yang proper banget di Jaksel. Setup mic dan earphone-nya gampang dipake, tempatnya juga cozy buat ngobrol lama." },
    { name: "Grup Band XYZ", role: "Band", rating: 4, text: "Langganan buat rehearsal sebelum manggung. Alatnya selalu terawat, ampli drum set-nya enak. Minusnya cuma slotnya sering full jadi harus cepet-cepetan booking." }
  ]
};

export default function App() {
  const [lightbox, setLightbox] = useState({ isOpen: false, images: [], currentIndex: 0 });
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openLightbox = (images, index) => {
    setLightbox({ isOpen: true, images, currentIndex: index });
    document.body.style.overflow = 'hidden'; 
  };

  const closeLightbox = () => {
    setLightbox({ ...lightbox, isOpen: false });
    document.body.style.overflow = 'unset';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightbox(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length
    }));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setLightbox(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length
    }));
  };

  const scrollToForm = () => {
    document.getElementById('booking-form').scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const date = formData.get('date');
    const time = formData.get('time');
    const serviceType = formData.get('serviceType');
    const notes = formData.get('notes');
    
    const waText = `Halo Admin *${pageData.name}* 🎧%0A%0APerkenalkan, saya *${name}*.%0ASaya ingin booking jadwal untuk:%0A%0A📌 Layanan: *${serviceType}*%0A📅 Tanggal: *${date}*%0A⏰ Jam: *${time}*%0A📝 Catatan: ${notes ? notes : '-'}%0A%0AMohon info ketersediaan jadwalnya ya. Terima kasih!`;
    const waUrl = `https://wa.me/${pageData.phone}?text=${waText}`;
    window.open(waUrl, '_blank');
  };

  const handleShare = async () => {
    const shareData = {
      title: pageData.name,
      text: pageData.title,
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      setShowShareModal(true);
    }
  };

  const copyToClipboard = () => {
    const tempInput = document.createElement('input');
    tempInput.value = window.location.href;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareToWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(pageData.title + ' ' + window.location.href)}`, '_blank');
  };

  const shareToTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(pageData.name)}`, '_blank');
  };

  const renderIcon = (iconName) => {
    switch(iconName) {
      case 'MicVocal': return <MicVocal size={20} />;
      case 'SlidersHorizontal': return <SlidersHorizontal size={20} />;
      case 'Speaker': return <Speaker size={20} />;
      case 'Podcast': return <Podcast size={20} />;
      default: return <Check size={20} />;
    }
  };

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        body {
          background-color: #0d1b2a; /* Deep Navy from logo */
          color: #F8FAFC;
          margin: 0;
          font-family: 'Inter', sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Custom selection color */
        ::selection {
          background: #d4a373; /* Gold/Bronze from logo */
          color: #0d1b2a;
        }
      `}</style>
      
      <main className="w-full max-w-[480px] mx-auto relative shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-[#1b263b] min-h-screen overflow-hidden pb-32 border-x border-[#415a77]/50">
        
        {/* HERO SECTION - STUDIO MUSIK */}
        <section className="relative w-full min-h-[100dvh] flex flex-col justify-end pb-12 px-6 bg-[#0d1b2a]">
          
          <button
            onClick={handleShare}
            aria-label="Share this page"
            className="absolute top-6 right-6 z-20 p-3 bg-black/40 backdrop-blur-md rounded-full border border-[#d4a373]/30 text-slate-200 hover:bg-black/60 transition-all shadow-sm"
          >
            <Share size={20} />
          </button>

          <div className="absolute inset-0 z-0">
            <img 
              src={pageData.heroImg} 
              alt={pageData.name} 
              className="w-full h-full object-cover object-center opacity-70"
            />
            {/* Gradient overlay adapting to logo colors */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a] via-[#0d1b2a]/80 to-[#1b263b]/20"></div>
            <div className="absolute inset-0 bg-[#415a77]/20 mix-blend-overlay"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center mt-40">
            <div className="w-32 h-32 rounded-full p-1 bg-white/5 backdrop-blur-md mb-6 shadow-2xl border border-[#d4a373]/50 relative group">
              <div className="absolute inset-0 bg-[#d4a373]/20 rounded-full animate-pulse group-hover:bg-[#d4a373]/40 transition-colors"></div>
              <img 
                src={pageData.profileImg} 
                alt="Profile" 
                className="w-full h-full rounded-full object-contain p-2 bg-white relative z-10"
              />
            </div>

            <h1 className="text-4xl font-extrabold text-[#d4a373] mb-3 leading-tight tracking-tight drop-shadow-md">
              {pageData.name}
            </h1>
            <p className="text-[#e0e1dd] font-light text-sm leading-relaxed mb-6 max-w-[95%]">
              {pageData.description}
            </p>

            {}
            <div className="flex flex-col items-center gap-3 w-full max-w-sm mb-8">
              <div className="flex w-full gap-3">
                <a 
                  href={pageData.links.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-[#d4a373]/50 transition-all text-slate-200 shadow-sm text-sm font-medium"
                >
                  <Instagram size={18} className="text-[#d4a373]" /> Instagram
                </a>
                <a 
                  href={pageData.links.tiktok}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-[#d4a373]/50 transition-all text-slate-200 shadow-sm text-sm font-medium"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[#d4a373]" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg> TikTok
                </a>
              </div>
              <a 
                href={pageData.links.maps}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-[#d4a373]/50 transition-all text-slate-200 shadow-sm text-sm font-medium"
              >
                <MapPin size={18} className="text-[#778da9]" /> Lokasi
              </a>
            </div>

            <button 
              onClick={scrollToForm}
              className="group relative flex items-center justify-center gap-3 w-full max-w-sm py-4 bg-[#d4a373] text-[#0d1b2a] rounded-2xl font-bold text-[14px] uppercase tracking-wider hover:bg-[#e9b889] transition-all shadow-[0_0_20px_rgba(212,163,115,0.4)] border border-[#d4a373]"
            >
              Booking Studio
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </section>

        {}
        <section className="pt-12 pb-8 px-6 bg-[#1b263b] relative">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4a373]/50 to-transparent"></div>
          
          <div className="flex flex-col gap-6">
            <div className="bg-[#0d1b2a] border border-[#415a77]/50 p-6 rounded-3xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#415a77]/10 rounded-full blur-3xl"></div>
              <div className="flex items-center gap-3 mb-4 relative z-10">
                <div className="p-2 bg-[#415a77]/20 rounded-xl text-[#d4a373]">
                  <Info size={24} />
                </div>
                <h2 className="text-xl font-extrabold text-[#e0e1dd] tracking-tight">Tentang Kami</h2>
              </div>
              <p className="text-[#778da9] text-sm leading-relaxed relative z-10">
                {pageData.about}
              </p>
            </div>

            <div className="bg-[#0d1b2a] border border-[#415a77]/50 p-6 rounded-3xl shadow-lg relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#d4a373]/5 rounded-full blur-3xl"></div>
              <div className="flex items-center gap-3 mb-4 relative z-10">
                <div className="p-2 bg-[#d4a373]/10 rounded-xl text-[#d4a373]">
                  <History size={24} />
                </div>
                <h2 className="text-xl font-extrabold text-[#e0e1dd] tracking-tight">Sejarah</h2>
              </div>
              <p className="text-[#778da9] text-sm leading-relaxed relative z-10">
                {pageData.history}
              </p>
            </div>
          </div>
        </section>

        {}
        <section className="py-10 bg-[#0d1b2a] border-t border-b border-[#415a77]/50">
          <div className="px-6 mb-6 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <ListMusic className="text-[#d4a373]" size={24} />
              <h2 className="text-2xl font-extrabold text-[#e0e1dd] tracking-tight">Katalog & Harga</h2>
            </div>
            <p className="text-[#778da9] text-xs ml-8">Pilih layanan dan fasilitas studio yang sesuai dengan kebutuhan produksi Anda.</p>
          </div>
          
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-5 px-6 pb-6 no-scrollbar">
            {pageData.catalog.map((item, idx) => (
              <div 
                key={idx}
                className="snap-center shrink-0 w-[260px] rounded-3xl overflow-hidden relative group border border-[#415a77]/50 shadow-xl bg-[#1b263b] flex flex-col"
              >
                <div 
                  className="w-full aspect-[4/3] relative cursor-pointer overflow-hidden"
                  onClick={() => openLightbox(pageData.catalog.map(c => c.img), idx)}
                >
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a] via-transparent to-transparent opacity-80"></div>
                  <div className="absolute bottom-3 left-3 bg-[#0d1b2a]/50 backdrop-blur-md p-1.5 rounded-lg border border-[#d4a373]/30 text-[#d4a373]">
                    {renderIcon(item.icon)}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-[#e0e1dd] font-bold text-base mb-1">{item.name}</h3>
                  <p className="text-[#d4a373] font-semibold text-sm mb-3">{item.price}</p>
                  <p className="text-[#778da9] text-xs leading-relaxed mt-auto">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {}
        <section className="py-10 px-6 bg-[#1b263b]">
          <div className="mb-6 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <MapPin className="text-[#d4a373]" size={24} />
              <h2 className="text-2xl font-extrabold text-[#e0e1dd] tracking-tight">Lokasi Studio</h2>
            </div>
            <p className="text-[#778da9] text-xs ml-8">Kunjungi markas kami dan rasakan langsung atmosfer kreatifnya.</p>
          </div>

          <div className="bg-[#0d1b2a] border border-[#415a77]/50 rounded-3xl p-6 shadow-lg mb-6">
            <p className="text-[#e0e1dd] text-sm leading-relaxed mb-4 font-medium">
              {pageData.address}
            </p>
            <a 
              href={pageData.links.maps}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 bg-[#415a77]/20 border border-[#415a77]/50 text-[#e0e1dd] rounded-xl text-sm font-semibold flex items-center justify-center gap-2 hover:bg-[#415a77]/40 transition-colors"
            >
              Buka di Google Maps
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-2 w-full max-w-md mx-auto">
            {pageData.locationHighlights.map((loc, idx) => (
              <span key={idx} className="flex items-center gap-1.5 px-3 py-2 bg-[#0d1b2a] border border-[#415a77]/50 rounded-full text-[11px] text-[#778da9] font-medium shadow-sm">
                <Check size={12} className="text-[#d4a373]" />
                {loc.text}
              </span>
            ))}
          </div>
        </section>

        {}
        <section className="py-10 px-6 bg-[#0d1b2a] border-t border-[#415a77]/50">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-extrabold text-[#e0e1dd] tracking-tight mb-2">Frequently Asked Questions</h2>
            <p className="text-[#778da9] text-xs">Pertanyaan yang sering diajukan seputar layanan studio.</p>
          </div>

          <div className="flex flex-col gap-3">
            {pageData.faq.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-[#1b263b] border border-[#415a77]/50 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                >
                  <span className="text-sm font-semibold text-[#e0e1dd] pr-4">{faq.q}</span>
                  <div className={`p-1 rounded-full border ${activeFaq === idx ? 'border-[#d4a373] bg-[#d4a373]/10 text-[#d4a373]' : 'border-[#415a77] text-[#778da9]'} transition-colors`}>
                    {activeFaq === idx ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                <div 
                  className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${activeFaq === idx ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-[#778da9] text-sm leading-relaxed border-t border-[#415a77]/50 pt-3">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {}
        <section className="py-10 px-6 bg-[#1b263b] border-t border-[#415a77]/50">
          <div className="mb-6 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Quote className="text-[#d4a373]" size={24} />
              <h2 className="text-2xl font-extrabold text-[#e0e1dd] tracking-tight">Apa Kata Mereka</h2>
            </div>
            <p className="text-[#778da9] text-xs ml-8">Testimoni dari rekan musisi dan kreator tentang Soundscape.</p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 no-scrollbar">
            {pageData.testimonials.map((testi, idx) => (
              <div key={idx} className="snap-center shrink-0 w-[280px] bg-[#0d1b2a] p-6 rounded-3xl border border-[#415a77]/50 shadow-sm flex flex-col gap-4 relative overflow-hidden">
                <Quote size={40} className="absolute top-4 right-4 text-[#415a77] opacity-20 rotate-180" />
                <div className="flex items-center gap-1">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#d4a373] text-[#d4a373]" />
                  ))}
                </div>
                <p className="text-[#e0e1dd] text-sm leading-relaxed italic relative z-10">"{testi.text}"</p>
                <div className="mt-auto pt-4 border-t border-[#415a77]/50 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1b263b] border border-[#d4a373]/30 flex items-center justify-center text-[#d4a373] font-bold text-sm">
                    {testi.name.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[13px] font-bold text-[#e0e1dd]">{testi.name}</span>
                    <span className="text-[11px] text-[#778da9]">{testi.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {}
        <section id="booking-form" className="py-12 px-6 bg-[#0d1b2a] border-t border-[#415a77]/50 relative">
          <div className="bg-[#1b263b] border border-[#415a77]/50 rounded-[2rem] p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#415a77]/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#d4a373]/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10 mb-8 text-center">
              <h2 className="text-2xl font-extrabold text-[#e0e1dd] mb-2">Booking Studio</h2>
              <p className="text-[#778da9] text-sm leading-relaxed">Amankan slot jadwal Anda sekarang. Admin kami akan mengkonfirmasi pesanan via WhatsApp.</p>
            </div>
            
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-5 relative z-10">
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold text-[#778da9] uppercase tracking-wide ml-1">Nama Lengkap / Tim</label>
                <input 
                  type="text" 
                  name="name" 
                  required
                  placeholder="Contoh: Budi / Band XYZ"
                  className="w-full bg-[#0d1b2a] border border-[#415a77]/50 rounded-xl px-4 py-4 text-sm text-[#e0e1dd] placeholder-[#415a77] focus:outline-none focus:border-[#d4a373] focus:ring-1 focus:ring-[#d4a373] transition-all"
                />
              </div>

              <div className="flex gap-3">
                <div className="flex flex-col gap-2 w-full">
                  <label className="text-[11px] font-bold text-[#778da9] uppercase tracking-wide ml-1">Tanggal Booking</label>
                  <input 
                    type="date" 
                    name="date" 
                    required
                    className="w-full bg-[#0d1b2a] border border-[#415a77]/50 rounded-xl px-4 py-4 text-sm text-[#e0e1dd] placeholder-[#415a77] focus:outline-none focus:border-[#d4a373] focus:ring-1 focus:ring-[#d4a373] transition-all"
                    style={{ colorScheme: 'dark' }}
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label className="text-[11px] font-bold text-[#778da9] uppercase tracking-wide ml-1">Jam (Mulai)</label>
                  <input 
                    type="time" 
                    name="time" 
                    required
                    className="w-full bg-[#0d1b2a] border border-[#415a77]/50 rounded-xl px-4 py-4 text-sm text-[#e0e1dd] placeholder-[#415a77] focus:outline-none focus:border-[#d4a373] focus:ring-1 focus:ring-[#d4a373] transition-all"
                    style={{ colorScheme: 'dark' }}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold text-[#778da9] uppercase tracking-wide ml-1">Pilihan Layanan</label>
                <select 
                  name="serviceType" 
                  required
                  className="w-full bg-[#0d1b2a] border border-[#415a77]/50 rounded-xl px-4 py-4 text-sm text-[#e0e1dd] focus:outline-none focus:border-[#d4a373] focus:ring-1 focus:ring-[#d4a373] transition-all appearance-none"
                >
                  <option value="" className="text-[#778da9]">Pilih layanan studio...</option>
                  {pageData.catalog.map((item, idx) => (
                    <option key={idx} value={item.name}>{item.name} - {item.price}</option>
                  ))}
                  <option value="Lainnya">Layanan Lainnya / Custom</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold text-[#778da9] uppercase tracking-wide ml-1">Catatan Tambahan (Opsional)</label>
                <textarea 
                  name="notes" 
                  rows="3"
                  placeholder="Cth: Bawa alat sendiri, butuh sewa gitar tambahan, durasi 3 jam..."
                  className="w-full bg-[#0d1b2a] border border-[#415a77]/50 rounded-xl px-4 py-4 text-sm text-[#e0e1dd] placeholder-[#415a77] focus:outline-none focus:border-[#d4a373] focus:ring-1 focus:ring-[#d4a373] transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full mt-2 bg-[#d4a373] text-[#0d1b2a] font-bold text-sm tracking-wide py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#e9b889] transition-colors shadow-[0_0_15px_rgba(212,163,115,0.3)]"
              >
                Kirim Pesan WhatsApp
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="text-[#0d1b2a]">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </button>
            </form>
          </div>
        </section>

        {}
        <footer className="pt-8 pb-12 text-center flex flex-col items-center justify-center mx-6 mt-4">
          <div className="w-full h-px bg-[#415a77]/30 mb-8"></div>
          
          <div className="w-16 h-16 bg-[#1b263b] rounded-full shadow-lg border border-[#415a77]/50 flex items-center justify-center mb-4 p-1 overflow-hidden relative group">
            <div className="absolute inset-0 bg-[#d4a373]/10 rounded-full"></div>
            <img src={pageData.profileImg} alt="Footer Logo" className="w-full h-full object-contain p-1.5 bg-white rounded-full relative z-10" />
          </div>
          
          <div className="text-[#778da9] text-xs flex flex-col gap-1 items-center">
            <span className="font-extrabold text-[#e0e1dd] text-sm tracking-wide">{pageData.name}</span>
            <span className="max-w-[250px]">{pageData.address}</span>
          </div>

          <p className="text-[#415a77] text-[10px] mt-8">
            © {new Date().getFullYear()} {pageData.name}. All rights reserved.
          </p>

          <a 
            href="https://www.solusilokal.id" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#778da9] text-[10px] mt-2 tracking-wide font-medium hover:text-[#d4a373] transition-colors"
          >
            powered by solusilokal.id
          </a>
        </footer>

        <div 
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-[432px] z-40 transition-all duration-500 ease-out ${
            showStickyCTA ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'
          }`}
        >
          <button 
            onClick={scrollToForm}
            className="w-full flex items-center justify-between px-6 py-4 bg-[#0d1b2a]/95 backdrop-blur-xl border border-[#d4a373]/40 rounded-2xl text-white shadow-[0_10px_40px_rgba(0,0,0,0.8)] hover:bg-[#1b263b] active:scale-[0.98] transition-all"
          >
            <span className="font-bold text-sm tracking-wide text-[#e0e1dd]">Booking Sekarang</span>
            <div className="bg-[#d4a373] text-[#0d1b2a] p-2 rounded-xl">
              <Calendar size={18} className="fill-none stroke-current stroke-2" />
            </div>
          </button>
        </div>

      </main>

      {}
      {lightbox.isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0d1b2a]/95 backdrop-blur-xl"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 p-3 bg-white/10 rounded-full text-[#e0e1dd] hover:bg-white/20 transition-all z-50 border border-white/10"
            onClick={closeLightbox}
          >
            <X size={20} />
          </button>

          {lightbox.images.length > 1 && (
            <button 
              className="absolute left-4 p-3 bg-white/10 rounded-full text-[#e0e1dd] hover:bg-white/20 transition-all z-50 border border-white/10"
              onClick={prevImage}
            >
              <ChevronLeft size={24} />
            </button>
          )}

          <div className="w-full max-w-4xl max-h-[100dvh] p-4 flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={lightbox.images[lightbox.currentIndex]} 
              alt="Lightbox View" 
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl border border-white/5"
            />
          </div>

          {lightbox.images.length > 1 && (
            <button 
              className="absolute right-4 p-3 bg-white/10 rounded-full text-[#e0e1dd] hover:bg-white/20 transition-all z-50 border border-white/10"
              onClick={nextImage}
            >
              <ChevronRight size={24} />
            </button>
          )}
          
          {lightbox.images.length > 1 && (
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#e0e1dd] text-xs font-bold tracking-[0.2em] bg-black/50 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
              {lightbox.currentIndex + 1} / {lightbox.images.length}
            </div>
          )}
        </div>
      )}

      {showShareModal && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-sm sm:items-center transition-opacity"
          onClick={() => setShowShareModal(false)}
        >
          <div
            className="w-full max-w-[480px] bg-[#1b263b] sm:rounded-3xl rounded-t-3xl p-6 relative overflow-hidden animate-in slide-in-from-bottom-full sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-300 border border-[#415a77]/50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center items-center mb-6 relative">
              <h3 className="text-[#e0e1dd] font-bold text-[15px]">Bagikan {pageData.name}</h3>
              <button
                onClick={() => setShowShareModal(false)}
                className="absolute right-0 p-1 text-[#778da9] hover:bg-[#0d1b2a] rounded-full transition-all"
              >
                <X size={20} />
              </button>
            </div>

            <div className="bg-[#0d1b2a] border border-[#415a77]/50 rounded-[24px] p-8 flex flex-col items-center justify-center mb-8 shadow-inner">
              <div className="w-[72px] h-[72px] rounded-full border border-[#d4a373]/30 mb-4 p-1 bg-white flex items-center justify-center overflow-hidden">
                <img src={pageData.profileImg} alt="Profile" className="w-full h-full rounded-full object-contain p-1" />
              </div>
              <h4 className="text-[#e0e1dd] font-bold text-lg text-center tracking-tight">@{pageData.name.toLowerCase().replace(/\s/g, '')}</h4>
              <p className="text-[#d4a373] text-sm mt-1 text-center font-medium opacity-90">{pageData.links.instagram.replace('https://www.', '')}</p>
            </div>

            <div className="flex overflow-x-auto gap-3 pb-2 no-scrollbar items-start px-1 mb-4">
              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button
                  onClick={copyToClipboard}
                  className="w-[60px] h-[60px] rounded-full bg-[#415a77]/20 flex items-center justify-center text-[#e0e1dd] hover:bg-[#415a77]/40 transition-all shadow-sm border border-[#415a77]/50"
                >
                  {copied ? <Check size={26} className="text-[#d4a373]" /> : <Copy size={26} />}
                </button>
                <span className="text-[11px] font-semibold text-[#778da9] text-center">
                  {copied ? 'Tersalin' : 'Salin Tautan'}
                </span>
              </div>

              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button
                  onClick={shareToTwitter}
                  className="w-[60px] h-[60px] rounded-full bg-black flex items-center justify-center text-[#e0e1dd] hover:bg-slate-900 border border-[#415a77]/50 transition-all shadow-sm"
                >
                  <Twitter size={26} />
                </button>
                <span className="text-[11px] font-semibold text-[#778da9] text-center">X</span>
              </div>

              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button
                  onClick={shareToWhatsApp}
                  className="w-[60px] h-[60px] rounded-full bg-[#25D366] flex items-center justify-center text-white hover:brightness-110 transition-all shadow-sm"
                >
                  <MessageCircle size={26} className="fill-current" />
                </button>
                <span className="text-[11px] font-semibold text-[#778da9] text-center">WhatsApp</span>
              </div>
            </div>
            
            <div className="w-full h-px bg-[#415a77]/30 mb-4"></div>
            
            <div className="flex flex-col items-center text-center">
              <h5 className="text-[#e0e1dd] font-bold text-[13px] mb-1">Ikuti Kami</h5>
              <p className="text-[#778da9] text-[11px] mb-4">Follow media sosial kami untuk portfolio audio terbaru.</p>
              <a href={pageData.links.instagram} target="_blank" rel="noreferrer" className="w-full py-3 bg-[#d4a373] text-[#0d1b2a] text-sm font-bold rounded-xl hover:bg-[#e9b889] transition-colors">
                Kunjungi Instagram
              </a>
            </div>
            
          </div>
        </div>
      )}
    </>
  );
}