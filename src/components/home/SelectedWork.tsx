import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

export function SelectedWork() {
  const project = projects.find((p) => p.featured) ?? projects[0];

  if (!project) return null;

  return (
    <section className="border-t border-line py-20 sm:py-28">
      <Container>
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <span className="label">Selected Work</span>
            <h2 className="mt-4 max-w-xl text-3xl font-bold tracking-tight text-forest sm:text-4xl lg:text-[2.75rem]">
              Karya yang berbicara lewat dirinya sendiri.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="flex items-center gap-4">
              <p className="max-w-xs text-[13.5px] leading-relaxed text-muted">
                Proyek yang kami tampilkan adalah pekerjaan nyata — tanpa contoh fiktif dan tanpa
                angka yang belum terverifikasi.
              </p>
              <Button href="/work" variant="outline" arrow className="shrink-0">
                Lihat Karya
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.05}>
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
            <h3 className="mt-3 text-2xl font-bold tracking-tight text-forest sm:text-3xl">
              {project.title}
            </h3>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-4">
            <p className="text-[15px] leading-relaxed text-muted">{project.description}</p>
          </Reveal>

          <Reveal delay={0.14} className="lg:col-span-3">
            <ul className="flex flex-col gap-2.5">
              {project.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[14px] font-medium text-forest/80"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-moss" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href={`/work/${project.slug}`}
              className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-forest transition-colors hover:text-moss"
            >
              <span className="border-b border-moss/0 transition-colors hover:border-moss/60">
                Lihat studi kasus
              </span>
              <ArrowUpRight className="h-4 w-4 text-moss" />
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
