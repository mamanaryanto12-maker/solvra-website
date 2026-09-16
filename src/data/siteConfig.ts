export type NavItem = {
  label: string;
  href: string;
};

export const siteConfig = {
  name: "SOLVRA",
  descriptor: "Digital Website Studio",
  tagline: "Digital Website Studio dari Indonesia, untuk bisnis yang serius mau tumbuh online.",
  heroHeadline: "Website yang dibangun untuk bisnis dan keperluan Anda.",
  philosophy:
    "Website yang bagus itu yang bikin orang lupa mereka sedang pakai website — bukan yang bikin mereka kagum sama animasinya.",
  siteUrl: "https://solvra.studio",
  description:
    "SOLVRA adalah Digital Website Studio dari Indonesia. Setiap website dibangun satu per satu dan diawali percakapan — supaya benar-benar dipikirkan, bukan dicetak dari template.",
  defaultOgImage: "/og-solvra.svg",
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