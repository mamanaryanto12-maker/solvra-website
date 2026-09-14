import type { Metadata } from "next";

import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { PricingCards, ComparisonTable } from "@/components/packages/PricingCards";
import { IndustriesSection } from "@/components/packages/IndustriesSection";
import { AddOnsSection } from "@/components/packages/AddOnsSection";
import { DomainHostingSection } from "@/components/packages/DomainHostingSection";
import { FAQSection } from "@/components/packages/FAQSection";
import { CustomCtaSection } from "@/components/packages/CustomCtaSection";
import { CTASection } from "@/components/cta/CTASection";
import { finalCta } from "@/data/packages";

export const metadata: Metadata = {
  title: "Paket Website — Investasi yang Jelas",
  description:
    "Tujuh pilihan paket website dari yang sederhana hingga solusi digital custom. Harga transparan, cakupan jelas, dan bisa disesuaikan dengan kebutuhan bisnis Anda.",
  alternates: { canonical: "/packages" },
};

export default function PackagesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Paket & Investasi"
        title="Investasi yang jelas untuk fondasi digital Anda."
        description="Tujuh pilihan paket dengan cakupan dan harga yang transparan — dari website sederhana hingga solusi digital custom. Jika belum yakin, mulailah dari percakapan singkat; kami bantu menentukan yang paling tepat."
        meta={["7 pilihan paket", "Mulai dari Rp120.000", "Harga mulai dari", "Konsultasi awal gratis"]}
      />

      <section className="border-b border-line py-16 sm:py-24">
        <div className="container-x">
          <PricingCards />
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-3xl text-[13.5px] leading-relaxed text-muted">
              Paket di atas adalah titik awal, bukan batasan. Ruang lingkup, jumlah halaman, konten,
              dan fitur dapat disesuaikan dengan kebutuhan bisnis Anda.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Bandingkan"
            title="Perbandingan paket."
            description="Jika Anda menghargai detail, berikut perbandingan cakupan tiap paket secara ringkas."
          />
          <Reveal delay={0.1}>
            <div className="mt-12">
              <ComparisonTable />
            </div>
          </Reveal>
        </Container>
      </section>

      <IndustriesSection />

      <AddOnsSection />

      <DomainHostingSection />

      <FAQSection />

      <CustomCtaSection />

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