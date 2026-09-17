import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processStages } from "@/data/services";

const stageOutput = [
  "Pemahaman bisnis, audiens, dan tujuan",
  "Struktur konten dan peta perjalanan pengguna",
  "Antarmuka desain yang siap dikembangkan",
  "Website cepat, responsive, dan aman",
  "Rilis mulus plus dukungan lanjutan",
];

export function ProcessSection() {
  return (
    <section id="process" className="scroll-mt-24 border-t border-line bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Alur Kerja"
          title="Proses yang jelas, dari awal hingga peluncuran."
          description="Setiap tahap memiliki tujuan dan luaran yang dapat Anda lihat: tidak ada kejutan di tengah jalan."
        />

        <div className="mt-16 flex flex-col">
          {processStages.map((stage, index) => (
            <Reveal key={stage.id} delay={index * 0.05}>
              <div className="grid grid-cols-1 gap-4 border-t border-line py-7 sm:grid-cols-[6rem_1fr_1.2fr] sm:gap-8 lg:grid-cols-[8rem_1fr_1.4fr]">
                <span className="text-sm font-bold tracking-widest text-moss">{stage.index}</span>
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-forest sm:text-2xl">
                    {stage.title}
                  </h3>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="max-w-lg text-[14.5px] leading-relaxed text-muted">
                    {stage.description}
                  </p>
                  <p className="text-[12px] font-semibold uppercase tracking-widest text-muted/70">
                    {stageOutput[index]}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}