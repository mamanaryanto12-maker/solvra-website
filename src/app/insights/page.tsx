import type { Metadata } from "next";

import { PageIntro } from "@/components/ui/PageIntro";
import { InsightFilters } from "@/components/insights/InsightFilters";
import { CTASection } from "@/components/cta/CTASection";

export const metadata: Metadata = {
  title: "Insights — Pemikiran tentang Web & Bisnis",
  description:
    "Catatan, strategi, dan pemikiran tentang web design, pengalaman digital, dan pertumbuhan bisnis modern.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Insights"
        title="Pemikiran, catatan, dan pandangan kami."
        description="Pemikiran tentang web design, strategi digital, dan hal-hal yang sering kami pelajari dari proyek bersama klien."
        meta={["Draft / Demo Content", "5 Kategori", "Web Design & Strategy"]}
      />

      <InsightFilters />

      <CTASection
        eyebrow="Tertarik berdiskusi?"
        headline="Ada topik yang ingin Anda diskusikan?"
        text="Hubungi kami untuk percakapan singkat tentang strategi website, pengalaman digital, atau kebutuhan spesifik bisnis Anda."
        primaryLabel="Hubungi SOLVRA"
        primaryHref="/contact"
        secondaryLabel="Kembali ke Layanan"
        secondaryHref="/services"
      />
    </>
  );
}