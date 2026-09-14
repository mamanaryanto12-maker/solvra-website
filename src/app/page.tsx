import type { Metadata } from "next";

import { siteConfig } from "@/data/siteConfig";
import { HomeHero } from "@/components/home/HomeHero";
import { Marquee } from "@/components/ui/Marquee";
import { StrategicPositioning } from "@/components/home/StrategicPositioning";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { WhySolvra } from "@/components/home/WhySolvra";
import { SelectedWork } from "@/components/home/SelectedWork";
import { ProcessOverview } from "@/components/home/ProcessOverview";
import { PackagesPreview } from "@/components/home/PackagesPreview";
import { InsightsPreview } from "@/components/home/InsightsPreview";
import { CTASection } from "@/components/cta/CTASection";
import { finalCta } from "@/data/packages";

export const metadata: Metadata = {
  title: `${siteConfig.name} — Digital Website Studio untuk Bisnis Modern`,
  description:
    "SOLVRA membangun website strategis, premium, dan berorientasi pada hasil untuk bisnis modern — dari strategi, desain, pengembangan, hingga peluncuran.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <Marquee
        items={[
          "Website Strategis",
          "Desain Premium",
          "Pengalaman Digital",
          "Fokus pada Hasil",
          "Kecepatan & Performa",
        ]}
      />
      <StrategicPositioning />
      <ServicesOverview />
      <WhySolvra />
      <SelectedWork />
      <ProcessOverview />
      <PackagesPreview />
      <InsightsPreview />
      <CTASection
        eyebrow={finalCta.eyebrow}
        headline={finalCta.headline}
        text={finalCta.text}
        primaryLabel={finalCta.primaryLabel}
        primaryHref={finalCta.primaryHref}
        secondaryLabel={finalCta.secondaryLabel}
        secondaryHref={finalCta.secondaryHref}
      />
    </>
  );
}