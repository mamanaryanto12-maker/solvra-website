import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";

import { getProject, projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { CTASection } from "@/components/cta/CTASection";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Proyek tidak ditemukan" };
  }

  return {
    title: `${project.title}, ${project.industry}`,
    description: project.description,
    alternates: { canonical: `/work/${project.slug}` },
  };
}

type CaseSectionProps = {
  index: string;
  title: string;
  text: string;
};

function CaseSection({ index, title, text }: CaseSectionProps) {
  return (
    <div className="grid grid-cols-1 gap-6 border-b border-line py-12 last:border-b-0 sm:py-16 lg:grid-cols-12 lg:gap-10">
      <div className="lg:col-span-2">
        <span className="text-sm font-bold tracking-widest text-moss">{index}</span>
      </div>
      <div className="lg:col-span-4">
        <h2 className="text-2xl font-bold tracking-tight text-forest sm:text-3xl">{title}</h2>
      </div>
      <div className="lg:col-span-6">
        <p className="max-w-2xl text-[15.5px] leading-relaxed text-muted">{text}</p>
      </div>
    </div>
  );
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const desktopShots = project.gallery.filter((item) => item.device !== "mobile");
  const mobileShots = project.gallery.filter((item) => item.device === "mobile");

  return (
    <>
      <section className="border-b border-line pb-14 pt-32 sm:pb-20 sm:pt-40">
        <Container>
          <Reveal>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-muted transition-colors hover:text-forest"
            >
              <ArrowLeft className="h-4 w-4" />
              Kembali ke Work
            </Link>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-9">
              <Reveal delay={0.05}>
                <p className="label">{project.heroLabel}</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="mt-5 text-4xl font-extrabold leading-[1.02] tracking-tightest text-forest sm:text-6xl">
                  {project.title}
                </h1>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-muted">
                  {project.description}
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.2} className="lg:col-span-3">
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
            </Reveal>
          </div>

          <Reveal delay={0.25}>
            <div className="relative mt-14 aspect-[16/9] w-full overflow-hidden border border-line bg-white shadow-raise">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                priority
                quality={88}
                sizes="(min-width: 1280px) 1200px, 100vw"
                className="object-cover object-top"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-line py-14 sm:py-20">
        <Container>
          <Reveal>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              {project.facts.map((fact) => (
                <div key={fact.term} className="border-t border-line pt-5">
                  <dt className="text-[11px] font-bold uppercase tracking-widest text-muted">
                    {fact.term}
                  </dt>
                  <dd className="mt-2 text-[15px] font-bold text-forest">{fact.value}</dd>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-line pt-6">
              <span className="mr-1 text-[11px] font-bold uppercase tracking-widest text-muted">
                Sorotan
              </span>
              {project.highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-line bg-ivory px-3 py-1.5 text-[12px] font-medium text-forest/80"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          {project.sections.map((section) => (
            <CaseSection
              key={section.index}
              index={section.index}
              title={section.title}
              text={section.text}
            />
          ))}
        </Container>
      </section>

      <section className="border-t border-line bg-white py-16 sm:py-24">
        <Container>
          <Reveal>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {project.designSystem.map((item) => (
                <div key={item.term} className="border-t-2 border-forest pt-5">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-moss">
                    {item.term}
                  </p>
                  <p className="mt-3 text-[15px] font-semibold leading-relaxed text-forest">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-line py-16 sm:py-24">
        <Container>
          <Reveal>
            <div className="mb-10 flex items-end justify-between">
              <div>
                <span className="label">Galeri</span>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-forest sm:text-3xl">
                  Halaman-halaman situs
                </h2>
              </div>
              <p className="hidden text-[12px] text-muted sm:block">
                Tangkapan layar dari situs yang dibangun.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {desktopShots.map((shot, index) => (
              <Reveal key={shot.src} delay={(index % 2) * 0.06}>
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden border border-line bg-white">
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      fill
                      quality={85}
                      sizes="(min-width: 768px) 560px, 100vw"
                      className="object-cover object-top"
                    />
                  </div>
                  <p className="mt-3 text-[12px] font-semibold uppercase tracking-widest text-muted">
                    {shot.caption}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {mobileShots.length > 0 && (
            <div className="mt-16">
              <Reveal>
                <p className="text-[11px] font-bold uppercase tracking-widest text-muted">
                  Tampilan ponsel
                </p>
              </Reveal>
              <div className="mt-6 flex flex-wrap items-start gap-10">
                {mobileShots.map((shot) => (
                  <Reveal key={shot.src}>
                    <div className="w-full max-w-[280px] rounded-[2.4rem] border border-line bg-forest p-2 shadow-raise">
                      <div className="relative aspect-[390/780] overflow-hidden rounded-[1.9rem]">
                        <Image
                          src={shot.src}
                          alt={shot.alt}
                          fill
                          quality={85}
                          sizes="280px"
                          className="object-cover object-top"
                        />
                      </div>
                    </div>
                    <p className="mt-4 text-[12px] font-semibold uppercase tracking-widest text-muted">
                      {shot.caption}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>

      <section className="border-t border-line bg-ivory py-14 sm:py-20">
        <Container>
          <Reveal>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="label">Situs Asli</span>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-forest sm:text-3xl">
                  Lihat Ruang Antara Studio langsung.
                </h2>
                <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">
                  Seluruh halaman dapat dibuka persis seperti yang dibangun, tanpa mockup dan
                  tanpa rekayasa tampilan.
                </p>
              </div>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 border border-forest bg-forest px-6 py-4 text-[13px] font-bold uppercase tracking-widest text-ivory transition-colors hover:bg-forest-2"
              >
                Buka situs
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </Container>
      </section>

      <CTASection
        eyebrow="Serupa dengan kebutuhan Anda?"
        headline="Mari rancang website yang tepat untuk bisnis Anda."
        text="Mulai dari percakapan singkat, kami akan membantu mengidentifikasi kebutuhan dan pendekatan yang paling sesuai."
        primaryLabel="Mulai Proyek Anda"
        primaryHref="/contact"
        secondaryLabel="Lihat Work"
        secondaryHref="/work"
      />
    </>
  );
}
