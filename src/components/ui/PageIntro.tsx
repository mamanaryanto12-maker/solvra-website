import type { ReactNode } from "react";
import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

export type Atmosphere =
  | "studio"
  | "systems"
  | "monument"
  | "gallery"
  | "insight"
  | "contact";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  meta?: string[];
  atmosphere?: Atmosphere;
};

const NAVY = "14,26,61";
const BLUE = "46,111,242";
const IVORY = "247,247,245";

function Glow({
  className,
  color = `rgba(${BLUE},0.16)`,
}: {
  className?: string;
  color?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute", className)}
      style={{
        background: `radial-gradient(closest-side, ${color} 0%, transparent 72%)`,
      }}
    />
  );
}

function Dots({
  className,
  tone = `rgba(${NAVY},0.11)`,
  size = 24,
}: {
  className?: string;
  tone?: string;
  size?: number;
}) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute", className)}
      style={{
        backgroundImage: `radial-gradient(circle, ${tone} 1px, transparent 1.5px)`,
        backgroundSize: `${size}px ${size}px`,
      }}
    />
  );
}

function Rings({
  className,
  size = 320,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute rounded-full", className)}
      style={{
        width: size,
        height: size,
        border: `1.5px solid rgba(${NAVY},0.16)`,
        boxShadow: `0 0 0 46px rgba(${NAVY},0.07), 0 0 0 96px rgba(${NAVY},0.04), inset 0 0 90px rgba(${BLUE},0.09)`,
      }}
    />
  );
}

function FineGrid({ className, opacity = 0.3 }: { className?: string; opacity?: number }) {
  return (
    <div
      aria-hidden
      className={cn("grid-lines pointer-events-none absolute inset-0", className)}
      style={{ opacity }}
    />
  );
}

function Scrim({
  src,
  className,
  opacity = 0.7,
}: {
  src: string;
  className?: string;
  opacity?: number;
}) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute overflow-hidden", className)}>
      <Image
        src={src}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ opacity }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(247,247,245,0.18) 0%, rgba(247,247,245,0.12) 50%, rgba(247,247,245,0.3) 100%)",
        }}
      />
    </div>
  );
}

function Arch({
  className,
  size = 540,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute rounded-t-full border", className)}
      style={{
        width: size,
        height: size * 1.08,
        borderColor: `rgba(${NAVY},0.16)`,
        boxShadow: `inset 0 0 100px rgba(${BLUE},0.08)`,
      }}
    />
  );
}

function Sheet({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute rounded-2xl border border-forest/15 bg-forest/[0.04]",
        className
      )}
      style={{ boxShadow: "0 34px 90px -44px rgba(14,26,61,0.35)" }}
    />
  );
}

function CornerFrame({
  className,
  length = 64,
  color = `rgba(${NAVY},0.22)`,
}: {
  className?: string;
  length?: number;
  color?: string;
}) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute", className)}>
      <span
        className="absolute left-0 top-0 block"
        style={{
          width: length,
          height: length,
          margin: -length / 2,
          borderLeft: `1.5px solid ${color}`,
          borderTop: `1.5px solid ${color}`,
        }}
      />
      <span
        className="absolute block"
        style={{
          right: 0,
          bottom: 0,
          width: length,
          height: length,
          margin: -length / 2,
          borderRight: `1.5px solid ${color}`,
          borderBottom: `1.5px solid ${color}`,
        }}
      />
    </div>
  );
}

function StudioPanel() {
  return (
    <div className="relative">
      <div className="relative ml-8 overflow-hidden rounded-t-[10rem] border border-line shadow-raise sm:ml-0 sm:aspect-[4/5] sm:rounded-t-[12rem]">
        <Image
          src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=1600&q=90&auto=format&fit=crop"
          alt="Ruang modern yang tenang dan elegan dalam pencahayaan alami"
          fill
          priority
          sizes="50vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(247,247,245,0) 40%, rgba(247,247,245,0.72) 100%)",
          }}
        />
        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-moss">Desain & Ruang</p>
            <p className="mt-1 text-sm font-bold text-forest">Referensi suasana studio yang elegan</p>
          </div>
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-forest/15 bg-white/90 text-[16px] font-bold text-forest">
            S
          </span>
        </div>
      </div>
      <CornerFrame className="-left-2 -top-6 opacity-80" length={56} />
    </div>
  );
}

