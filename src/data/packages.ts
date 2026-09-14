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
    tagline: "Website sederhana untuk mulai hadir secara online.",
    description:
      "Pilihan praktis untuk bisnis atau individu yang membutuhkan website satu halaman dengan informasi dasar yang jelas.",
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
      "UMKM baru, usaha rumahan, freelancer, personal brand, portofolio sederhana, dan bisnis yang baru ingin mulai memiliki website.",
    cta: "Mulai Sekarang",
    order: 1,
  },
  {
    id: "ready",
    name: "Ready",
    number: "Paket 02",
    price: "Mulai dari Rp299.000",
    tagline: "Website siap digunakan untuk bisnis Anda.",
    description:
      "Untuk bisnis yang membutuhkan website sederhana dengan struktur yang lebih lengkap dan siap dipublikasikan.",
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
      "UMKM, bisnis lokal, restoran, kafe, salon, barbershop, jasa profesional, dan bisnis kecil yang ingin memiliki website dengan cepat.",
    cta: "Pilih Paket Ready",
    order: 2,
  },
  {
    id: "cms",
    name: "CMS",
    number: "Paket 03",
    price: "Mulai dari Rp799.000",
    tagline: "Website yang bisa Anda kelola sendiri.",
    description:
      "Cocok untuk bisnis yang ingin memperbarui konten website tanpa harus selalu meminta bantuan developer.",
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
      "Sekolah, lembaga pendidikan, jasa profesional, klinik, properti, hospitality, organisasi, UMKM berkembang, dan bisnis yang rutin memperbarui konten.",
    cta: "Buat Website CMS",
    order: 3,
  },
  {
    id: "business",
    name: "Business",
    number: "Paket 04",
    price: "Mulai dari Rp1.999.000",
    tagline: "Website profesional yang dibangun untuk bisnis Anda.",
    description:
      "Untuk bisnis yang membutuhkan lebih dari sekadar website biasa. Kami menggabungkan struktur, desain, pengalaman pengguna, dan teknologi untuk membantu website Anda terlihat profesional, membangun kepercayaan, dan mendukung tujuan bisnis.",
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
      "Bisnis yang sudah berkembang, UMKM, jasa profesional, pendidikan, properti, healthcare, hospitality, retail, B2B, konsultan, serta personal & professional brand.",
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
    tagline: "Pengalaman digital yang lebih detail untuk bisnis yang berkembang.",
    description:
      "Untuk bisnis yang membutuhkan tingkat penyesuaian desain, pengalaman pengguna, dan fitur yang lebih tinggi.",
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
      "Brand premium, perusahaan properti, professional firm, bisnis hospitality, healthcare, B2B, dan organisasi yang membutuhkan kehadiran digital yang lebih kuat.",
    cta: "Konsultasikan Proyek",
    order: 5,
  },
  {
    id: "custom",
    name: "Custom",
    number: "Paket 06",
    price: "Mulai dari Rp3.999.000",
    tagline: "Website yang dirancang mengikuti cara kerja bisnis Anda.",
    description:
      "Ketika kebutuhan bisnis sudah melampaui website biasa, SOLVRA dapat membangun solusi yang disesuaikan dengan kebutuhan dan proses bisnis.",
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
      "Bisnis dengan kebutuhan khusus, proses operasional yang kompleks, sistem internal, atau kebutuhan digital yang tidak dapat dipenuhi oleh website standar.",
    cta: "Konsultasikan Kebutuhan",
    order: 6,
  },
  {
    id: "web-app",
    name: "Web Application",
    number: "Paket 07",
    price: "Mulai dari Rp10.000.000",
    tagline: "Bukan sekadar website. Sebuah produk digital.",
    description:
      "Untuk kebutuhan yang sudah berkembang menjadi aplikasi berbasis web dengan sistem, pengguna, database, dan alur kerja yang lebih kompleks.",
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
      "Bisnis yang membutuhkan solusi aplikasi web dengan sistem, pengguna, dan alur kerja yang kompleks.",
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
    range: "Rp1.999 juta – Rp7 juta+",
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