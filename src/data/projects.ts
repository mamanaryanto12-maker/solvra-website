export type ProjectVisual =
  | "hero"
  | "editorial"
  | "gallery"
  | "mobile"
  | "dashboard"
  | "commerce"
  | "hospitality"
  | "booking";

export type ProjectStatus = "client" | "concept" | "coming-soon";

export type ProjectType = "Client Work" | "Studio Concept" | "Website Concept";

export type Project = {
  id: string;
  slug: string;
  title: string;
  industry: string;
  kind: ProjectType;
  services: string[];
  description: string;
  short: string;
  visual: ProjectVisual;
  image: string;
  imageAlt: string;
  featured: boolean;
  status: ProjectStatus;
  heroLabel: string;
  challenge: string;
  strategy: string;
  design: string;
  development: string;
  outcome: string;
  galleryCount: number;
};

export const projects: Project[] = [
  {
    id: "p1",
    slug: "nusantara-properties",
    title: "Nusantara Properties",
    industry: "Property",
    kind: "Studio Concept",
    services: ["Design", "Development"],
    description:
      "Website properti yang dirancang untuk membangun kepercayaan dan memandu calon pembeli menuju jadwal kunjungan lokasi.",
    short: "Membangun kepercayaan properti melalui presentasi unit dan alur inquiry yang jelas.",
    visual: "editorial",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "Presentasi unit properti premium dengan arsitektur dan interior yang elegan",
    featured: true,
    status: "concept",
    heroLabel: "Project studio konsep untuk sektor property",
    challenge:
      "Kepercayaan adalah segalanya di sektor properti. Calon pembeli perlu memahami kompleksitas unit, lokasi, dan fasilitas tanpa kebingungan.",
    strategy:
      "Kami menyusun hierarki informasi berbasis tahapan keputusan: eksplorasi unit, perbandingan, lalu pembuatan janji kunjungan lokasi.",
    design:
      "Palet hangat dan tenang dengan komposisi editorial pada presentasi unit. Fotografi arsitektur menjadi pusat visual dengan tipografi yang jelas dan lapang.",
    development:
      "Struktur halaman yang ringan dan cepat, form inquiry yang mudah diakses, serta integrasi pemetaan lokasi dan galeri yang responsif.",
    outcome:
      "Menghasilkan struktur yang lebih terarah dengan jalur konversi yang lebih langsung menuju kunjungan lokasi.",
    galleryCount: 4,
  },
  {
    id: "p2",
    slug: "teras-kita",
    title: "Teras Kita",
    industry: "Hospitality",
    kind: "Studio Concept",
    services: ["Design", "Development", "Digital Experience"],
    description:
      "Website kafe dan ruang komunitas yang menonjolkan atmosfer hangat serta memudahkan pengunjung melakukan reservasi.",
    short: "Menghadirkan atmosfer hangat dan alur reservasi yang sederhana.",
    visual: "hospitality",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "Suasana hangat interior kafe dan ruang komunitas",
    featured: true,
    status: "concept",
    heroLabel: "Project studio konsep untuk sektor hospitality",
    challenge:
      "Sebuah ruang komunitas perlu menyampaikan atmosfer — tidak hanya menu dan alamat. Pengunjung merasa antusias sebelum datang.",
    strategy:
      "Kami membangun narasi visual yang menonjolkan ruang, cerita di baliknya, lalu mempersingkat jarak menuju reservasi.",
    design:
      "Nuansa hangat, tipografi yang ramah, dan komposisi gambar yang menyerupai editorial majalah. Setiap bagian membawa pengunjung lebih dekat pada pengalaman nyata.",
    development:
      "Galeri yang ringan, halaman menu yang mudah dibaca, dan alur reservasi sederhana yang bekerja tanpa hambatan di ponsel.",
    outcome:
      "Website yang mampu menyampaikan atmosfer dan memandu pengunjung menuju tindakan reservasi dengan cara yang alami.",
    galleryCount: 4,
  },
  {
    id: "p3",
    slug: "klinik-sehat",
    title: "Klinik Sehat",
    industry: "Healthcare",
    kind: "Studio Concept",
    services: ["Design", "Digital Experience"],
    description:
      "Website klinik yang dirancang untuk membangun rasa tenang, menyampaikan informasi layanan dengan jelas, dan memudahkan pendaftaran.",
    short: "Kejelasan informasi dan proses pendaftaran yang menenangkan.",
    visual: "booking",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "Interior klinik yang bersih, terang, dan menenangkan",
    featured: false,
    status: "concept",
    heroLabel: "Project studio konsep untuk sektor healthcare",
    challenge:
      "Di sektor kesehatan, keraguan dan kebingungan adalah hambatan terbesar. Informasi layanan, jadwal, dan proses pendaftaran harus sangat jelas.",
    strategy:
      "Kami memprioritaskan transparansi: jadwal, layanan, harga, dan langkah pendaftaran disajikan di permukaan tanpa perlu menggali.",
    design:
      "Komposisi yang tenang dan bersih dengan ruang putih yang luas. Palet hijau sage menciptakan kesan terawat dan dapat dipercaya.",
    development:
      "Informasi terstruktur dengan tajuk yang jelas, akses cepat ke pendaftaran, dan struktur yang dipersiapkan untuk integrasi sistem booking.",
    outcome:
      "Membangun struktur informasi yang jujur dan menenangkan, memperpendek jarak antara minat dan pendaftaran.",
    galleryCount: 3,
  },
  {
    id: "p4",
    slug: "lintasan-edu",
    title: "Lintasan Edu",
    industry: "Education",
    kind: "Studio Concept",
    services: ["Design", "Development"],
    description:
      "Website lembaga pendidikan yang menyampaikan program, keunggulan, dan proses pendaftaran secara jelas bagi calon peserta dan orang tua.",
    short: "Program yang mudah dipahami, pendaftaran yang ringkas.",
    visual: "hero",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "Suasana kelas modern yang menonjolkan kegiatan belajar",
    featured: false,
    status: "concept",
    heroLabel: "Project studio konsep untuk sektor education",
    challenge:
      "Lembaga pendidikan harus meyakinkan dua pihak sekaligus: calon peserta dan orang tua. Informasi harus kredibel namun tetap respek pada waktu pembaca.",
    strategy:
      "Kami menyusun alur cerita seputar hasil belajar, program unggulan, dan dukungan yang diberikan, sebelum mengarahkan pada proses pendaftaran.",
    design:
      "Komposisi yang teratur dan membaca seperti sebuah katalog program yang rapi, dengan penekanan pada kejelasan hierarki informasi.",
    development:
      "Halaman program yang terstruktur rapi, alur pendaftaran yang ringkas, dan ruang informasi yang mudah diperbarui oleh pihak sekolah.",
    outcome:
      "Struktur informasi yang membantu calon peserta mengambil keputusan dengan tenang dan informasi yang lengkap.",
    galleryCount: 3,
  },
  {
    id: "p5",
    slug: "arsa-studio",
    title: "Arsa Studio",
    industry: "Professional Services",
    kind: "Studio Concept",
    services: ["Design", "Development", "Digital Experience"],
    description:
      "Website studio arsitektur yang menyampaikan pendekatan desain, karya terpilih, dan proses kolaborasi kepada calon klien.",
    short: "Presentasi karya dan pendekatan desain yang kredibel.",
    visual: "gallery",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "Ruang kerja studio arsitektur yang terkurasi dengan presisi",
    featured: true,
    status: "concept",
    heroLabel: "Project studio konsep untuk professional services",
    challenge:
      "Klien memilih studio arsitektur berdasarkan kepercayaan terhadap kualitas dan cara berpikir. Website harus membuktikan keduanya.",
    strategy:
      "Kami menempatkan karya sebagai bukti utama, didampingi pernyataan pendekatan yang jelas, lalu memandu menuju percakapan awal.",
    design:
      "Rasa editorial yang tenang dengan grid yang presisi, ruang yang luas, serta penekanan pada gambar yang terkurasi dengan baik.",
    development:
      "Tampilan portofolio yang besar namun cepat, proses kolaborasi yang mudah dibaca, dan jalur kontak yang langsung.",
    outcome:
      "Membangun kredibilitas melalui presentasi karya yang terkurasi dan komunikasi pendekatan yang jelas dan meyakinkan.",
    galleryCount: 4,
  },
  {
    id: "p6",
    slug: "pasar-moderna",
    title: "Pasar Moderna",
    industry: "Retail",
    kind: "Studio Concept",
    services: ["Design", "Development"],
    description:
      "Website toko ritel modern yang menyoroti koleksi produk dan memudahkan pengunjung menemukan serta terhubung dengan toko.",
    short: "Menghubungkan koleksi dengan pengunjung secara langsung.",
    visual: "commerce",
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "Display produk ritel modern yang ditata secara visual menggugah",
    featured: false,
    status: "concept",
    heroLabel: "Project studio konsep untuk sektor retail",
    challenge:
      "Ritel membutuhkan penyajian produk yang menggugah minat sekaligus informasi toko yang mudah diakses tanpa proses pembelian online yang rumit.",
    strategy:
      "Kami memisahkan dua tujuan dengan jelas: menarik minat melalui kurasi visual, dan memudahkan tindakan melalui informasi toko serta kontak langsung.",
    design:
      "Palet hangat krem dengan tipografi tegas. Produk ditampilkan dalam komposisi yang editorial dan mudah dipindai.",
    development:
      "Tampilan galeri produk yang ringan, filter kategori sederhana, dan integrasi WhatsApp untuk pertanyaan langsung.",
    outcome:
      "Menghasilkan ruang digital yang dapat dipindai dengan cepat dan menghubungkan pengunjung pada kunjungan atau korespondensi nyata.",
    galleryCount: 3,
  },
  {
    id: "p7",
    slug: "lms-academic",
    title: "LMS Academic",
    industry: "Education",
    kind: "Studio Concept",
    services: ["Design", "Development", "Digital Experience"],
    description:
      "Antarmuka platform belajar untuk lembaga pendidikan — memusatkan tugas, materi, dan progres dalam satu ruang yang jelas dan hemat waktu.",
    short: "Dashboard belajar yang terpusat dan mudah dinavigasi.",
    visual: "dashboard",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "Peralatan kerja modern dengan laptop yang menampilkan tampilan digital",
    featured: false,
    status: "concept",
    heroLabel: "Project studio konsep untuk sektor EdTech / LMS",
    challenge:
      "Pelajar dan pengajar bertemu di banyak alat yang terpisah — tugas, materi, dan komunikasi tersebar, membuat progres sulit dilacak.",
    strategy:
      "Kami merancang satu ruang terpusat: setiap kursus menampilkan progres belajar, tugas berikutnya, dan materi tanpa perlu berpindah konteks.",
    design:
      "Dashboard yang tenang dengan hierarki berbasis tugas. Palet navy yang fokus dan aksen biru terbatas pada elemen aktif, mengurangi beban visual.",
    development:
      "Komponen dashboard yang modular, tabel data yang ringan, dan navigasi berbasis sidebar yang responsif dari desktop ke tablet.",
    outcome:
      "Menghasilkan struktur dashboard yang memudahkan pelajar melihat progres dan memulai tugas, serta pengajar mengelola kelas secara terpusat.",
    galleryCount: 3,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProject(slug: string): Project | null {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index < 0) return null;
  return projects[(index + 1) % projects.length];
}

export const projectCategories = [
  "Semua",
  "Business",
  "Education",
  "Professional Services",
  "Property",
  "Hospitality",
  "Healthcare",
  "Retail",
] as const;

export const projectKinds = ["Semua", "Client Work", "Studio Concept", "Website Concept"] as const;