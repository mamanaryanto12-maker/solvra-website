import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

type CTASectionProps = {
  headline: string;
  text?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  eyebrow?: string;
};

export function CTASection({
  headline,
  text,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  eyebrow,
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-forest text-ivory">
      <div className="grid-lines absolute inset-0 opacity-60" aria-hidden="true" />
      <span
        aria-hidden="true"
        className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-ivory/10"
      />
      <span
        aria-hidden="true"
        className="absolute -right-8 -top-8 h-40 w-40 rounded-full border border-sage/20"
      />

      <Container className="relative py-24 sm:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            {eyebrow && (
              <Reveal>
                <span className="label-light">{eyebrow}</span>
              </Reveal>
            )}
            <Reveal delay={0.05}>
              <h2 className="mt-5 max-w-3xl text-3xl font-bold leading-[1.08] tracking-tight text-ivory sm:text-5xl">
                {headline}
              </h2>
            </Reveal>
            {text && (
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-ivory/60">{text}</p>
              </Reveal>
            )}
          </div>

          <div className="lg:col-span-4">
            <Reveal delay={0.14}>
              <div className="flex flex-wrap gap-4 lg:flex-col lg:items-stretch">
                <Button href={primaryHref} variant="light" size="lg" arrow>
                  {primaryLabel}
                </Button>
                {secondaryLabel && secondaryHref && (
                  <Button href={secondaryHref} variant="outline-light" size="lg">
                    {secondaryLabel}
                  </Button>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}