function GalleryPanel() {
  return (
    <div className="relative">
      <div className="relative ml-4 overflow-hidden rounded-t-[10rem] border border-line shadow-raise sm:ml-0 sm:aspect-[4/5] sm:rounded-t-[12rem]">
        <Image
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1600&q=88&auto=format&fit=crop"
          alt="Detail arsitektur modern yang terkurasi"
          fill
          priority
          sizes="50vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(247,247,245,0) 45%, rgba(247,247,245,0.78) 100%)",
          }}
        />
        <div className="absolute bottom-5 left-5 right-5">
          <p className="text-[10px] font-bold uppercase tracking-widest text-moss">
            Kurasi Visual
          </p>
          <p className="mt-1 text-sm font-bold text-forest">Referensi arsitektur modern</p>
        </div>
      </div>
      <CornerFrame className="-right-4 -top-8 opacity-70" length={60} color="rgba(46,111,242,0.4)" />
      <Rings className="-right-12 -bottom-10 opacity-80" size={220} />
    </div>
  );
}

const ATMOSPHERES: Record<Atmosphere, ReactNode> = {
  studio: (
    <>
      <Glow className="left-[2%] top-[6%] h-[560px] w-[560px]" color={`rgba(${BLUE},0.17)`} />
      <Rings className="-right-10 -bottom-28 sm:right-[4%] sm:-bottom-36" size={380} />
      <Rings className="-right-16 -bottom-32 sm:right-[11%] sm:-bottom-52" size={560} />
      <Dots className="right-[6%] top-[10%] h-40 w-72 opacity-90" size={20} />
      <div className="grid-lines absolute inset-0 opacity-[0.12]" />
    </>
  ),
  systems: (
    <>
      <Scrim
        className="inset-0"
        src="https://images.unsplash.com/photo-1497215842964-222b430dc094?w=2400&q=90&auto=format&fit=crop"
        opacity={0.62}
      />
      <FineGrid opacity={0.3} />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[8%] top-[9%] hidden h-px w-64 bg-gradient-to-r from-transparent via-forest/30 to-transparent lg:block"
      />
      <div aria-hidden className="pointer-events-none absolute right-[10%] top-[14%] hidden items-end gap-3 lg:flex">
        <span className="block h-16 w-10 rounded-t-md border border-white/60 bg-white/30 backdrop-blur-[2px]" />
        <span className="block h-24 w-12 rounded-t-md border border-white/60 bg-white/40 backdrop-blur-[2px]" />
        <span className="block h-12 w-8 rounded-t-md border border-blue/30 bg-blue/10 backdrop-blur-[2px]" />
      </div>
      <Glow className="-left-24 bottom-[-10%] h-[520px] w-[520px]" color={`rgba(${NAVY},0.14)`} />
    </>
  ),
  monument: (
    <>
      <Glow className="right-[0%] top-[0%] h-[620px] w-[620px]" color={`rgba(${NAVY},0.16)`} />
      <Arch className="-right-20 -top-14 sm:right-[8%] sm:top-[-2%]" size={560} />
      <Scrim
        className="inset-0"
        src="https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=2400&q=85&auto=format&fit=crop"
        opacity={0.6}
      />
      <Dots className="right-[4%] top-[18%] hidden h-36 w-72 md:block" size={28} />
    </>
  ),
  gallery: (
    <>
      <FineGrid opacity={0.15} />
      <Glow className="left-[-4%] top-[0%] h-[620px] w-[620px]" color={`rgba(${BLUE},0.14)`} />
      <CornerFrame
        className="left-[50%] top-[8%] hidden lg:block"
        length={72}
        color="rgba(46,111,242,0.35)"
      />
      <Dots className="left-[6%] bottom-[8%] hidden h-32 w-64 md:block" size={24} />
      <div
        aria-hidden
        className="absolute left-[50%] top-[20%] hidden h-px w-[28%] bg-gradient-to-r from-transparent via-forest/15 to-transparent lg:block"
      />
    </>
  ),
  insight: (
    <>
      <Scrim
        className="inset-0"
        src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=2400&q=90&auto=format&fit=crop"
        opacity={0.62}
      />
      <Glow className="right-[0%] top-[4%] h-[520px] w-[520px]" color={`rgba(${BLUE},0.14)`} />
      <Rings className="-left-20 top-[38%] sm:left-[2%]" size={340} />
      <Dots className="right-[6%] bottom-[16%] hidden h-28 w-60 md:block" size={22} />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[14%] left-[3%] hidden w-64 space-y-3 lg:block"
      >
        <span className="block h-2 w-44 rounded-full bg-forest/20" />
        <span className="block h-2 w-64 rounded-full bg-forest/15" />
        <span className="block h-2 w-52 rounded-full bg-forest/[0.12]" />
      </div>
    </>
  ),
  contact: (
    <>
      <Glow className="left-[24%] top-[8%] h-[600px] w-[600px]" color={`rgba(${BLUE},0.16)`} />
      <Sheet className="right-[6%] top-[-10%] hidden h-[340px] w-[460px] md:block" />
      <Sheet className="bottom-[-16%] left-[4%] hidden h-[240px] w-[340px] rotate-[-5deg] md:block" />
      <Dots className="right-[3%] bottom-[8%] hidden h-40 w-72 md:block" size={22} />
      <div className="grid-lines absolute inset-0 opacity-[0.1]" />
    </>
  ),
};

