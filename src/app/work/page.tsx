import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { projects } from "@/data/projects";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { Marquee } from "@/components/ui/Marquee";
import { CTASection } from "@/components/cta/CTASection";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Proyek nyata yang kami kerjakan. Saat ini menampilkan Ruang Antara Studio — website arsitektur butik di Bandung Utara.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  const project = projects[0];

  return (
    <>
      <PageIntro
        atmosphere="gallery"
        eyebrow="Work"
        title="Satu proyek, dikerjakan sungguh-sungguh."
        description="Kami tidak memenuhi halaman ini dengan contoh fiktif. Yang tampil di sini adalah pekerjaan nyata — lengkap dengan studi kasus cara kami berpikir dan membangunnya."
        meta={[project.industry, project.kind, "Bandung, Jawa Barat"]}
      />

      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <Link href={`/work/${project.slug}`} className="group block">
              <div className="relative aspect-[16/9] w-full overflow-hidden border border-line bg-white">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  quality={88}
                  sizes="(min-width: 1280px) 1200px, 100vw"
                  className="object-cover object-top transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.015]"
                />
              </div>
            </Link>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
            <Reveal delay={0.06} className="lg:col-span-5">
              <p className="text-[11px] font-bold uppercase tracking-widest text-moss">
                {project.industry} · {project.kind}
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-forest sm:text-4xl">
                {project.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-7">
              <p className="max-w-2xl text-[15.5px] leading-relaxed text-muted">
                {project.description}
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-3">
                <Link
                  href={`/work/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-forest transition-colors hover:text-moss"
                >
                  <span className="border-b border-moss/0 transition-colors hover:border-moss/60">
                    Lihat studi kasus
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-moss" />
                </Link>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-forest transition-colors hover:text-moss"
                >
                  <span className="border-b border-moss/0 transition-colors hover:border-moss/60">
                    Buka situs langsung
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-moss" />
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="mt-14 grid grid-cols-2 gap-8 border-t border-line pt-10 sm:grid-cols-4">
              {project.facts.map((fact) => (
                <div key={fact.term}>
                  <dt className="text-[11px] font-bold uppercase tracking-widest text-muted">
                    {fact.term}
                  </dt>
                  <dd className="mt-2 text-[15px] font-bold text-forest">{fact.value}</dd>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <Marquee
        items={["Arsitektur", "Editorial", "HTML · CSS · JS", "Gambar Kerja Vektor", "Bandung"]}
        tone="dark"
      />

      <CTASection
        eyebrow="Proyek Berikutnya"
        headline="Bisnis Anda bisa jadi proyek berikutnya."
        text="Setiap proyek dimulai dari pemahaman masalah bisnis Anda. Mari mulai percakapan dan rancang website yang tepat bersama."
        primaryLabel="Mulai Proyek Anda"
        primaryHref="/contact"
        secondaryLabel="Konsultasi Gratis"
        secondaryHref="/contact"
      />
    </>
  );
}
