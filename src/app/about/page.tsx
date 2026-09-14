import type { Metadata } from "next";

import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { Reveal } from "@/components/motion/Reveal";
import { CTASection } from "@/components/cta/CTASection";
import { Marquee } from "@/components/ui/Marquee";

export const metadata: Metadata = {
  title: "Tentang SOLVRA",
  description:
    "SOLVRA adalah Digital Website Studio yang membantu bisnis modern membangun website yang tidak hanya terlihat baik, tetapi bekerja dengan tujuan yang jelas.",
  alternates: { canonical: "/about" },
};

const missionItems = [
  "Membangun pengalaman digital yang dipikirkan dengan matang",
  "Memadukan strategi, desain, dan teknologi dalam satu kesatuan",
  "Menyelesaikan masalah bisnis nyata melalui solusi digital",
  "Membantu bisnis menyampaikan nilainya dengan lebih efektif",
  "Terus menyempurnakan kualitas pengalaman digital",
];

const beliefs = [
  {
    index: "01",
    title: "Mulai dari masalah",
    text: "Kami memulai dari tantangan bisnis, bukan dari tren atau preferensi visual. Solusi dirancang untuk menjawab masalah, bukan menciptakannya.",
  },
  {
    index: "02",
    title: "Desain adalah bahasa",
    text: "Setiap pilihan tipografi, warna, dan komposisi adalah cara berbicara dengan pengunjung. Kami memilihnya agar pesan sampai dengan jernih.",
  },
  {
    index: "03",
    title: "Teknik tanpa kompromi",
    text: "Website yang baik juga harus cepat, aman, dan mudah dirawat. Fondasi teknis yang solid sama pentingnya dengan tampilan yang premium.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        atmosphere="studio"
        eyebrow="Tentang SOLVRA"
        title="Kami membangun pengalaman digital yang bermakna."
        description="SOLVRA adalah Digital Website Studio yang membantu bisnis modern membangun website yang tidak hanya terlihat baik, tetapi bekerja dengan tujuan yang jelas."
        meta={["Strategy", "Design", "Development", "Digital Experience"]}
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <span className="label">Siapa Kami</span>
              </Reveal>
              <Reveal delay={0.06}>
                <p className="mt-6 text-2xl font-bold leading-snug tracking-tight text-forest sm:text-3xl">
                  Kami membangun website sebagai alat bisnis — bukan sekadar tampilan.
                </p>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="prose-solvra mt-8 space-y-5">
                  <p>
                    SOLVRA adalah Digital Website Studio yang membantu bisnis modern membangun
                    website yang tidak hanya terlihat baik, tetapi bekerja dengan tujuan yang
                    jelas.
                  </p>
                  <p>
                    Kami menggabungkan strategy, design, development, dan digital experience untuk
                    menciptakan website yang memperkuat brand, membangun kepercayaan, dan
                    mendukung pertumbuhan bisnis.
                  </p>
                  <p>
                    Setiap proyek kami mulai dari pertanyaan yang sama: apa yang ingin dicapai oleh
                    bisnis ini? Dari sana, kami membangun struktur, desain, dan teknologi yang
                    mengarah ke sana — dengan cara yang tenang, presisi, dan manusiawi.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={0.1}>
                <div className="border border-line bg-white p-8">
                  <span className="label">Visi Kami</span>
                  <p className="mt-5 text-lg font-bold leading-relaxed tracking-tight text-forest sm:text-xl">
                    Menjadi partner digital yang membantu bisnis modern membangun fondasi digital
                    yang kuat, relevan, dan berkelanjutan.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.16}>
                <div className="mt-6 border border-line bg-forest p-8 text-ivory">
                  <span className="label-light">Misi Kami</span>
                  <ul className="mt-5 flex flex-col gap-3.5">
                    {missionItems.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[14.5px] leading-relaxed text-ivory/75">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sage" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <Marquee
        items={[
          "Strategy", "Design", "Development", "Digital Experience",
          "Menyelesaikan Masalah", "Membangun Kepercayaan", "Tumbuh Lebih Cepat",
        ]}
        tone="dark"
      />

      <section className="bg-forest py-20 text-ivory sm:py-28">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <span className="label-light">Filosofi Brand</span>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-7 text-3xl font-extrabold leading-[1.12] tracking-tight text-ivory sm:text-5xl">
                &ldquo;Teknologi seharusnya menyelesaikan masalah,
                <br className="hidden sm:block" /> bukan menciptakannya.&rdquo;
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mx-auto mt-8 max-w-xl text-[15.5px] leading-relaxed text-ivory/60">
                Inilah dasar dari setiap keputusan kami. Teknologi hadir untuk mempermudah — bukan
                menambah kerumitan. Prinsip ini berlaku pada arsitektur konten, pilihan teknologi,
                hingga cara kami berkomunikasi.
              </p>
            </Reveal>
          </div>
        </Container>
        <div className="container-x mt-20">
          <div className="border-t border-ivory/10">
            {beliefs.map((belief) => (
              <Reveal key={belief.index}>
                <div className="grid grid-cols-[3.5rem_1fr] gap-4 border-t border-ivory/10 py-8 first:border-t-0 sm:grid-cols-[6rem_1fr_1fr] sm:gap-8">
                  <span className="text-sm font-bold tracking-widest text-sage">{belief.index}</span>
                  <h3 className="text-xl font-bold tracking-tight text-ivory">{belief.title}</h3>
                  <p className="text-[14.5px] leading-relaxed text-ivory/60">{belief.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Kerja Sama"
        headline="Mari kita bangun website yang bekerja untuk bisnis Anda."
        text="Ceritakan tentang bisnis Anda, dan kami akan membantu menemukan pendekatan digital yang tepat."
        primaryLabel="Bekerja Sama dengan SOLVRA"
        primaryHref="/contact"
        secondaryLabel="Lihat Proyek Kami"
        secondaryHref="/work"
      />
    </>
  );
}