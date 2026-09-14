"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { projects, projectCategories, projectKinds, type Project } from "@/data/projects";
import { ProjectCard } from "@/components/work/ProjectCard";
import { cn } from "@/lib/utils";

type FilterChipProps = {
  label: string;
  active: boolean;
  onClick: () => void;
};

function FilterChip({ label, active, onClick }: FilterChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "border px-4 py-2 text-[12.5px] font-semibold transition-all duration-300",
        active
          ? "border-forest bg-forest text-ivory"
          : "border-line bg-white text-muted hover:border-forest/50 hover:text-forest"
      )}
    >
      {label}
    </button>
  );
}

function WorkItem({ project, index }: { project: Project; index: number }) {
  const isFeatured = project.featured;
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.5, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      className={cn("col-span-1", isFeatured && "md:col-span-2")}
    >
      <ProjectCard
        project={project}
        visualClassName={isFeatured ? "aspect-[16/10]" : "aspect-[4/5]"}
      />
    </motion.div>
  );
}

export function WorkGrid() {
  const [category, setCategory] = useState<string>("Semua");
  const [kind, setKind] = useState<string>("Semua");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const inCategory = category === "Semua" || p.industry === category;
      const inKind = kind === "Semua" || p.kind === kind;
      return inCategory && inKind;
    });
  }, [category, kind]);

  const sorted = useMemo(() => {
    return [...filtered].sort((a, b) => Number(b.featured) - Number(a.featured));
  }, [filtered]);

  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(247,247,245,0.55) 0%, rgba(255,255,255,0) 30%, rgba(255,255,255,0.6) 100%)" }}
        />
        <div className="grid-lines absolute inset-0 opacity-20" />
        <div
          className="absolute bottom-10 left-8 hidden h-40 w-72 lg:block"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(14,26,61,0.06) 1px, transparent 1.4px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>
      <div className="container-x">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-2 text-[11px] font-bold uppercase tracking-widest text-muted">
                Industri
              </span>
              {projectCategories.map((cat) => (
                <FilterChip
                  key={cat}
                  label={cat}
                  active={category === cat}
                  onClick={() => setCategory(cat)}
                />
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-2 text-[11px] font-bold uppercase tracking-widest text-muted">
                Tipe
              </span>
              {projectKinds.map((k) => (
                <FilterChip
                  key={k}
                  label={k}
                  active={kind === k}
                  onClick={() => setKind(k)}
                />
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-line pt-5">
            <p className="text-[13px] font-medium text-muted">
              Menampilkan {sorted.length} dari {projects.length} proyek
            </p>
            <p className="hidden text-[12px] text-muted/70 sm:block">
              Semua karya saat ini adalah studi konsep studio
            </p>
          </div>
        </div>

        <motion.div layout className="mt-8 grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {sorted.map((project, index) => (
              <WorkItem key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {sorted.length === 0 && (
          <div className="border border-line bg-white py-24 text-center">
            <p className="text-lg font-bold text-forest">Belum ada proyek untuk kategori ini.</p>
            <p className="mt-2 text-[14px] text-muted">
              Coba kategori lain — atau mulai proyek Anda sendiri bersama kami.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}