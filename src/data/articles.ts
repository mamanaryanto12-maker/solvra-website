export type ArticleCategory =
  | "Web Design"
  | "Website Strategy"
  | "Business"
  | "Digital Experience"
  | "Technology";

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type Article = {
  id: string;
  slug: string;
  title: string;
  category: ArticleCategory;
  excerpt: string;
  content: ArticleBlock[];
  publishedAt: string;
  readingTime: string;
  author: string;
  featured: boolean;
};

export const articles: Article[] = [
  {
    id: "a1",
    slug: "website-bukan-hanya-brosur-digital",
    title: "Pengunjung Memutuskan Percaya atau Pergi dalam Hitungan Detik",
    category: "Website Strategy",
    excerpt:
      "Banyak bisnis memperlakukan website sebagai katalog statis. Padahal website yang strategis bekerja jauh lebih dari itu.",
    content: [
      {
        type: "p",
        text: "Website masih sering diperlakukan sebagai brosur digital: tempat menaruh informasi, lalu dibiarkan begitu saja. Padahal, di sebagian besar industri, website adalah tempat pertama calon pelanggan menilai bisnis Anda.",
      },
      {
        type: "p",
        text: "Ketika seseorang mengunjungi website Anda, dalam hitungan detik mereka mengambil keputusan: apakah bisnis ini kredibel, apakah mereka memahami apa yang ditawarkan, dan apakah mereka ingin melanjutkan percakapan.",
      },
      { type: "h2", text: "Dari sekadar tampil menjadi bekerja" },
      {
        type: "p",
        text: "Website yang strategis dikembangkan dari pemahaman tentang apa yang ingin dicapai pengunjung dan apa yang ingin dicapai bisnis Anda. Itu berarti setiap bagian halaman memiliki peran:",
      },
      {
        type: "ul",
        items: [
          "Halaman depan menyampaikan nilai utama secara langsung dan meyakinkan.",
          "Halaman layanan menjelaskan masalah yang Anda selesaikan, bukan sekadar daftar fitur.",
          "Formulir dan jalur kontak dirancang untuk memudahkan pengunjung melanjutkan percakapan.",
        ],
      },
      { type: "h2", text: "Mulailah dari tujuan" },
      {
        type: "p",
        text: "Sebelum memikirkan warna atau animasi, mulailah dari pertanyaan dasar: apa tindakan paling penting yang diharapkan dari pengunjung? Jawaban atas pertanyaan ini akan memandu hampir semua keputusan desain selanjutnya.",
      },
      {
        type: "p",
        text: "Website yang baik bukan yang paling ramai, melainkan yang paling jelas. Kejelasan adalah bentuk kepercayaan yang paling sederhana.",
      },
    ],
    publishedAt: "10 September 2026",
    readingTime: "4 menit",
    author: "Solvra Studio",
    featured: true,
  },
  {
    id: "a2",
    slug: "desain-yang-membangun-kepercayaan",
    title: "Desain yang Membangun Kepercayaan Lebih Dulu daripada Kata-Kata",
    category: "Web Design",
    excerpt:
      "Desain bukan tentang dekorasi. Desain yang baik menciptakan kesan kredibilitas dan kemudahan sebelum satu kata pun dibaca.",
    content: [
      {
        type: "p",
        text: "Keputusan visual pengunjung terhadap website Anda terjadi sangat cepat. Sebelum membaca satu kalimat pun, mereka telah menilai tingkat kepercayaan berdasarkan tampilan, kerapian, dan konsistensi.",
      },
      { type: "h2", text: "Konsistensi adalah bahasa yang tenang" },
      {
        type: "p",
        text: "Ketika tipografi, warna, dan komposisi bekerja konsisten dari satu halaman ke halaman lain, pengunjung merasakan keteraturan tanpa perlu menyadarinya. Keteraturan ini yang membangun rasa bahwa bisnis Anda terkelola dengan baik.",
      },
      { type: "h2", text: "Kejelasan mengalahkan kreativitas berlebihan" },
      {
        type: "p",
        text: "Desain terbaik sering kali yang paling tidak terlihat. Elemen visual hadir untuk memperjelas hierarki, bukan untuk menarik perhatian pada dirinya sendiri. Gunakan kontras dan ruang untuk memandu mata, bukan dekorasi yang mengalihkan.",
      },
      {
        type: "p",
        text: "Pada akhirnya, desain yang membangun kepercayaan adalah desain yang membuat pengunjung merasa aman: tahu di mana mereka berada, apa yang bisa dilakukan, dan mengapa harus melakukannya.",
      },
    ],
    publishedAt: "2 September 2026",
    readingTime: "3 menit",
    author: "Solvra Studio",
    featured: true,
  },
  {
    id: "a3",
    slug: "mengapa-kecepatan-website-penting",
    title: "Satu Detik Tambahan, Satu Pengunjung Pergi: Soal Kecepatan dan Kepercayaan",
    category: "Technology",
    excerpt:
      "Kecepatan bukan sekadar masalah teknis. Website yang lambat langsung memengaruhi kepercayaan, keterlibatan, dan keputusan pengunjung.",
    content: [
      {
        type: "p",
        text: "Kesabaran pengunjung internet sangat terbatas. Setiap detik tambahan yang dibutuhkan sebuah halaman untuk tampil dapat berarti pengunjung yang berpindah ke kompetitor.",
      },
      { type: "h2", text: "Kecepatan adalah masalah kepercayaan" },
      {
        type: "p",
        text: "Website yang lambat terasa tidak terurus. Pengalaman ini secara tidak sadar memengaruhi cara pengunjung menilai bisnis Anda, termasuk ketanggapan layanan yang mungkin Anda berikan.",
      },
      { type: "h2", text: "Keputusan teknis yang berpengaruh besar" },
      {
        type: "ul",
        items: [
          "Pilih hosting yang sesuai dengan kebutuhan trafik, bukan sekadar yang termurah.",
          "Optimalkan gambar sebelum menampilkannya di halaman.",
          "Hindari skrip dan plugin yang sebenarnya tidak dibutuhkan.",
          "Gunakan pemuatan bertahap agar konten utama tampil lebih dulu.",
        ],
      },
      {
        type: "p",
        text: "Kecepatan bukan target akhir. Kecepatan adalah syarat dasar untuk percakapan. Pengunjung hanya akan mendengarkan Anda jika halamannya berhenti membebani mereka.",
      },
    ],
    publishedAt: "22 Agustus 2026",
    readingTime: "4 menit",
    author: "Solvra Studio",
    featured: false,
  },
  {
    id: "a4",
    slug: "menata-ulang-halaman-beranda",
    title: "Beranda yang Terlalu Penuh: Membereskan dari Tujuan, Bukan dari Konten",
    category: "Digital Experience",
    excerpt:
      "Halaman beranda sering diisi terlalu banyak hal. Berikut prinsip untuk mulai merapikannya dari tujuan utama bisnis Anda.",
    content: [
      {
        type: "p",
        text: "Halaman beranda biasanya menanggung beban terlalu banyak: logo, layanan, keunggulan, tim, klien, dan berbagai hal lain yang kebetulan terasa penting. Akibatnya, tidak ada satu pesan pun yang sampai dengan jelas.",
      },
      { type: "h2", text: "Satu halaman, satu peran utama" },
      {
        type: "p",
        text: "Coba tentukan satu hal yang paling ingin dilakukan pengunjung saat berada di beranda. Semua elemen lain harus membantu, bukan bersaing, dengan tujuan tersebut.",
      },
      { type: "h2", text: "Uji dengan pertanyaan sederhana" },
      {
        type: "ul",
        items: [
          "Dapatkah pengunjung memahami apa yang Anda tawarkan dalam lima detik?",
          "Apakah rata-rata pengunjung tahu langkah selanjutnya yang bisa diambil?",
          "Apakah ada informasi penting yang justru menyulitkan pengambilan keputusan?",
        ],
      },
      {
        type: "p",
        text: "Membereskan beranda sering kali berarti memindahkan beberapa konten ke halaman yang lebih tepat, bukan menambahkan hal baru. Kejelasan lebih berharga daripada kelengkapan.",
      },
    ],
    publishedAt: "14 Agustus 2026",
    readingTime: "3 menit",
    author: "Solvra Studio",
    featured: false,
  },
  {
    id: "a5",
    slug: "sebelum-membangun-website-baru",
    title: "Lima Hal yang Sering Terlewat di Sisi Bisnis Sebelum Website Dibangun",
    category: "Business",
    excerpt:
      "Proyek website berjalan lebih lancar ketika persiapan di sisi bisnis tidak diabaikan. Berikut lima hal yang sering terlewat.",
    content: [
      {
        type: "p",
        text: "Banyak proyek website berjalan lambat bukan karena masalah teknis, tetapi karena keputusan bisnis yang belum siap. Sebelum memulai, sempatkan untuk menyiapkan hal-hal berikut.",
      },
      { type: "h2", text: "1. Tujuan yang bisa diukur" },
      {
        type: "p",
        text: "Website yang baik membutuhkan tujuan yang jelas: meningkatkan inquiry, memperkuat kredibilitas, atau membantu informasi diakses. Tujuan menentukan struktur dan prioritas desain.",
      },
      { type: "h2", text: "2. Konten yang jujur" },
      {
        type: "p",
        text: "Foto, deskripsi layanan, dan informasi kontak yang aktual membuat proses desain lebih akurat. Konten jujur juga menghindari kesan berlebihan yang justru mengurangi kepercayaan.",
      },
      { type: "h2", text: "3. Titik keputusan" },
      {
        type: "ul",
        items: [
          "Siapa yang menyetujui keputusan desain akhir?",
          "Bagaimana proses revisi akan berjalan?",
          "Siapa yang akan mengelola website setelah peluncuran?",
        ],
      },
      {
        type: "p",
        text: "Website adalah proyek bersama. Ketika sisi bisnis siap, sisi teknis dapat bergerak dengan jauh lebih tenang, dan hasilnya lebih sesuai dengan yang dibutuhkan.",
      },
    ],
    publishedAt: "5 Agustus 2026",
    readingTime: "5 menit",
    author: "Solvra Studio",
    featured: false,
  },
];

export const articleCategories: ArticleCategory[] = [
  "Web Design",
  "Website Strategy",
  "Business",
  "Digital Experience",
  "Technology",
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getRelatedArticles(slug: string, count = 2): Article[] {
  const current = getArticle(slug);
  if (!current) return [];
  return articles.filter((a) => a.slug !== slug && a.category === current.category).slice(0, count);
}