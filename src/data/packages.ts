export type WebPackage = {
  id: string;
  name: string;
  number: string;
  price: string;
  tagline: string;
  description: string;
  includes: string[];
  excludes?: string[];
  managed?: string[];
  cocokUntuk: string;
  cta: string;
  featured?: boolean;
  badge?: string;
  order: number;
};

export const packages: WebPackage[] = [
  {
    id: "starter",
    name: "Starter",
    number: "Paket 01",
    price: "Rp120.000",
    tagline: "Biar orang yang mencari nama bisnis Anda di Google benar-benar menemukannya.",
    description:
      "Landing page satu halaman tanpa CMS. Cocok kalau Anda cuma butuh orang bisa cari nama bisnis Anda, dan ketemu — alamat, jam buka, kontak, dan tombol WhatsApp dalam satu halaman yang rapi.",
    includes: [
      "Website 1 halaman",
      "Tampilan responsif untuk desktop dan mobile",
      "Profil bisnis",
      "Informasi layanan atau produk",
      "Informasi kontak",
      "Tombol WhatsApp",
      "Link media sosial",
      "Google Maps",
      "Pengaturan SEO dasar",
      "SSL",
      "1x revisi minor",
    ],
    excludes: [
      "Domain",
      "Hosting",
      "CMS",
      "Database",
      "Backend",
      "Fitur khusus",
      "Integrasi lanjutan",
    ],
    cocokUntuk:
      "UMKM baru, usaha rumahan, freelancer, dan personal brand yang belum punya website sama sekali dan cuma butuh keberadaan yang jujur di internet.",
    cta: "Mulai Sekarang",
    order: 1,
  },
  {
    id: "ready",
    name: "Ready",
    number: "Paket 02",
    price: "Mulai dari Rp299.000",
    tagline: "Website yang dibangun cepat, tapi tidak dibangun sembarangan.",
    description:
      "Untuk bisnis yang sudah jalan dan butuh website jadi 'kantor kedua' — beranda, tentang, layanan, dan kontak, lengkap dengan tombol WhatsApp. Kami berangkat dari template yang tertata, lalu menyesuaikan isinya dengan bisnis Anda, bukan sebaliknya.",
    includes: [
      "Hingga 5 halaman",
      "Tampilan responsif",
      "Template website profesional",
      "Halaman Beranda",
      "Tentang Kami",
      "Layanan / Produk",
      "Kontak",
      "Integrasi WhatsApp",
      "Google Maps",
      "Integrasi media sosial",
      "Pengaturan SEO dasar",
      "SSL",
      "Deployment website",
      "Optimasi performa dasar",
      "1–2x revisi",
    ],
    cocokUntuk:
      "Restoran, kafe, salon, barbershop, jasa profesional, dan bisnis lokal yang butuh hadir online secepat mungkin tanpa kehilangan kesan rapi.",
    cta: "Pilih Paket Ready",
    order: 2,
  },
  {
    id: "cms",
    name: "CMS",
    number: "Paket 03",
    price: "Mulai dari Rp799.000",
    tagline: "Website yang bisa Anda kelola sendiri, tanpa menelepon developer tiap minggu.",
    description:
      "Cocok untuk bisnis yang rutin memperbarui konten — berita, galeri, agenda, tim. Anda mengelola sendiri lewat CMS; kami yang mengatur struktur dan desainnya supaya tetap rapi meski kontennya makin banyak.",
    includes: [
      "Hingga 7 halaman",
      "Tampilan responsif",
      "CMS",
      "Pengelolaan konten",
      "Blog / berita",
      "Pengelolaan gambar",
      "Form kontak",
      "Integrasi WhatsApp",
      "Google Maps",
      "Pengaturan SEO dasar",
      "SSL",
      "Deployment website",
      "Optimasi performa dasar",
      "Panduan penggunaan CMS",
      "Hingga 2x revisi",
    ],
    managed: [
      "Produk",
      "Layanan",
      "Artikel / berita",
      "Event / agenda",
      "Galeri",
      "Tim",
      "FAQ",
      "Konten bisnis lainnya",
    ],
    cocokUntuk:
      "Sekolah, lembaga pendidikan, klinik, organisasi, UMKM berkembang, dan bisnis yang rutin berbagi kabar terbaru kepada pelanggannya.",
    cta: "Buat Website CMS",
    order: 3,
  },
  {
    id: "business",
    name: "Business",
    number: "Paket 04",
    price: "Mulai dari Rp1.999.000",
    tagline: "Website yang dibangun sebagai fondasi bisnis, bukan sekadar halaman.",
    description:
      "Untuk bisnis yang sudah stabil dan butuh website yang ikut bekerja: struktur informasi diatur dari tujuan, desain menyesuaikan brand (bukan template), dan jalur kontak dibuat semudah mungkin. Ini paket yang paling sering kami rekomendasikan — dan paling sering kami kerjakan sehari-hari.",
    includes: [
      "Hingga 10 halaman",
      "Arahan visual yang disesuaikan dengan brand",
      "Tampilan responsif",
      "CMS",
      "Blog / sistem konten",
      "Section custom",
      "Form kontak & inquiry",
      "Integrasi WhatsApp",
      "Google Maps",
      "Pengaturan technical SEO dasar",
      "Persiapan Google Analytics",
      "Optimasi performa",
      "Interaksi & animasi dasar",
      "SSL",
      "Deployment website",
      "Panduan dasar",
      "Hingga 3x revisi",
      "Dukungan minor setelah website diluncurkan",
    ],
    cocokUntuk:
      "Bisnis berkembang, jasa profesional, klien B2B, klinik, properti, konsultan, dan personal brand yang butuh kehadiran digital yang bisa diandalkan.",
    cta: "Mulai Proyek",
    featured: true,
    badge: "PALING POPULER",
    order: 4,
  },
  {
    id: "business-pro",
    name: "Business Pro",
    number: "Paket 05",
    price: "Mulai dari Rp2.999.000",
    tagline: "Ketika desain dan detailnya perlu dirawat lebih dalam.",
    description:
      "Untuk brand yang sadar benar bedanya rapi dan 'rapi sekali': design system sendiri, interaksi yang lebih bernuansa, struktur yang lebih kompleks, dan pengujian yang lebih teliti. Ini untuk website yang pemiliknya tahu di mana detailnya berada.",
    includes: [
      "Custom UI/UX yang lebih mendalam",
      "Custom design system",
      "Struktur halaman yang lebih kompleks",
      "Interaksi yang lebih advanced",
      "Struktur konten yang lebih fleksibel",
      "Form & inquiry yang lebih kompleks",
      "Integrasi pihak ketiga",
      "Optimasi performa lanjutan",
      "Penyesuaian responsive yang lebih detail",
      "Testing & quality assurance yang lebih menyeluruh",
      "Hingga 4x revisi",
      "Dukungan setelah website diluncurkan",
    ],
    cocokUntuk:
      "Brand premium, perusahaan properti, professional firm, bisnis hospitality dan healthcare, serta organisasi yang sadar bahwa presentasi digital ikut menentukan kesan.",
    cta: "Konsultasikan Proyek",
    order: 5,
  },
  {
    id: "custom",
    name: "Custom",
    number: "Paket 06",
    price: "Mulai dari Rp3.999.000",
    tagline: "Website yang mengikuti cara kerja bisnis Anda — bukan kebalikannya.",
    description:
      "Saat kebutuhan sudah melampaui halaman: butuh login, database, dashboard, sistem booking, atau alur kerja sendiri. Kami mulai dari diskusi teknis dan proses bisnis Anda, bukan dari template harga.",
    includes: [
      "Backend custom",
      "Database",
      "Login & autentikasi pengguna",
      "Member area",
      "Dashboard admin",
      "Sistem booking",
      "Sistem pendaftaran",
      "Listing properti",
      "Manajemen produk",
      "Manajemen pesanan",
      "Payment gateway",
      "Integrasi API",
      "Integrasi CRM",
      "Workflow bisnis",
      "Fitur custom lainnya",
    ],
    cocokUntuk:
      "Bisnis dengan proses operasional yang kompleks, sistem internal, atau kebutuhan digital yang tidak bisa dipenuhi paket standar.",
    cta: "Konsultasikan Kebutuhan",
    order: 6,
  },
  {
    id: "web-app",
    name: "Web Application",
    number: "Paket 07",
    price: "Mulai dari Rp10.000.000",
    tagline: "Bukan sekadar website. Ini produk digital.",
    description:
      "Ketika yang Anda bangun sudah menjadi sistem dengan pengguna, data, dan alur kerja — portal pelanggan, platform SaaS, learning platform, marketplace. Ini jalur proyek yang berbeda: pembahasan dimulai dari kebutuhan teknis dan skala, bukan dari paket harga.",
    includes: [
      "Customer portal",
      "Sistem manajemen",
      "Sistem internal perusahaan",
      "Platform SaaS",
      "Learning platform",
      "Sistem booking",
      "Marketplace",
      "CRM",
      "Sistem inventory",
      "Dashboard laporan",
      "Sistem multi-user",
      "Platform digital custom",
    ],
    cocokUntuk:
      "Tim yang membangun sistem multi-pengguna, platform digital, atau produk SaaS yang membutuhkan arsitektur, keamanan, dan alur data yang serius.",
    cta: "Diskusikan Proyek",
    order: 7,
  },
];

