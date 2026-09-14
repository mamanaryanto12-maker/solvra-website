import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { customCta } from "@/data/packages";

export function CustomCtaSection() {
  return (
    <section className="border-b border-line py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="relative grid grid-cols-1 items-center gap-10 overflow-hidden border border-forest bg-ivory p-8 sm:p-12 lg:grid-cols-12">
            <span
              aria-hidden="true"
              className="absolute -right-6 -top-10 hidden select-none text-[180px] font-extrabold leading-none tracking-tightest text-forest/[0.06] lg:block"
            >
              SOLVRA
            </span>
            <div className="lg:col-span-8">
              <span className="label">{customCta.eyebrow}</span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-forest sm:text-4xl">
                {customCta.heading}
              </h2>
              <div className="mt-5 flex max-w-xl flex-col gap-3">
                {customCta.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-[15px] leading-relaxed text-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="lg:col-span-4 lg:flex lg:justify-end">
              <Button href="/contact" variant="primary" size="lg" arrow className="w-full sm:w-auto">
                {customCta.cta}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}