export function PageIntro({
  eyebrow,
  title,
  description,
  meta,
  atmosphere = "studio",
}: PageIntroProps) {
  const centered = atmosphere === "monument" || atmosphere === "insight";
  const withPanel = atmosphere === "studio" || atmosphere === "gallery";

  return (
    <section className="relative overflow-hidden border-b border-line pb-14 pt-32 sm:pb-20 sm:pt-40">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        {ATMOSPHERES[atmosphere]}
        {!withPanel && (
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg, rgba(${IVORY},0.76) 0%, rgba(${IVORY},0.64) 55%, rgba(${IVORY},0.88) 100%)`,
            }}
          />
        )}
        <div className="noise absolute inset-0" />
      </div>

      <Container>
        {centered ? (
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <span className="label">{eyebrow}</span>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tightest text-forest sm:text-6xl">
                {title}
              </h1>
            </Reveal>
            {description && (
              <Reveal delay={0.12}>
                <p className="mx-auto mt-7 max-w-2xl text-[16px] leading-relaxed text-muted">
                  {description}
                </p>
              </Reveal>
            )}
            {meta && (
              <Reveal delay={0.16}>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
                  {meta.map((item) => (
                    <span
                      key={item}
                      className="border-t pt-2 text-[11px] font-bold uppercase tracking-widest text-forest"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            )}
          </div>
        ) : withPanel ? (
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <Reveal>
                <span className="label">{eyebrow}</span>
              </Reveal>
              <Reveal delay={0.06}>
                <h1 className="mt-5 text-4xl font-extrabold leading-[1.02] tracking-tightest text-forest sm:text-6xl">
                  {title}
                </h1>
              </Reveal>
              {description && (
                <Reveal delay={0.12}>
                  <p className="mt-7 max-w-xl text-[16px] leading-relaxed text-muted">
                    {description}
                  </p>
                </Reveal>
              )}
              {meta && (
                <Reveal delay={0.16}>
                  <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-line pt-6">
                    {meta.map((item) => (
                      <span
                        key={item}
                        className="text-[11px] font-bold uppercase tracking-widest text-muted"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </Reveal>
              )}
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.2}>
                {atmosphere === "studio" ? <StudioPanel /> : <GalleryPanel />}
              </Reveal>
            </div>
          </div>
        ) : (
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
                  <p className="border-l-2 border-moss pl-4 text-[15px] leading-relaxed text-muted">
                    {description}
                  </p>
                </Reveal>
              </div>
            )}
            {meta && (
              <Reveal delay={0.16}>
                <div className="col-span-full mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-line pt-6">
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
          </div>
        )}
      </Container>
    </section>
  );
}