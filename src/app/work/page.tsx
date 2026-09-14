import type { Metadata } from "next";

import { PageIntro } from "@/components/ui/PageIntro";
import { WorkGrid } from "@/components/work/WorkGrid";
import { Marquee } from "@/components/ui/Marquee";
import { CTASection } from "@/components/cta/CTASection";

export const metadata: Metadata = {
  title: "Proyek & Karya",
  description:
    "Lihat pendekatan desain dan kualitas SOLVRA melalui studi konsep — contoh nyata cara kami membangun website untuk berbagai industri.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageIntro
        eyebrow="Portofolio"
        title="Karya yang berbicara."
        description="Kumpulan studi konsep internal yang menunjukkan pendekatan, kualitas visual, dan cara berpikir kami dalam membangun website untuk berbagai industri."
        meta={["Studio Concept", "Business", "Education", "Property", "Hospitality", "Healthcare", "Retail"]}
      />

      <WorkGrid />

      <Marquee
        items={[
          "Property", "Hospitality", "Healthcare", "Education",
          "Professional Services", "Retail", "Business",
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