export const packageScopeFactors = [
  { label: "Ruang lingkup proyek", value: "Luas dan detail kebutuhan" },
  { label: "Jumlah fitur", value: "Banyaknya fitur yang dikembangkan" },
  { label: "Kebutuhan database", value: "Struktur dan kompleksitas data" },
  { label: "Kompleksitas backend", value: "Logika bisnis dan sistem di balik layar" },
  { label: "Integrasi pihak ketiga", value: "Sistem eksternal yang dihubungkan" },
  { label: "Kebutuhan keamanan", value: "Tingkat proteksi data dan akses" },
  { label: "Waktu pengembangan", value: "Estimasi durasi pengerjaan" },
];

export const industries = [
  {
    name: "Pendidikan",
    description: "Sekolah, kursus, lembaga pendidikan, training center, dan organisasi pendidikan.",
    range: "Rp799 ribu – Rp4 juta+",
  },
  {
    name: "Jasa Profesional",
    description: "Konsultan, pengacara, akuntan, arsitek, agency, freelancer, dan professional firm.",
    range: "Rp799 ribu – Rp3 juta+",
  },
  {
    name: "Properti",
    description: "Developer, agen properti, perumahan, villa, apartemen, dan bisnis properti.",
    range: "Rp799 ribu – Rp5 juta+",
  },
  {
    name: "Healthcare",
    description: "Klinik, dokter, dental, wellness, dan organisasi healthcare.",
    range: "Rp799 ribu – Rp5 juta+",
  },
  {
    name: "Hospitality",
    description: "Hotel, villa, resort, homestay, restoran, kafe, dan bisnis pariwisata.",
    range: "Rp799 ribu – Rp5 juta+",
  },
  {
    name: "Retail & UMKM",
    description: "Brand lokal, toko, fashion, makanan, salon, barbershop, dan berbagai bisnis berkembang.",
    range: "Rp299 ribu – Rp5 juta+",
  },
  {
    name: "B2B & Corporate",
    description: "Manufaktur, distributor, supplier, teknologi, konstruksi, logistik, dan perusahaan B2B.",
    range: "Rp2 juta – Rp7 juta+",
  },
];

