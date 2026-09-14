import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectCard } from "@/components/work/ProjectCard";
import { ProjectMock } from "@/components/ui/ProjectMock";
import { cn } from "@/lib/utils";

export function SelectedWork() {
  const featured = projects.filter((p) => p.featured && p.status === "concept").slice(0, 2);
  const others = projects.filter((p) => !p.featured && p.status === "concept");

  if (featured.length === 0) return null;

  return (
    <section className="border-t border-line py-20 sm:py-28">
      <Container>
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <span className="label">Bukti Karya</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-forest sm:text-4xl lg:text-[2.75rem]">
              Dua yang paling kami banggakan.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="flex items-center gap-4">
              <p className="max-w-xs text-[13.5px] leading-relaxed text-muted">
                Semua karya ditampilkan sebagai studi konsep studio — pendekatan dan kualitas
                desain yang kami kerjakan untuk berbagai industri.
              </p>
              <Button href="/work" variant="outline" arrow className="shrink-0">
                Lihat Semua Karya
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col gap-16">
          {featured.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.06}>
              <div
                className={cn(
                  "grid grid-cols-1 items-center gap-8 lg:grid-cols-12",
                  i % 2 === 1 && "lg:[&>*:first-child]:order-2"
                )}
              >
                <div className="lg:col-span-7">
                  <ProjectMock project={project} className="aspect-[16/10] lg:aspect-auto lg:h-full" />
                </div>
                <div className="lg:col-span-5">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-moss">
                    {project.industry} · {project.kind} · {project.services.join(" + ")}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-forest sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <ul className="mt-5 flex flex-col gap-2.5">
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
                  <div className="mt-6">
                    <Link
                      href={`/work/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-forest transition-colors hover:text-moss"
                    >
                      <span className="border-b border-moss/0 transition-colors hover:border-moss/60">
                        Lihat studi kasus
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-moss" />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {others.length > 0 && (
          <div className="mt-20">
            <Reveal>
              <div className="mb-8 flex items-center gap-4">
                <span className="label">Eksplorasi Lainnya</span>
                <span className="h-px flex-1 bg-line" />
              </div>
            </Reveal>
            <div className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {others.slice(0, 6).map((project, index) => (
                <Reveal key={project.id} delay={index * 0.05}>
                  <ProjectCard project={project} visualClassName="aspect-[4/5]" noHover />
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}