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
    kind: "Studio Concept",
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
    highlights: [
      "Narasi atmosfer ruang yang hangat",
      "Menu dan galeri yang mudah dibaca",
      "Alur reservasi yang sederhana",
    ],
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
    highlights: [
      "Info layanan, jadwal & harga di permukaan",
      "Transparansi proses pendaftaran",
      "Struktur siap integrasi sistem booking",
    ],
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
    highlights: [
      "Halaman program & keunggulan yang jelas",
      "Alur pendaftaran yang ringkas",
      "Ruang info mudah diperbarui pihak sekolah",
    ],
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
    highlights: [
      "Presentasi karya yang terkurasi",
      "Proses kolaborasi yang mudah dibaca",
      "Fluiditas tampilan desktop ke ponsel",
    ],
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
    highlights: [
      "Galeri produk yang ringan & mudah dipindai",
      "Filter kategori sederhana",
      "Integrasi WhatsApp untuk pertanyaan langsung",
    ],
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
    highlights: [
      "Dashboard progres belajar yang terpusat",
      "Sidebar navigasi yang responsif",
      "Komponen modular yang bisa dikembangkan",
    ],
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
  {
    id: "p13",
    slug: "bumi-aset",
    title: "Bumi Aset",
    industry: "Financial Services",
    kind: "Studio Concept",
    services: ["Design", "Development"],
    description:
      "Website konsultan investasi yang membangun kredibilitas lewat laporan yang terstruktur, pendekatan yang jelas, dan jalur konsultasi yang mudah diakses.",
    short: "Kredibilitas dan kejelasan layanan untuk hubungan jangka panjang.",
    highlights: [
      "Halaman profil & pendekatan investasi",
      "Penyajian laporan yang terstruktur",
      "Form konsultasi awal yang ringkas",
    ],
    visual: "editorial",
    image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "Garis cakrawala kota yang melambangkan lanskap investasi modern",
    featured: false,
    status: "concept",
    heroLabel: "Project studio konsep untuk sektor jasa keuangan",
    challenge:
      "Jasa keuangan dipercaya berdasarkan kejelasan dan rekam jejak. Calon klien perlu memahami pendekatan tanpa merasa dipaksa dan tanpa jargon.",
    strategy:
      "Kami menyusun narasi yang menempatkan prinsip dan pendekatan di depan, diikuti bukti berupa laporan serta proses yang transparan.",
    design:
      "Rasa editorial yang tenang dan meyakinkan, dengan palet navy yang stabil serta tipografi yang formal namun tetap hangat.",
    development:
      "Struktur yang mudah dipindai, laporan ditampilkan dalam komponen yang ringan, dan form konsultasi dengan langkah yang jelas.",
    outcome:
      "Membangun kesan tepercaya dan profesional, serta memperpendek jarak antara membaca informasi dan memulai percakapan.",
    galleryCount: 3,
  },
  {
    id: "p8",
    slug: "kopi-kebun",
    title: "Kopi Kebun",
    industry: "Food & Beverage",
    kind: "Studio Concept",
    services: ["Design", "Development", "Digital Experience"],
    description:
      "Website kafe dan kedai kopi yang menonjolkan cerita biji, suasana ruang, serta memudahkan pengunjung melihat menu dan memesan meja.",
    short: "Cerita dan suasana kedai yang ingin dikunjungi, pemesanan yang sederhana.",
    highlights: [
      "Narasi brand & cerita biji kopi",
      "Menu digital yang nyaman di ponsel",
      "Form reservasi meja yang singkat",
    ],
    visual: "editorial",
    image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "Suasana kedai kopi dengan interior hangat dan meja kayu",
    featured: false,
    status: "concept",
    heroLabel: "Project studio konsep untuk sektor food & beverage",
    challenge:
      "Kedai kopi bersaing pada atmosfer dan cerita — bukan hanya rasa. Pengunjung perlu merasakan suasana sebelum memutuskan datang.",
    strategy:
      "Kami menyusun narasi seputar asal biji, ruang, dan pengalaman, lalu mempersingkat jarak menuju reservasi meja atau kunjungan.",
    design:
      "Komposisi editorial yang hangat dengan penekanan pada fotografi makanan dan suasana ruang, ditata dalam grid yang tenang dan mudah dipindai.",
    development:
      "Halaman menu yang ringan dan responsif, galeri suasana yang cepat, serta form reservasi yang bekerja mulus dari ponsel.",
    outcome:
      "Menghasilkan kehadiran digital yang menyampaikan suasana dan memandu pengunjung menuju tindakan nyata dengan cara yang alami.",
    galleryCount: 3,
  },
  {
    id: "p9",
    slug: "raga-sehat",
    title: "Raga Sehat",
    industry: "Fitness & Wellness",
    kind: "Studio Concept",
    services: ["Design", "Development"],
    description:
      "Website studio kebugaran yang menonjolkan suasana latihan, jadwal kelas, dan kemudahan mendaftar sesi percobaan pertama.",
    short: "Suasana latihan yang kuat, jadwal kelas yang jelas, pendaftaran yang cepat.",
    highlights: [
      "Jadwal kelas yang mudah dibaca",
      "Form sesi percobaan pertama",
      "Tampilan mobile untuk cek jadwal",
    ],
    visual: "booking",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "Sesi latihan di studio kebugaran dengan peralatan modern",
    featured: false,
    status: "concept",
    heroLabel: "Project studio konsep untuk sektor fitness & wellness",
    challenge:
      "Studi kebugaran perlu membangkitkan motivasi sekaligus memberikan informasi praktis: jadwal, biaya, dan cara memulai tanpa intimidasi.",
    strategy:
      "Kami menempatkan suasana latihan sebagai pembuka, diikuti jadwal kelas yang transparan, lalu jalur pendaftaran percobaan yang pendek.",
    design:
      "Komposisi tegas dan energik dengan tipografi yang kuat. Palet navy yang serius dipadu aksen biru yang menggerakkan aksi.",
    development:
      "Struktur jadwal yang mudah dipindai, filter kelas sederhana, dan form pendaftaran multi-langkah yang nyaman di ponsel.",
    outcome:
      "Menghasilkan halaman yang meyakinkan calon anggota dan memandu mereka memulai sesi pertama tanpa hambatan.",
    galleryCount: 3,
  },
  {
    id: "p10",
    slug: "loka-arus",
    title: "Loka Arus",
    industry: "Logistics",
    kind: "Studio Concept",
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
    heroLabel: "Project studio konsep untuk sektor logistik",
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
    kind: "Studio Concept",
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
    heroLabel: "Project studio konsep untuk sektor komunitas & non-profit",
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
  {
    id: "p12",
    slug: "griya-mode",
    title: "Griya Mode",
    industry: "Fashion & Lifestyle",
    kind: "Studio Concept",
    services: ["Design", "Development"],
    description:
      "Website butik mode yang menghadirkan koleksi dalam kurasi editorial dan memudahkan pengunjung bertanya hingga pemesanan langsung.",
    short: "Kurasi koleksi yang menggugah, percakapan penjualan yang langsung.",
    highlights: [
      "Kurasi visual gaya editorial",
      "Halaman produk yang mendetail",
      "Kontak & pemesanan via WhatsApp",
    ],
    visual: "commerce",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "Rak pakaian butik yang ditata rapi dan menggugah selera koleksi",
    featured: false,
    status: "concept",
    heroLabel: "Project studio konsep untuk sektor fashion & lifestyle",
    challenge:
      "Butik mode menjual keinginan, bukan hanya produk. Koleksi perlu tampil menggugah dan dipahami tanpa proses checkout yang berat.",
    strategy:
      "Kami menempatkan koleksi dalam komposisi editorial yang kuat, lalu membuka percakapan langsung dan pemesanan yang mudah.",
    design:
      "Palet bersih yang senada dengan merek, tipografi tegas, dan fotografi koleksi yang diatur seperti editorial majalah mode.",
    development:
      "Galeri produk yang ringan, filter kategori sederhana, dan integrasi WhatsApp sebagai jalur pemesanan langsung.",
    outcome:
      "Menghasilkan ruang digital yang menggugah minat dan menghubungkan pengunjung langsung pada percakapan nyata dengan penjual.",
    galleryCount: 3,
  },
  {
    id: "p14",
    slug: "senja-travel",
    title: "Senja Travel",
    industry: "Travel & Leisure",
    kind: "Studio Concept",
    services: ["Design", "Development", "Digital Experience"],
    description:
      "Website agen travel yang membangun rasa ingin tahu lewat kurasi destinasi, dan memandu pengunjung mengajukan paket perjalanan secara sederhana.",
    short: "Kurasi destinasi yang ingin dijelajahi, pengajuan paket yang lancar.",
    highlights: [
      "Kurasi destinasi dengan rasa editorial",
      "Pengajuan paket multi-langkah yang ringkas",
      "Pengalaman mobile-first untuk perjalanan",
    ],
    visual: "gallery",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "Pantai dengan pasir bersih yang membangkitkan keinginan untuk traveling",
    featured: false,
    status: "concept",
    heroLabel: "Project studio konsep untuk sektor travel & leisure",
    challenge:
      "Perjalanan adalah keputusan emosional. Agen travel perlu membangkitkan rasa ingin tahu sekaligus meyakinkan tentang kemudahan proses pengajuan.",
    strategy:
      "Kami memulai dari kurasi destinasi yang menggugah, lalu memandu menuju form pengajuan paket yang dibagi dalam beberapa langkah kecil.",
    design:
      "Komposisi galeri yang luas dengan sorotan pada fotografi. Ruang putih yang lega membuat setiap destinasi terasa besar dan mengundang.",
    development:
      "Galeri yang ringan dan cepat, filter durasi perjalanan sederhana, serta form bertahap yang nyaman digunakan dari ponsel.",
    outcome:
      "Menghasilkan pengalaman yang membangkitkan keinginan berangkat dan memudahkan pengunjung mengajukan penawaran dalam hitungan menit.",
    galleryCount: 3,
  },
  {
    id: "p15",
    slug: "aruna-wedding",
    title: "Aruna Wedding",
    industry: "Events & Wedding",
    kind: "Studio Concept",
    services: ["Design", "Development"],
    description:
      "Website penyelenggara pernikahan yang menyampaikan suasana, paket, dan cerita pasangan — membangun kepercayaan sejak kunjungan pertama.",
    short: "Suasana dan paket yang meyakinkan, cerita pasangan yang personal.",
    highlights: [
      "Narasi editorial yang emosional",
      "Halaman paket yang mudah dibandingkan",
      "Form pertanyaan & reservasi yang ringkas",
    ],
    visual: "editorial",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "Dekorasi pernikahan yang hangat dan elegan dalam nuansa alami",
    featured: false,
    status: "concept",
    heroLabel: "Project studio konsep untuk sektor events & wedding",
    challenge:
      "Calon pasangan membutuhkan lebih dari daftar paket — mereka mencari perasaan yakin bahwa hari mereka akan terasa sempurna.",
    strategy:
      "Kami menyusun narasi yang menampilkan suasana dan cerita, lalu menyajikan paket dalam perbandingan yang jujur dan mudah dipahami.",
    design:
      "Komposisi editorial yang hangat dan romantis, dengan penekanan pada fotografi suasana. Tipografi elegan yang tetap mudah dibaca.",
    development:
      "Halaman paket terstruktur, galeri suasana yang cepat, serta form pertanyaan dan reservasi yang bekerja mulus di ponsel.",
    outcome:
      "Menghasilkan website yang membangun kepercayaan dan memandu pasangan dari inspirasi menuju percakapan nyata.",
    galleryCount: 3,
  },
  {
    id: "p16",
    slug: "sinar-perkasa",
    title: "Sinar Perkasa",
    industry: "Automotive",
    kind: "Studio Concept",
    services: ["Design", "Development", "Digital Experience"],
    description:
      "Website diler kendaraan yang menonjolkan model unggulan, layanan purna jual, dan memudahkan pengunjung mengajukan test drive.",
    short: "Model yang menggugah, informasi yang jelas, test drive yang mudah.",
    highlights: [
      "Presentasi model yang editorial",
      "Info layanan & purna jual yang jelas",
      "Form test drive multi-langkah",
    ],
    visual: "hero",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "Kendaraan modern dalam pencahayaan studio yang dramatis",
    featured: false,
    status: "concept",
    heroLabel: "Project studio konsep untuk sektor automotive",
    challenge:
      "Pembelian kendaraan melibatkan banyak pertimbangan—model, harga, dan layanan. Pengunjung perlu merasa yakin sebelum datang ke diler.",
    strategy:
      "Kami menempatkan model sebagai sorotan, menyajikan informasi secara jujur, lalu mempersingkat jalur menuju test drive.",
    design:
      "Komposisi yang tegas dan presisi yang menonjolkan bentuk kendaraan, dengan grid yang rapi dan tipografi yang kuat namun elegan.",
    development:
      "Galeri model yang cepat, halaman perbandingan spesifikasi yang terstruktur, serta form test drive yang nyaman digunakan.",
    outcome:
      "Menghasilkan pengalaman yang membangkitkan minat dan memandu calon pembeli menuju tindakan nyata di diler.",
    galleryCount: 3,
  },
  {
    id: "p17",
    slug: "ruang-tenang",
    title: "Ruang Tenang",
    industry: "Beauty & Spa",
    kind: "Studio Concept",
    services: ["Design", "Development", "Digital Experience"],
    description:
      "Website spa dan perawatan yang menyampaikan ketenangan, menyajikan daftar perawatan, dan memudahkan pemesanan jadwal.",
    short: "Ketenangan yang terasa sebelum berkunjung, pemesanan yang mudah.",
    highlights: [
      "Suasana tenang yang konsisten",
      "Daftar perawatan & harga yang jelas",
      "Pemesanan jadwal tanpa hambatan",
    ],
    visual: "booking",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "Suasana spa dengan batu hangat dan handuk yang tenang dan bersih",
    featured: false,
    status: "concept",
    heroLabel: "Project studio konsep untuk sektor beauty & spa",
    challenge:
      "Ketenangan adalah produk utama spa. Website harus menenangkan pengunjung sekaligus menyampaikan informasi praktis perawatan.",
    strategy:
      "Kami mengutamakan suasana pada pembuka, menyajikan perawatan secara jujur, lalu mempersingkat langkah menuju pemesanan jadwal.",
    design:
      "Komposisi yang lapang dengan banyak ruang putih, palet lembut, dan fotografi yang tenang. Hierarki yang memprioritaskan ketenangan.",
    development:
      "Daftar perawatan yang mudah dipindai, struktur jadwal sederhana, dan alur pemesanan yang bekerja tanpa gesekan di ponsel.",
    outcome:
      "Menghasilkan pengalaman digital yang menenangkan dan memandu pengunjung melakukan pemesanan dengan mudah.",
    galleryCount: 3,
  },
  {
    id: "p18",
    slug: "studio-lensa",
    title: "Studio Lensa",
    industry: "Creative & Photography",
    kind: "Studio Concept",
    services: ["Design", "Development", "Digital Experience"],
    description:
      "Website fotografer profesional yang menghadirkan portofolio dalam kurasi visual yang kuat dan memudahkan calon klien memulai percakapan.",
    short: "Portofolio yang berbicara, fitur kolaborasi yang jelas.",
    highlights: [
      "Galeri portofolio yang sinematik",
      "Halaman layanan & paket sesi",
      "Alur kontak langsung untuk kolaborasi",
    ],
    visual: "gallery",
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "Lensa kamera profesional dengan detail yang presisi dan sinematik",
    featured: false,
    status: "concept",
    heroLabel: "Project studio konsep untuk sektor kreatif & fotografi",
    challenge:
      "Fotografer dipilih berdasarkan karya. Website harus menampilkan portofolio dengan cepat, indah, dan tanpa mengganggu kenyamanan menjelajah.",
    strategy:
      "Kami menempatkan galeri sebagai pusat, menyajikan layanan dan paket secara ringkas, lalu membuka jalur percakapan yang personal.",
    design:
      "Tampilan galeri yang luas dan gelap pendukung, dengan fokus pada foto. Tipografi yang bersih dan tidak bersaing dengan karya.",
    development:
      "Galeri ringan dengan pemuatan progresif, halaman layanan yang jelas, dan form kontak yang langsung menuju email.",
    outcome:
      "Menghasilkan portofolio yang meyakinkan tanpa halangan, memperpendek jarak antara kekaguman dan kolaborasi.",
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
  "Financial Services",
  "Property",
  "Hospitality",
  "Healthcare",
  "Retail",
  "Food & Beverage",
  "Fitness & Wellness",
  "Logistics",
  "Community & Non-Profit",
  "Fashion & Lifestyle",
  "Travel & Leisure",
  "Events & Wedding",
  "Automotive",
  "Beauty & Spa",
  "Creative & Photography",
] as const;

export const projectKinds = ["Semua", "Client Work", "Studio Concept", "Website Concept"] as const;