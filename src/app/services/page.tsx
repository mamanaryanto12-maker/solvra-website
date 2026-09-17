import type { Metadata } from "next";

import { PageIntro } from "@/components/ui/PageIntro";
import { ServiceDetailExplorer } from "@/components/services/ServiceDetail";
import { ProcessSection } from "@/components/services/ProcessSection";
import { ScopeSection } from "@/components/services/ScopeSection";
import { CTASection } from "@/components/cta/CTASection";

export const metadata: Metadata = {
  title: "Layanan: Desain, Development, Digital Experience",
  description:
    "SOLVRA menawarkan tiga layanan inti yang bekerja berurutan: Design, Development, dan Digital Experience, dari strategi hingga kode, dalam satu tim.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        atmosphere="systems"
        eyebrow="Layanan"
        title="Apa yang kami lakukan, dengan jelas."
        description="Tiga layanan inti yang bekerja sebagai satu kesatuan. Pilih salah satu untuk mempelajari detailnya, atau biarkan kami membantu menentukan kebutuhan Anda."
        meta={["Design", "Development", "Digital Experience"]}
      />

      <section className="border-b border-line py-16 sm:py-24">
        <div className="container-x">
          <ServiceDetailExplorer />
        </div>
      </section>

      <ProcessSection />
      <ScopeSection />

      <CTASection
        eyebrow="Selanjutnya"
        headline="Tertarik dengan pendekatan kami?"
        text="Lihat paket investasi yang tersedia, atau mulai dengan percakapan singkat tentang kebutuhan website Anda."
        primaryLabel="Lihat Paket Website"
        primaryHref="/packages"
        secondaryLabel="Mulai Percakapan"
        secondaryHref="/contact"
      />
    </>
  );
}