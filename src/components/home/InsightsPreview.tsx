import { articles } from "@/data/articles";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { ArticleCard } from "@/components/insights/ArticleCard";

export function InsightsPreview() {
  const featured = articles.filter((a) => a.featured).slice(0, 2);
  const extra = articles.find((a) => !a.featured);

  const shown = [...featured];
  if (extra && !shown.some((a) => a.id === extra.id)) shown.push(extra);

  if (shown.length === 0) return null;

  return (
    <section className="border-t border-line bg-white py-20 sm:py-28">
      <Container>
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <span className="label">Pemikiran & Catatan</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-forest sm:text-4xl">
              Insights
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <Button href="/insights" variant="outline" arrow className="shrink-0">
              Lihat Semua Artikel
            </Button>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((article, index) => (
            <Reveal key={article.id} delay={index * 0.06} className={index === 0 ? "md:row-span-1" : ""}>
              <ArticleCard article={article} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}