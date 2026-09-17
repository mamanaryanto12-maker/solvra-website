import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { industries } from "@/data/packages";

export function IndustriesSection() {
  return (
    <section className="border-b border-line bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Kisaran Investasi"
          title="Perkiraan investasi berdasarkan bidang."
          description="Angka di bawah adalah perkiraan berdasarkan pengalaman mengerjakan proyek serupa di bidang yang sama. Kebutuhan setiap bisnis dapat berbeda-beda."
        />

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <Reveal key={industry.name} delay={(index % 3) * 0.05}>
              <div className="flex h-full flex-col justify-between gap-8 bg-white p-6 transition-colors duration-300 hover:bg-ivory sm:p-7">
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-forest">{industry.name}</h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-muted">{industry.description}</p>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[13px] font-bold text-moss">{industry.range}</span>
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-sage">
                    · Konsultasikan →
                  </span>
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.15}>
            <div className="flex h-full flex-col justify-between gap-8 bg-ivory p-6 sm:p-7">
              <div>
                <h3 className="text-xl font-bold tracking-tight text-forest">Bidang lain?</h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-muted">
                  Setiap bisnis memiliki kebutuhan yang berbeda. Ceritakan bidang dan tujuan Anda, kami bantu memperkirakan investasinya.
                </p>
              </div>
              <Link href="/contact" className="text-[12px] font-bold uppercase tracking-widest text-forest hover:text-moss">
                Konsultasikan →
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}