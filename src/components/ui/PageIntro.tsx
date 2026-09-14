import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  meta?: string[];
};

export function PageIntro({ eyebrow, title, description, meta }: PageIntroProps) {
  return (
    <section className="relative overflow-hidden border-b border-line pb-14 pt-32 sm:pb-20 sm:pt-40">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(760px 420px at 88% -8%, rgba(46,111,242,0.14) 0%, transparent 62%), radial-gradient(640px 400px at -6% 108%, rgba(14,26,61,0.12) 0%, transparent 60%)",
          }}
        />
        <Image
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=2000&q=80&auto=format&fit=crop"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-65"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(247,247,245,0.86) 0%, rgba(247,247,245,0.8) 50%, rgba(247,247,245,0.94) 100%)",
          }}
        />
        <div className="grid-lines absolute inset-0 opacity-30" />
        <div className="noise absolute inset-0" />
      </div>
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <span className="label">{eyebrow}</span>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mt-5 text-4xl font-extrabold leading-[1.03] tracking-tightest text-forest sm:text-6xl">
                {title}
              </h1>
            </Reveal>
          </div>
          {description && (
            <div className="lg:col-span-4">
              <Reveal delay={0.12}>
                <p className="text-[15px] leading-relaxed text-muted">{description}</p>
              </Reveal>
            </div>
          )}
        </div>

        {meta && (
          <Reveal delay={0.16}>
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-line pt-6">
              {meta.map((item) => (
                <span
                  key={item}
                  className="text-[12px] font-semibold uppercase tracking-widest text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        )}
      </Container>
    </section>
  );
}