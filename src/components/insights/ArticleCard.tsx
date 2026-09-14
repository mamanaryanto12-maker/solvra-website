import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Article } from "@/data/articles";
import { cn } from "@/lib/utils";

type ArticleCardProps = {
  article: Article;
  className?: string;
};

export function ArticleCard({ article, className }: ArticleCardProps) {
  return (
    <Link
      href={`/insights/${article.slug}`}
      className={cn("group flex flex-col justify-between gap-6 border-t border-line pt-6", className)}
      aria-label={`Baca artikel: ${article.title}`}
    >
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[11px] font-bold uppercase tracking-widest text-moss">
            {article.category}
          </span>
          {article.status === "draft" && (
            <span className="border border-line px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-widest text-muted">
              Draf
            </span>
          )}
        </div>
        <h3 className="mt-3 max-w-md text-xl font-bold leading-snug tracking-tight text-forest transition-colors duration-200 group-hover:text-moss sm:text-2xl">
          {article.title}
        </h3>
        <p className="mt-3 max-w-md text-[14px] leading-relaxed text-muted">{article.excerpt}</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-[12px] font-medium text-muted/80">
          {article.publishedAt} · {article.readingTime}
        </p>
        <ArrowUpRight className="h-5 w-5 text-moss transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
}