export const addOns = [
  { name: "Halaman tambahan", price: "Mulai Rp50 ribu" },
  { name: "Custom section", price: "Mulai Rp50 ribu" },
  { name: "Revisi tambahan", price: "Mulai Rp50 ribu" },
  { name: "CMS", price: "Mulai Rp500 ribu" },
  { name: "Blog / News CMS", price: "Mulai Rp300 ribu" },
  { name: "Katalog produk", price: "Mulai Rp300 ribu" },
  { name: "Form custom", price: "Mulai Rp100 ribu" },
  { name: "Fitur booking", price: "Mulai Rp500 ribu" },
  { name: "Database", price: "Mulai Rp1 juta" },
  { name: "Sistem Login / Member", price: "Mulai Rp1 juta" },
  { name: "Payment Gateway", price: "Mulai Rp500 ribu" },
  { name: "Integrasi API", price: "Mulai Rp500 ribu" },
  { name: "Multilingual", price: "Mulai Rp300 ribu" },
  { name: "Copywriting dasar", price: "Mulai Rp150 ribu" },
  { name: "Logo / Branding dasar", price: "Mulai Rp250 ribu" },
  { name: "Maintenance", price: "Mulai Rp100 ribu/bulan" },
];

export const faq = [
  {
    q: "Apakah domain dan hosting sudah termasuk?",
    a: [
      "Belum. Domain dan hosting dihitung terpisah dari biaya pembuatan website, kecuali secara khusus disebutkan dalam penawaran proyek.",
      "Kami dapat membantu memilih dan mengatur domain serta hosting untuk Anda.",
    ],
  },
  {
    q: "Apakah saya bisa meminta desain custom?",
    a: [
      "Bisa.",
      "Paket Starter dan Ready menggunakan pendekatan yang lebih sederhana. Untuk kebutuhan desain yang lebih custom, kami merekomendasikan paket CMS, Business, atau Business Pro.",
    ],
  },
  {
    q: "Apakah saya bisa mengelola website sendiri?",
    a: [
      "Bisa.",
      "Pilih paket CMS, Business, atau Business Pro jika Anda membutuhkan CMS untuk mengelola konten website.",
    ],
  },
  {
    q: "Apakah SOLVRA bisa membuat website dengan database?",
    a: [
      "Bisa.",
      "Website yang membutuhkan database dan backend custom tersedia melalui paket Custom atau Web Application.",
    ],
  },
  {
    q: "Apakah SOLVRA bisa membuat toko online?",
    a: [
      "Bisa.",
      "Fitur e-commerce dapat ditambahkan sebagai bagian dari proyek custom atau dibuat sebagai solusi khusus sesuai kebutuhan bisnis Anda.",
    ],
  },
  {
    q: "Bagaimana jika kebutuhan saya tidak sesuai dengan paket yang tersedia?",
    a: [
      "Tidak masalah.",
      "Kami akan membantu memahami kebutuhan Anda dan merekomendasikan paket atau solusi yang paling sesuai.",
    ],
  },
  {
    q: "Berapa lama proses pembuatan website?",
    a: [
      "Waktu pengerjaan tergantung pada paket, jumlah halaman, kesiapan konten, jumlah revisi, serta kompleksitas fitur.",
      "Estimasi waktu akan disampaikan sebelum proyek dimulai.",
    ],
  },
  {
    q: "Apakah harga di atas adalah harga final?",
    a: [
      "Harga yang tercantum adalah harga mulai dari.",
      "Harga akhir dapat berubah sesuai ruang lingkup proyek, jumlah halaman, konten, revisi, fitur, integrasi, kebutuhan teknis, serta infrastruktur yang digunakan.",
    ],
  },
];

