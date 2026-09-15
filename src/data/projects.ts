export type ProjectVisual =
  | "hero"
  | "editorial"
  | "gallery"
  | "mobile"
  | "dashboard"
  | "commerce"
  | "hospitality"
  | "booking";

export type ProjectStatus = "concept";

export type ProjectType = "Website Concept";

export type Project = {
  id: string;
  slug: string;
  title: string;
  industry: string;
  kind: ProjectType;
  services: string[];
  description: string;
  short: string;
  highlights: string[];
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
    kind: "Website Concept",
    services: ["Design", "Development"],
    description:
      "Website properti yang dirancang untuk membangun kepercayaan dan memandu calon pembeli menuju jadwal kunjungan lokasi.",
    short: "Membangun kepercayaan properti melalui presentasi unit dan alur inquiry yang jelas.",
    visual: "editorial",
    highlights: [
      "Komposisi editorial untuk presentasi unit",
      "Alur inquiry menuju kunjungan lokasi",
      "Struktur properti yang mudah dibandingkan",
    ],
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "Fasad rumah modern dengan arsitektur yang bersih dan lapang",
    featured: true,
    status: "concept",
    heroLabel: "Website concept untuk sektor property",
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
    kind: "Website Concept",
    services: ["Design", "Development", "Digital Experience"],
    description:
      "Website kafe dan ruang komunitas yang menonjolkan atmosfer hangat serta memudahkan pengunjung melakukan reservasi.",
    short: "Menghadirkan atmosfer hangat dan alur reservasi yang sederhana.",
    visual: "hospitality",
    highlights: [
      "Narasi atmosfer ruang yang hangat",
      "Menu dan galeri yang mudah dibaca",
      "Alur reservasi yang sederhana",
    ],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "Suasana hangat interior kafe dan ruang komunitas",
    featured: true,
    status: "concept",
    heroLabel: "Website concept untuk sektor hospitality",
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
    id: "p5",
    slug: "arsa-studio",
    title: "Arsa Studio",
    industry: "Professional Services",
    kind: "Website Concept",
    services: ["Design", "Development", "Digital Experience"],
    description:
      "Website studio arsitektur yang menyampaikan pendekatan desain, karya terpilih, dan proses kolaborasi kepada calon klien.",
    short: "Presentasi karya dan pendekatan desain yang kredibel.",
    visual: "gallery",
    highlights: [
      "Presentasi karya yang terkurasi",
      "Proses kolaborasi yang mudah dibaca",
      "Fluiditas tampilan desktop ke ponsel",
    ],
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "Ruang kerja studio arsitektur yang terkurasi dengan presisi",
    featured: false,
    status: "concept",
    heroLabel: "Website concept untuk sektor professional services",
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
    id: "p10",
    slug: "loka-arus",
    title: "Loka Arus",
    industry: "Logistics",
    kind: "Website Concept",
    services: ["Design", "Development", "Digital Experience"],
    description:
      "Portal pelanggan untuk perusahaan logistik — melacak pengiriman, mengakses dokumen, dan meninjau riwayat dari satu dashboard yang jelas.",
    short: "Pelacakan dan dokumen yang terpusat untuk pelanggan logistik.",
    highlights: [
      "Dashboard pelacakan yang terpusat",
      "Akses dokumen & riwayat pengiriman",
      "Tabel data yang ringan dan responsif",
    ],
    visual: "dashboard",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "Gudang logistik modern dengan sistem pelacakan terpusat",
    featured: false,
    status: "concept",
    heroLabel: "Website concept untuk sektor logistik",
    challenge:
      "Pelanggan logistik hidup di antara banyak email, telepon, dan dokumen untuk satu pertanyaan sederhana: di mana kiriman saya?",
    strategy:
      "Kami merancang satu portal: pelacakan, dokumen, dan riwayat berada di satu dashboard yang mengurangi kebutuhan bertanya berulang.",
    design:
      "Dashboard yang bersih dengan hierarki berbasis status. Aksen biru terbatas pada elemen aktif sehingga data tetap mudah dipindai.",
    development:
      "Tabel data yang ringan, filter status sederhana, dan navigasi sidebar yang responsif dari desktop hingga tablet.",
    outcome:
      "Menghasilkan portal yang mempersingkat pencarian informasi dan memperbaiki pengalaman dukungan pelanggan secara keseluruhan.",
    galleryCount: 3,
  },
  {
    id: "p11",
    slug: "aksara-hub",
    title: "Aksara Hub",
    industry: "Community & Non-Profit",
    kind: "Website Concept",
    services: ["Design", "Development", "Digital Experience"],
    description:
      "Platform komunitas literasi yang menghubungkan kegiatan, relawan, dan donasi dalam satu pengalaman yang hangat dan mudah diakses.",
    short: "Menghubungkan kegiatan, relawan, dan dukungan komunitas.",
    highlights: [
      "Pendekatan yang hangat & inklusif",
      "Alur donasi dan relawan yang jelas",
      "Pengalaman mobile-first untuk akses luas",
    ],
    visual: "mobile",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "Ponsel yang menampilkan tampilan antarmuka aplikasi komunitas",
    featured: false,
    status: "concept",
    heroLabel: "Website concept untuk sektor komunitas & non-profit",
    challenge:
      "Organisasi nirlaba melayani banyak kelompok — pemustaka, relawan, dan donatur. Setiap kelompok membutuhkan jalurnya sendiri yang jelas.",
    strategy:
      "Kami merancang pengalaman yang membedakan tiga jalur utama — ikut kegiatan, menjadi relawan, dan memberi dukungan — tanpa terasa membingungkan.",
    design:
      "Komposisi yang hangat dan ramah dengan ruang luas, memastikan informasi penting dapat diakses oleh siapa pun, termasuk di ponsel.",
    development:
      "Struktur navigasi sederhana, form pendaftaran yang ringkas, dan pembuatan halaman kegiatan yang mudah dikelola tim komunitas.",
    outcome:
      "Menghasilkan platform yang memudahkan komunitas berpartisipasi dan organisasi mengelola kegiatan tanpa keahlian teknis.",
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
  "Property",
  "Hospitality",
  "Professional Services",
  "Logistics",
  "Community & Non-Profit",
] as const;

export const projectKinds = ["Semua", "Website Concept"] as const;