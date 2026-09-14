import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { processStages } from "@/data/services";

export function ProcessOverview() {
  return (
    <section className="border-t border-line bg-white py-20 sm:py-28">
      <Container>
        <div className="mb-14 flex flex-col gap-10 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <span className="label">Cara Kami Bekerja</span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-forest sm:text-4xl lg:text-[2.75rem]">
                Dari obrolan pertama hingga website tayang.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted sm:text-base">
                Alur ini membuat proyek terasa tenang — Anda selalu tahu berada di tahap mana dan
                apa yang terjadi berikutnya.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Button href="/services#process" variant="outline" arrow className="shrink-0">
              Lihat Proses Kami
            </Button>
          </Reveal>
        </div>

        <div className="relative lg:grid lg:grid-cols-5 lg:gap-8">
          <span
            aria-hidden="true"
            className="absolute bottom-2 left-[26px] top-2 w-px bg-line lg:hidden"
          />
          <span
            aria-hidden="true"
            className="absolute -top-px left-6 right-6 hidden h-px bg-line lg:block"
          />
          {processStages.map((stage, index) => (
            <Reveal key={stage.id} delay={index * 0.08}>
              <div className="relative grid grid-cols-[3.5rem_1fr] gap-4 pb-9 lg:grid-cols-1 lg:gap-0 lg:pb-0">
                <div className="relative z-10 lg:flex lg:items-center lg:gap-3">
                  <span
                    aria-hidden="true"
                    className="absolute left-[50%] top-[-5px] hidden h-px w-[60%] bg-line lg:block"
                  />
                  <span
                    className={
                      "relative z-10 flex h-[52px] w-[52px] items-center justify-center " +
                      "border bg-ivory text-sm font-bold tracking-widest text-moss"
                    }
                  >
                    {stage.index}
                  </span>
                  {index < processStages.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="hidden h-1 w-5 border-y border-dashed border-moss/40 lg:block"
                    />
                  )}
                </div>
                <div className="flex flex-col gap-2 pt-0.5 lg:pt-5">
                  <h3 className="text-lg font-bold tracking-tight text-forest sm:text-xl">
                    {stage.title}
                  </h3>
                  <p className="max-w-xs text-[14px] leading-relaxed text-muted">
                    {stage.description}
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