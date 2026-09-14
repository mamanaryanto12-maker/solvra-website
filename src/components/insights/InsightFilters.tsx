"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import { articles, articleCategories } from "@/data/articles";
import { ArticleCard } from "@/components/insights/ArticleCard";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

type ChipProps = {
  label: string;
  active: boolean;
  onClick: () => void;
};

function Chip({ label, active, onClick }: ChipProps) {
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

export function InsightFilters() {
  const [category, setCategory] = useState<string>("Semua");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return articles.filter((a) => {
      const inCat = category === "Semua" || a.category === category;
      const inSearch = !q || a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q);
      return inCat && inSearch;
    });
  }, [category, search]);

  const [featuredArticle, ...gridArticles] = filtered;

  return (
    <section className="py-16 sm:py-24">
      <Container>
        {filtered.length > 0 && featuredArticle && (
          <Reveal>
            <Link
              href={`/insights/${featuredArticle.slug}`}
              className="group mb-14 flex flex-col gap-10 border-b border-line pb-14 sm:flex-row sm:items-center sm:gap-14 lg:items-start"
            >
              <div className="flex h-48 flex-1 items-center border border-line bg-forest p-8 sm:h-64 lg:h-80">
                <div className="flex flex-col gap-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-sage">
                    {featuredArticle.category}
                  </span>
                  <span className="text-xl font-extrabold leading-[1.1] tracking-tight text-ivory sm:text-2xl">
                    {featuredArticle.title}
                  </span>
                  <span className="mt-4 h-1 w-10 bg-sage" />
                </div>
              </div>
              <div className="flex max-w-md flex-1 flex-col gap-4">
                <span className="text-[11px] font-bold uppercase tracking-widest text-moss">
                  Artikel Unggulan
                </span>
                <h2 className="text-2xl font-bold tracking-tight text-forest transition-colors duration-300 group-hover:text-moss sm:text-3xl">
                  {featuredArticle.title}
                </h2>
                <p className="text-[15px] leading-relaxed text-muted">{featuredArticle.excerpt}</p>
                <div className="flex items-center gap-4 pt-2 text-[12px] font-medium text-muted/80">
                  <span>{featuredArticle.publishedAt}</span>
                  <span className="h-1 w-1 rounded-full bg-sage" />
                  <span>{featuredArticle.readingTime}</span>
                </div>
              </div>
            </Link>
          </Reveal>
        )}

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-2 text-[11px] font-bold uppercase tracking-widest text-muted">
                Kategori
              </span>
              <Chip
                label="Semua"
                active={category === "Semua"}
                onClick={() => setCategory("Semua")}
              />
              {articleCategories.map((cat) => (
                <Chip
                  key={cat}
                  label={cat}
                  active={category === cat}
                  onClick={() => setCategory(cat)}
                />
              ))}
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Cari artikel..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="input-base max-w-xs pl-4"
                aria-label="Cari artikel"
              />
            </div>
          </div>

          <div className="border-t border-line pt-5">
            <p className="text-[13px] font-medium text-muted">
              {filtered.length} artikel ditemukan
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {gridArticles.map((article, index) => (
            <Reveal key={article.id} delay={index * 0.04}>
              <ArticleCard article={article} />
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="border border-line bg-white py-24 text-center">
            <p className="text-lg font-bold text-forest">Tidak ada artikel yang cocok.</p>
            <p className="mt-2 text-[14px] text-muted">Coba dengan kata kunci atau kategori lain.</p>
          </div>
        )}
      </Container>
    </section>
  );
}