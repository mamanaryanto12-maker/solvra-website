export type Service = {
  id: string;
  index: string;
  name: string;
  summary: string;
  overview: string;
  problems: string[];
  includes: string[];
  deliverables: string[];
  outcome: string;
  process: string[];
};

export const services: Service[] = [
  {
    id: "design",
    index: "01",
    name: "Design",
    summary: "UI/UX premium yang estetik, responsive, intuitif, dan selaras dengan identitas brand.",
    overview:
      "Kami menerjemahkan strategi bisnis menjadi antarmuka digital yang jelas, elegan, dan mudah digunakan. Setiap keputusan visual — dari tipografi, warna, hingga komposisi — dibuat dengan tujuan: memperkuat kesan brand dan memandu pengunjung menuju tindakan.",
    problems: [
      "Website yang tampak tidak profesional dan kurang dipercaya.",
      "Tampilan tidak konsisten dengan identitas brand.",
      "Navigasi membingungkan sehingga pengunjung cepat pergi.",
    ],
    includes: [
      "UX strategy",
      "Information architecture",
      "Wireframes",
      "UI design",
      "Responsive design",
      "Design system ringan",
      "Prototype interaktif",
    ],
    deliverables: [
      "Struktur halaman yang jelas",
      "Komponen desain reusable",
      "Prototipe yang dapat diuji",
      "Panduan visual untuk development",
    ],
    outcome:
      "Website yang tampak profesional, konsisten dengan brand, dan memudahkan pengunjung memahami serta menggunakan layanan Anda.",
    process: [
      "Audit kebutuhan dan eksplorasi visual",
      "Wireframe dan struktur informasi",
      "Komposisi visual dan desain sistem",
      "Prototipe dan iterasi bersama klien",
    ],
  },
  {
    id: "development",
    index: "02",
    name: "Development",
    summary: "Website cepat, aman, scalable, dibangun dengan teknologi modern dan fondasi teknis yang solid.",
    overview:
      "Desain yang indah harus berjalan dengan baik. Kami membangun website menggunakan teknologi web modern yang menghasilkan loading cepat, konsisten di berbagai perangkat, serta mudah dikelola dan dikembangkan di kemudian hari.",
    problems: [
      "Website lambat dan berat saat dibuka.",
      "Tampilan rusak di perangkat seluler.",
      "Sulit diperbarui atau dirawat sendiri.",
    ],
    includes: [
      "Front-end development",
      "Implementasi responsive",
      "Integrasi CMS bila diperlukan",
      "Optimasi performa",
      "Fondasi SEO teknis",
      "Deployment dan peluncuran",
    ],
    deliverables: [
      "Kode yang terstruktur dan rapi",
      "Website berperforma cepat",
      "Konsisten di desktop, tablet, dan mobile",
      "Dokumentasi teknis ringkas",
    ],
    outcome:
      "Website yang cepat, stabil, aman, dan mudah diperbarui — fondasi digital yang siap tumbuh bersama bisnis Anda.",
    process: [
      "Setup lingkungan dan arsitektur teknis",
      "Implementasi desain secara responsive",
      "Optimasi performa dan SEO teknis",
      "Testing, deployment, dan peluncuran",
    ],
  },
  {
    id: "digital-experience",
    index: "03",
    name: "Digital Experience",
    summary: "Perjalanan pengguna strategis dan optimasi konversi yang dibangun di sekitar tujuan bisnis.",
    overview:
      "Website yang baik harus memandu pengunjung secara alami menuju tindakan yang Anda inginkan. Kami merancang alur halaman, interaksi, dan integrasi agar seluruh pengalaman digital mendukung tujuan bisnis Anda.",
    problems: [
      "Pengunjung datang tetapi tidak tahu harus melakukan apa.",
      "Formulir dan jalur kontak kurang mendukung konversi.",
      "Sistem atau layanan pihak ketiga belum terintegrasi.",
    ],
    includes: [
      "Perencanaan user journey dan conversion path",
      "Struktur yang berorientasi konversi",
      "Interaction design",
      "Alur formulir dan inquiry",
      "Integrasi pihak ketiga",
      "Struktur siap analytics",
    ],
    deliverables: [
      "Peta alur pengguna yang jelas",
      "Jalur konversi yang lebih langsung",
      "Interaksi yang konsisten dan responsif",
      "Struktur pengukuran yang siap dipantau",
    ],
    outcome:
      "Website tidak hanya terlihat baik, tetapi benar-benar bekerja — memandu pengunjung menuju pertanyaan, pembelian, atau tindakan bisnis lainnya.",
    process: [
      "Pemetaan tujuan dan pengguna",
      "Perancangan alur dan struktur konversi",
      "Desain interaksi dan komponen",
      "Integrasi dan penyiapan pengukuran",
    ],
  },
];

export const processStages = [
  {
    id: "discover",
    index: "01",
    title: "Discover",
    description:
      "Kami memahami bisnis, audiens, tujuan, dan tantangan Anda sebelum apa pun mulai didesain.",
  },
  {
    id: "strategize",
    index: "02",
    title: "Strategize",
    description:
      "Kami menentukan struktur, positioning, hierarki konten, dan perjalanan pengguna yang tepat.",
  },
  {
    id: "design",
    index: "03",
    title: "Design",
    description:
      "Kami menerjemahkan strategi menjadi antarmuka digital yang terasa premium dan jelas.",
  },
  {
    id: "develop",
    index: "04",
    title: "Develop",
    description:
      "Kami membangun website yang cepat, responsive, aman, dan siap dikelola.",
  },
  {
    id: "launch",
    index: "05",
    title: "Launch & Support",
    description:
      "Kami menguji, meluncurkan, mengoptimalkan, dan memastikan website tetap berjalan baik.",
  },
];