import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { Project } from "@/data/projects";
import { ProjectMock } from "@/components/ui/ProjectMock";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  className?: string;
  visualClassName?: string;
  noHover?: boolean;
};

export function ProjectCard({ project, className, visualClassName, noHover }: ProjectCardProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className={cn("group block", className)}
      aria-label={`Lihat proyek ${project.title}`}
    >
      <div
        className={cn(
          "relative overflow-hidden transition-transform duration-500 ease-out",
          noHover ? "" : "group-hover:-translate-y-1",
          visualClassName
        )}
      >
        <ProjectMock
          project={project}
          visual={project.visual}
          className={cn(
            "transition-transform duration-700 ease-out",
            noHover ? "" : "group-hover:scale-[1.02]"
          )}
        />
        <span className="absolute right-3 top-3 border border-line bg-white/90 px-2 py-1 text-[9px] font-bold uppercase tracking-widest text-forest backdrop-blur-sm">
          {project.kind}
        </span>
      </div>

      <div className="mt-5">
        <p className="text-[11px] font-bold uppercase tracking-widest text-moss">
          {project.industry} · {project.services.join(" + ")}
        </p>
        <h3 className="mt-2 text-lg font-bold tracking-tight text-forest transition-colors duration-200 group-hover:text-moss sm:text-xl">
          {project.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-[13.5px] leading-relaxed text-muted">
          {project.short}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.highlights.map((item) => (
            <li
              key={item}
              className="rounded-full border border-line bg-ivory px-3 py-1 text-[10.5px] font-medium text-forest/80"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-center gap-1.5 text-[13px] font-semibold text-forest">
          <span className="border-b border-moss/0 transition-colors duration-200 group-hover:border-moss/60">
            Lihat studi kasus
          </span>
          <ArrowRight className="h-4 w-4 text-moss transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}