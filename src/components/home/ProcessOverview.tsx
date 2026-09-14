import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { processStages } from "@/data/services";

export function ProcessOverview() {
  return (
    <section className="border-t border-line bg-white py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <span className="label">Cara Kami Bekerja</span>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-forest sm:text-4xl">
                  Cara Kami Bekerja
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-5 max-w-xs text-[14.5px] leading-relaxed text-muted">
                  Proses yang jelas membuat proyek website terasa tenang — Anda selalu tahu di
                  tahap mana proyek berada dan apa yang terjadi berikutnya.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <Button href="/services#process" variant="outline" arrow className="mt-8">
                  Lihat Proses Kami
                </Button>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="relative">
              <span
                aria-hidden="true"
                className="absolute bottom-2 left-[26px] top-2 w-px bg-line"
              />
              <div className="flex flex-col">
                {processStages.map((stage) => (
                  <Reveal key={stage.id}>
                    <div className="relative grid grid-cols-[3.5rem_1fr] gap-4 py-6 sm:grid-cols-[6rem_1fr] sm:gap-8">
                      <div className="relative z-10 flex h-[52px] w-[52px] items-center justify-center border border-line bg-ivory text-sm font-bold tracking-widest text-moss">
                        {stage.index}
                      </div>
                      <div className="flex flex-col gap-2 pt-1">
                        <h3 className="text-xl font-bold tracking-tight text-forest sm:text-2xl">
                          {stage.title}
                        </h3>
                        <p className="max-w-md text-[14.5px] leading-relaxed text-muted">
                          {stage.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}