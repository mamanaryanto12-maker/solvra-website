import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";

import { getArticle, getRelatedArticles } from "@/data/articles";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { ArticleCard } from "@/components/insights/ArticleCard";
import { CTASection } from "@/components/cta/CTASection";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return { title: "Artikel tidak ditemukan" };
  }

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/insights/${article.slug}` },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  const related = getRelatedArticles(slug);

  return (
    <>
      <section className="border-b border-line pb-14 pt-32 sm:pb-20 sm:pt-40">
        <Container>
          <Reveal>
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-muted transition-colors hover:text-forest"
            >
              <ArrowLeft className="h-4 w-4" />
              Kembali ke Insights
            </Link>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-10">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-bold uppercase tracking-widest text-moss">
                  {article.category}
                </span>
                {article.status === "draft" && (
                  <span className="border border-line px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-muted">
                    Draf
                  </span>
                )}
              </div>
              <Reveal delay={0.05}>
                <h1 className="mt-5 text-4xl font-extrabold leading-[1.03] tracking-tightest text-forest sm:text-5xl">
                  {article.title}
                </h1>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line pt-6 text-[13px] font-medium text-muted">
              <span>{article.publishedAt}</span>
              <span className="h-1 w-1 rounded-full bg-sage" />
              <span>{article.readingTime}</span>
              <span className="h-1 w-1 rounded-full bg-sage" />
              <span>Oleh {article.author}</span>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-1" />
            <article className="max-w-measure lg:col-span-10 lg:col-start-2">
              {article.content.map((block, index) => {
                switch (block.type) {
                  case "p":
                    return (
                      <Reveal key={index} delay={index * 0.02}>
                        <p className="text-[15.5px] leading-[1.9] text-muted sm:text-base">
                          {block.text}
                        </p>
                      </Reveal>
                    );
                  case "h2":
                    return (
                      <Reveal key={index} delay={index * 0.02}>
                        <h2 className="mt-12 text-2xl font-bold leading-snug tracking-tight text-forest sm:text-3xl">
                          {block.text}
                        </h2>
                      </Reveal>
                    );
                  case "ul":
                    return (
                      <Reveal key={index} delay={index * 0.02}>
                        <ul className="mt-4 flex flex-col gap-3.5">
                          {block.items.map((item) => (
                            <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-muted">
                              <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-moss" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </Reveal>
                    );
                  default:
                    return null;
                }
              })}

              <Reveal delay={0.1}>
                <div className="mt-14 border-t border-line pt-8">
                  <p className="text-[12px] font-semibold uppercase tracking-widest text-muted">
                    Catatan editorial
                  </p>
                  <p className="mt-2 max-w-xl text-[13px] leading-relaxed text-muted/70">
                    Artikel ini merupakan konten draf atau demo. Konten akan diperbarui dengan
                    informasi yang lebih lengkap setelah disetujui.
                  </p>
                </div>
              </Reveal>
            </article>
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="border-t border-line bg-white py-20 sm:py-28">
          <Container>
            <SectionHeadingInline eyebrow="Artikel Terkait" />
            <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <ArticleCard key={item.id} article={item} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTASection
        headline="Diskusikan topik ini dengan kami."
        text="Hubungi kami untuk percakapan ringkas tentang strategi web, digital experience, atau kebutuhan website bisnis Anda."
        primaryLabel="Hubungi SOLVRA"
        primaryHref="/contact"
      />
    </>
  );
}

function SectionHeadingInline({ eyebrow }: { eyebrow: string }) {
  return <span className="label">{eyebrow}</span>;
}