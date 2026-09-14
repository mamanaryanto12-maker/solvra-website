import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { domainHosting } from "@/data/packages";

export function DomainHostingSection() {
  return (
    <section className="border-b border-line bg-white py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="grid grid-cols-1 gap-10 border border-forest bg-forest p-8 text-ivory sm:p-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="label-light">Domain & Hosting</span>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-ivory sm:text-3xl">
                {domainHosting.heading}
              </h2>
              <div className="mt-5 flex max-w-xl flex-col gap-3">
                {domainHosting.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-[15px] leading-relaxed text-ivory/70">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-8">
                <Button href="/contact" variant="light" size="lg" arrow>
                  {domainHosting.cta}
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <p className="text-[11px] font-bold uppercase tracking-widest text-sage">
                Yang perlu dipertimbangkan
              </p>
              <ul className="mt-5 flex flex-col">
                {domainHosting.factors.map((factor, index) => (
                  <li
                    key={factor}
                    className="flex items-baseline justify-between gap-6 border-b border-ivory/15 py-3.5"
                  >
                    <span className="flex items-center gap-3 text-[15px] font-semibold text-ivory">
                      <span className="text-[11px] font-bold text-sage">0{index + 1}</span>
                      {factor}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}