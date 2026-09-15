import type { Metadata } from "next";

import { PageIntro } from "@/components/ui/PageIntro";
import { WorkGrid } from "@/components/work/WorkGrid";
import { Marquee } from "@/components/ui/Marquee";
import { CTASection } from "@/components/cta/CTASection";

export const metadata: Metadata = {
  title: "Proyek & Karya",
  description:
    "Lihat pendekatan desain dan kualitas SOLVRA melalui website concept mandiri — contoh nyata cara kami menyusun website untuk berbagai industri.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageIntro
        atmosphere="gallery"
        eyebrow="Portofolio"
        title="Karya yang berbicara."
        description="Kumpulan website concept mandiri yang menunjukkan pendekatan, kualitas visual, dan cara berpikir kami dalam menyusun website untuk berbagai industri."
        meta={["Website Concept", "Property", "Hospitality", "Professional Services", "Logistics", "Community & Non-Profit"]}
      />

      <WorkGrid />

      <Marquee
        items={[
          "Property", "Hospitality", "Professional Services",
          "Logistics", "Community & Non-Profit",
        ]}
        tone="dark"
      />

      <CTASection
        eyebrow="Proyek Berikutnya"
        headline="Sudah melihat pendekatan kami?"
        text="Setiap proyek dimulai dari pemahaman masalah bisnis Anda. Mari mulai percakapan dan rancang website yang tepat bersama."
        primaryLabel="Mulai Proyek Anda"
        primaryHref="/contact"
        secondaryLabel="Konsultasi Gratis"
        secondaryHref="/contact"
      />
    </>
  );
}