import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { faq } from "@/data/packages";

export function FAQSection() {
  return (
    <section className="border-b border-line py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-20">
          <div className="lg:w-[40%]">
            <SectionHeading
              eyebrow="Pertanyaan Umum"
              title="Pertanyaan yang sering diajukan."
              description="Belum menemukan jawaban? Konsultasikan kebutuhan Anda, kami akan membantu."
            />
          </div>
          <Reveal delay={0.1} className="flex-1">
            <FAQAccordion items={faq} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}