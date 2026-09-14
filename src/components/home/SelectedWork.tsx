import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectCard } from "@/components/work/ProjectCard";

export function SelectedWork() {
  const cards = projects.filter((p) => p.status === "concept");

  if (cards.length === 0) return null;

  return (
    <section className="border-t border-line py-20 sm:py-28">
      <Container>
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <span className="label">Bukti Karya</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-forest sm:text-4xl lg:text-[2.75rem]">
              Karya Terpilih
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="flex items-center gap-4">
              <p className="max-w-xs text-[13.5px] leading-relaxed text-muted">
                Proyek berikut adalah studi konsep internal untuk enam industri — contoh
                pendekatan dan kualitas desain yang kami kerjakan.
              </p>
              <Button href="/work" variant="outline" arrow className="shrink-0">
                Lihat Semua Karya
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div
            className="-mx-5 snap-x snap-mandatory overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12"
            style={{ scrollbarWidth: "thin" }}
          >
            <div className="flex gap-6">
              {cards.map((project, index) => (
                <div
                  key={project.id}
                  className="w-[68%] shrink-0 snap-start sm:w-[46%] lg:w-[calc((100%-3.5rem)/3)]"
                >
                  <ProjectCard
                    project={project}
                    visualClassName="aspect-[4/5]"
                    noHover
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}