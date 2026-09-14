import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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

      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <h3 className="text-lg font-bold tracking-tight text-forest transition-colors duration-200 group-hover:text-moss sm:text-xl">
              {project.title}
            </h3>
          </div>
          <p className="mt-1 text-[12px] font-semibold uppercase tracking-widest text-muted">
            {project.industry} · {project.services.join(" + ")}
          </p>
        </div>
        <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-moss transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
}