export const domainHosting = {
  heading: "Belum punya domain dan hosting?",
  paragraphs: [
    "Tidak masalah.",
    "Kami dapat membantu memilih dan mengatur domain serta hosting yang sesuai dengan kebutuhan website Anda.",
    "Biaya domain dan hosting dihitung terpisah dari biaya pembuatan website, kecuali secara khusus tercantum dalam penawaran proyek.",
  ],
  factors: [
    "Ekstensi domain",
    "Provider hosting",
    "Kapasitas penyimpanan",
    "Kebutuhan traffic",
    "Email bisnis",
    "Kebutuhan teknis lainnya",
  ],
  cta: "Tanyakan Domain & Hosting",
};

export const customCta = {
  eyebrow: "Tidak menemukan paket yang sesuai?",
  heading: "Ceritakan kebutuhan Anda.",
  paragraphs: [
    "Paket di atas adalah titik awal, bukan batasan.",
    "Jika Anda memiliki kebutuhan khusus, kami dapat menyesuaikan solusi berdasarkan tujuan dan kebutuhan bisnis Anda.",
    "Mulai dari website sederhana, CMS, katalog produk, booking system, database, hingga solusi digital custom.",
  ],
  cta: "Konsultasikan Proyek",
};

export const finalCta = {
  eyebrow: "Langkah Berikutnya",
  headline: "Siap membangun website untuk bisnis Anda?",
  text:
    "Tidak yakin harus memilih paket yang mana? Ceritakan bisnis dan kebutuhan Anda. Kami akan membantu menentukan solusi yang paling sesuai dengan kebutuhan dan anggaran Anda.",
  primaryLabel: "Konsultasi Gratis",
  primaryHref: "/contact",
  secondaryLabel: "Mulai Proyek Anda",
  secondaryHref: "/contact",
};