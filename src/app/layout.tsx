import { Manrope } from "next/font/google";
import type { Metadata } from "next";
import { MotionConfig } from "framer-motion";
import { Suspense } from "react";

import { siteConfig } from "@/data/siteConfig";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { ScrollToTop } from "@/components/layout/ScrollToTop";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.name} · ${siteConfig.descriptor}`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "Digital Website Studio",
    "Strategic Website Design",
    "Website Development",
    "Digital Experience",
    "SOLVRA",
    "Jasa Pembuatan Website",
    "Website Indonesia",
  ],
  manifest: "/site.webmanifest",
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: siteConfig.name,
    title: `${siteConfig.name} · ${siteConfig.descriptor}`,
    description: siteConfig.description,
    images: [
      {
        url: "/og-solvra.svg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name}, ${siteConfig.descriptor}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} · ${siteConfig.descriptor}`,
    description: siteConfig.description,
    images: ["/og-solvra.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={manrope.variable}>
      <body className={manrope.className}>
        <MotionConfig reducedMotion="user">
          <ScrollProgress />
          <Suspense fallback={null}>
            <ScrollToTop />
          </Suspense>
          <Nav />
          <main id="top">{children}</main>
          <Footer />
        </MotionConfig>
      </body>
    </html>
  );
}