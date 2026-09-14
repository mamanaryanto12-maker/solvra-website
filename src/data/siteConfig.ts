export type NavItem = {
  label: string;
  href: string;
};

export const siteConfig = {
  name: "SOLVRA",
  descriptor: "Digital Website Studio",
  tagline: "Kurangi hambatan. Percepat pertumbuhan. Kerjakan dengan lebih cerdas.",
  heroHeadline: "Strategic websites designed for modern businesses.",
  philosophy: "Technology should solve problems, not create them.",
  siteUrl: "https://solvra.studio",
  description:
    "SOLVRA adalah Digital Website Studio yang membangun website strategis, premium, dan berorientasi pada hasil untuk bisnis modern.",
  defaultOgImage: "/og-placeholder.svg",
  contact: {
    email: "hello@solvra.studio",
    emailPlaceholder: true,
    whatsapp: "+62 800 0000 0000",
    whatsappPlaceholder: true,
    location: "Indonesia",
  },
  nav: {
    primary: [
      { label: "Beranda", href: "/" },
      { label: "Tentang", href: "/about" },
      { label: "Layanan", href: "/services" },
      { label: "Paket", href: "/packages" },
      { label: "Proyek", href: "/work" },
      { label: "Insights", href: "/insights" },
      { label: "Kontak", href: "/contact" },
    ] satisfies NavItem[],
  },
  socials: [
    { name: "Instagram", handle: "@solvra.studio", href: null },
    { name: "LinkedIn", handle: "SOLVRA Studio", href: null },
    { name: "TikTok", handle: "@solvra.studio", href: null },
    { name: "YouTube", handle: "SOLVRA", href: null },
  ],
} as const;

export type SiteConfig = typeof siteConfig;