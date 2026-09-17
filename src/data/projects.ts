export type ProjectFact = { term: string; value: string };

export type ProjectSection = { index: string; title: string; text: string };

export type ProjectGalleryItem = {
  src: string;
  alt: string;
  caption: string;
  device?: "desktop" | "mobile";
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  industry: string;
  kind: string;
  services: string[];
  description: string;
  short: string;
  highlights: string[];
  image: string;
  imageAlt: string;
  featured: boolean;
  heroLabel: string;
  facts: ProjectFact[];
  designSystem: ProjectFact[];
  sections: ProjectSection[];
  gallery: ProjectGalleryItem[];
  liveUrl: string;
};

export const projects: Project[] = [
  {
    id: "ruang-antara-studio",
    slug: "ruang-antara-studio",
    title: "Ruang Antara Studio",
    industry: "Property / Architecture",
    kind: "Website Arsitektur",
    services: ["Strategy", "Design", "Development"],
    description:
      "Website arsitektur butik untuk Ruang Antara Studio, praktik di Bandung Utara yang berpegang pada modernisme tropis yang tenang. Editorial, tenang, dan dibangun sepenuhnya dengan HTML5, CSS3, serta JavaScript murni tanpa proses build.",
    short:
      "Situs editorial untuk praktik arsitektur butik di Bandung Utara, dari hero slideshow hingga studi kasus proyek dan gambar kerja vektor.",
    highlights: [
      "Sistem desain editorial",
      "10 halaman · 3 studi kasus proyek",
      "Gambar kerja arsitektur vektor",
      "Zero-build: HTML, CSS, JS murni",
    ],
    image: "/portfolio/ruang-antara-studio/home.png",
    imageAlt:
      "Beranda situs Ruang Antara Studio dengan hero slideshow karya arsitektur tropis",
    featured: true,
    heroLabel: "Proyek Terpilih: Website Studio Arsitektur",
    facts: [
      { term: "Klien", value: "Ruang Antara Studio" },
      { term: "Sektor", value: "Arsitektur / Properti" },
      { term: "Lokasi", value: "Bandung, Jawa Barat" },
      { term: "Cakupan", value: "Desain & Pengembangan Website" },
    ],
    designSystem: [
      { term: "Tipografi", value: "Newsreader · Plus Jakarta Sans · JetBrains Mono" },
      { term: "Palet", value: "Kertas gading, jelaga arang, aksen tanah liat #A64B2A" },
      { term: "Bentuk", value: "Sudut tegas, tanpa gradien, tanpa drop-shadow" },
      { term: "Teknologi", value: "HTML5 · CSS3 · JavaScript (tanpa build)" },
    ],
    sections: [
      {
        index: "01",
        title: "Latar & Pendekatan",
        text: "Ruang Antara Studio adalah praktik arsitektur butik di Bandung Utara yang berpegang pada modernisme tropis yang tenang, kejujuran material, dan kepekaan iklim mikro. Website ini perlu menyampaikan sikap itu tanpa berteriak: karya menjadi bukti utama, bukan dekorasi. Kami menempatkan fotografi arsitektur dan tipografi editorial sebagai pusat pengalaman, dengan ruang yang lapang dan ritme baca yang tenang.",
      },
      {
        index: "02",
        title: "Bahasa Visual",
        text: "Standar estetika editorial menjadi dasar seluruh halaman: Newsreader untuk judul, Plus Jakarta Sans untuk teks tubuh, dan JetBrains Mono untuk notasi teknis seperti skala gambar dan dimensi tapak. Paletnya tektonik: kertas gading, jelaga arang, dengan satu warna aksen tanah liat bakar. Sudut tegas, tanpa gradien, dan tanpa bayangan mengambang.",
      },
      {
        index: "03",
        title: "Struktur & Isi",
        text: "Sepuluh halaman tersusun rapi: beranda dengan hero slideshow lambat, profil studio beserta esai filosofi dan tim, portofolio dengan filter kategori yang understated, tiga studi kasus proyek, lima lingkup layanan, proses enam tahap, jurnal, serta halaman kontak. Seluruh konten memakai materi nyata studio, tanpa lorem ipsum dan tanpa angka karangan.",
      },
      {
        index: "04",
        title: "Teknik & Material Digital",
        text: "Dibangun tanpa kerangka kerja dan tanpa proses kompilasi: HTML5 semantik, CSS3 murni, dan JavaScript standar. Gambar kerja arsitektur digambar ulang sebagai vektor SVG (potongan, aksonometri, dan denah tapak) sehingga tajam di segala ukuran layar, ringan dimuat, dan mudah dirawat.",
      },
    ],
    gallery: [
      {
        src: "/portfolio/ruang-antara-studio/home.png",
        alt: "Beranda situs Ruang Antara Studio dengan hero slideshow karya arsitektur",
        caption: "Beranda · hero slideshow karya arsitektur",
        device: "desktop",
      },
      {
        src: "/portfolio/ruang-antara-studio/portfolio.png",
        alt: "Halaman portofolio dengan grid masonry dan filter kategori",
        caption: "Portofolio · grid karya dengan filter kategori",
        device: "desktop",
      },
      {
        src: "/portfolio/ruang-antara-studio/studio.png",
        alt: "Halaman studio dengan profil pendiri dan esai filosofi",
        caption: "Studio · profil, esai filosofi, dan tim",
        device: "desktop",
      },
      {
        src: "/portfolio/ruang-antara-studio/case-lembang.png",
        alt: "Studi kasus Rumah Akhir Pekan di Lembang",
        caption: "Studi kasus · Rumah Akhir Pekan, Lembang",
        device: "desktop",
      },
      {
        src: "/portfolio/ruang-antara-studio/case-roastery.png",
        alt: "Studi kasus Sangrai Roastery di Bandung",
        caption: "Studi kasus · Sangrai Roastery, Bandung",
        device: "desktop",
      },
      {
        src: "/portfolio/ruang-antara-studio/case-cihapit.png",
        alt: "Studi kasus Rumah Cihapit dengan courtyard",
        caption: "Studi kasus · Rumah Cihapit, Bandung",
        device: "desktop",
      },
      {
        src: "/portfolio/ruang-antara-studio/layanan.png",
        alt: "Halaman layanan dengan lima lingkup kerja",
        caption: "Layanan · lima lingkup kerja terukur",
        device: "desktop",
      },
      {
        src: "/portfolio/ruang-antara-studio/kontak.png",
        alt: "Halaman kontak dengan peta vektor monokrom",
        caption: "Kontak · formulir dan peta vektor",
        device: "desktop",
      },
      {
        src: "/portfolio/ruang-antara-studio/mobile-home.png",
        alt: "Tampilan beranda situs Ruang Antara Studio pada ponsel",
        caption: "Beranda pada ponsel",
        device: "mobile",
      },
      {
        src: "/portfolio/ruang-antara-studio/mobile-portfolio.png",
        alt: "Tampilan portofolio situs Ruang Antara Studio pada ponsel",
        caption: "Portofolio pada ponsel",
        device: "mobile",
      },
    ],
    liveUrl: "/proyek/ruang-antara-studio/index.html",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProject(slug: string): Project | null {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index < 0 || projects.length < 2) return null;
  return projects[(index + 1) % projects.length];
}
