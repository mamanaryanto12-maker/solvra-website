import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { notFound } from "next/navigation";

import { getProject, getAdjacentProject, projects } from "@/data/projects";
import { ProjectMock } from "@/components/ui/ProjectMock";
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
    title: `${project.title} — ${project.industry}`,
    description: project.description,
    alternates: { canonical: `/work/${project.slug}` },
  };
}

type CaseSectionProps = {
  index: string;
  title: string;
  text: string;
  aside?: React.ReactNode;
};

function CaseSection({ index, title, text, aside }: CaseSectionProps) {
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
        {aside && <div className="mt-8">{aside}</div>}
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

  const next = getAdjacentProject(slug);

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
              Kembali ke Proyek
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
              <div className="flex flex-col gap-3 border-l-2 border-sage pl-5">
                <span className="text-[11px] font-bold uppercase tracking-widest text-muted">
                  Status
                </span>
                <span className="text-[15px] font-bold text-forest">{project.kind}</span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.25}>
            <div className="mt-14 overflow-hidden border border-line shadow-raise">
              <ProjectMock
                project={project}
                visual={project.visual}
                className="aspect-[16/9]"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-line py-14 sm:py-20">
        <Container>
          <Reveal>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              {[
                { term: "Industri", value: project.industry },
                { term: "Tipe Proyek", value: project.kind },
                { term: "Layanan", value: project.services.join(" + ") },
                { term: "Pendekatan", value: "Strategy-first" },
              ].map((item) => (
                <div key={item.term} className="border-t border-line pt-5">
                  <dt className="text-[11px] font-bold uppercase tracking-widest text-muted">
                    {item.term}
                  </dt>
                  <dd className="mt-2 text-[15px] font-bold text-forest">{item.value}</dd>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <CaseSection
            index="01"
            title="Tantangan"
            text={project.challenge}
          />
          <CaseSection
            index="02"
            title="Strategy"
            text={project.strategy}
            aside={
              <ul className="flex flex-col gap-2.5">
                {["Fokus pada tujuan utama pengunjung", "Hierarki informasi berbasis keputusan", "Jalur tindakan yang jelas dan langsung"].map((point) => (
                  <li key={point} className="flex items-center gap-3 text-[14px] font-medium text-forest">
                    <Check className="h-4 w-4 text-moss" strokeWidth={2.5} />
                    {point}
                  </li>
                ))}
              </ul>
            }
          />
          <CaseSection
            index="03"
            title="Arahan Desain"
            text={project.design}
          />
          <CaseSection
            index="04"
            title="Development"
            text={project.development}
          />
        </Container>
      </section>

      <section className="border-t border-line bg-white py-16 sm:py-24">
        <Container>
          <Reveal>
            <div className="mb-10 flex items-end justify-between">
              <div>
                <span className="label">05 · Galeri</span>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-forest sm:text-3xl">
                  Preview halaman
                </h2>
              </div>
              <p className="hidden text-[12px] text-muted sm:block">
                Representasi preview konsep — akan diganti dengan screenshot asli.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {Array.from({ length: project.galleryCount }).map((_, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div>
                  <div className="overflow-hidden border border-line shadow-raise">
                    <ProjectMock
                      project={project}
                      variation={i + 1}
                      className={i === 0 ? "aspect-[16/10] md:col-span-2" : "aspect-[4/3]"}
                    />
                  </div>
                  <p className="mt-3 text-[12px] font-semibold uppercase tracking-widest text-muted">
                    Preview 0{i + 1}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="label">06 · Outcome</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-forest sm:text-4xl">
                Hasil yang diutamakan, diukur secara kualitatif.
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-6 text-[16px] leading-relaxed text-muted">{project.outcome}</p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-6 max-w-xl border border-line bg-white px-6 py-5 text-left">
                <p className="text-[13px] leading-relaxed text-muted">
                  Catatan: proyek ini adalah studi konsep. Kami tidak mencantumkan metrik fiktif —
                  angka hasil hanya akan ditampilkan jika berasal dari data klien yang terverifikasi.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {next && (
        <section className="border-t border-line">
          <Link
            href={`/work/${next.slug}`}
            className="group block bg-ivory transition-colors duration-500 hover:bg-white"
          >
            <div className="container-x flex flex-col gap-8 py-16 sm:flex-row sm:items-center sm:justify-between sm:py-20">
              <div>
                <span className="label">Proyek Selanjutnya</span>
                <h3 className="mt-4 text-3xl font-extrabold tracking-tight text-forest transition-colors duration-300 group-hover:text-moss sm:text-4xl">
                  {next.title}
                </h3>
                <p className="mt-2 text-[13px] font-semibold uppercase tracking-widest text-muted">
                  {next.industry} · {next.kind}
                </p>
              </div>
              <span className="flex h-14 w-14 shrink-0 items-center justify-center border border-line transition-all duration-300 group-hover:border-forest group-hover:bg-forest">
                <ArrowUpRight className="h-6 w-6 text-forest transition-colors duration-300 group-hover:text-ivory" />
              </span>
            </div>
          </Link>
        </section>
      )}

      <CTASection
        eyebrow="Serupa dengan kebutuhan Anda?"
        headline="Mari rancang website yang tepat untuk bisnis Anda."
        text="Mulai dari percakapan singkat — kami akan membantu mengidentifikasi kebutuhan dan pendekatan yang paling sesuai."
        primaryLabel="Mulai Proyek Anda"
        primaryHref="/contact"
        secondaryLabel="Lihat Proyek Lain"
        secondaryHref="/work"
      />
    </>
  );
}