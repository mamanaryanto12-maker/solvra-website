import type { Metadata } from "next";

import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { Reveal } from "@/components/motion/Reveal";
import { CTASection } from "@/components/cta/CTASection";
import { Marquee } from "@/components/ui/Marquee";

export const metadata: Metadata = {
  title: "Tentang SOLVRA",
  description:
    "SOLVRA mulai dari kegelisahan: website bisnis kecil yang dibikin asal jadi, tanpa memikirkan orang yang benar-benar akan membukanya. Sekarang kami fokus di satu hal — website yang jelas alasannya ada.",
  alternates: { canonical: "/about" },
};

const principles = [
  "Ngobrol dulu sebelum desain — kami tidak mulai dari template.",
  "Satu tim yang memegang strategi, desain, sampai kode — bukan lempar-lemparan brief antar vendor.",
  "Kami bilang jujur kalau ide klien kurang pas untuk bisnisnya, bukan asal setuju.",
  "Website selesai bukan berarti hubungan selesai — performanya tetap kami pantau.",
];

const beliefs = [
  {
    index: "01",
    title: "Mulai dari masalah",
    text: "Kami mulai dari tantangan bisnis, bukan dari tren atau preferensi visual. Kalau solusinya tidak menjawab masalah, sebaik apa pun tampilannya — kami tunda dulu.",
  },
  {
    index: "02",
    title: "Desain yang jujur",
    text: "Kalau warna brand Anda biru dan CTA-nya juga biru, orang tidak akan tahu harus klik di mana. Hal sekecil itu yang sering kami betulkan duluan — sebelum bicara soal 'branding'.",
  },
  {
    index: "03",
    title: "Fondasi tanpa kompromi",
    text: "Website yang baik harus cepat, aman, dan mudah dirawat — bukan cuma terlihat premium. Fondasi teknis yang solid menentukan umur website Anda.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        atmosphere="studio"
        eyebrow="Tentang SOLVRA"
        title="Kami mulai karena capek lihat website dibuatkan asal jadi."
        description="Cuma tempel logo dan teks, tanpa mikir siapa yang benar-benar akan membukanya. Sekarang kami fokus di satu hal: bikin website yang jelas alasannya ada — dari struktur sampai baris kalimat terakhir."
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
                  Kami memakai website sebagai alat bisnis — bukan pajangan.
                </p>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="prose-solvra mt-8 space-y-5">
                  <p>
                    SOLVRA mulai dari satu kegelisahan: terlalu banyak website bisnis kecil dibikin
                    asal jadi — logo ditempel, teks disalin dari template, dan tidak ada yang
                    memikirkan orang yang benar-benar akan membukanya.
                  </p>
                  <p>
                    Karena itu kami sengaja membatasi jumlah klien per bulan. Satu tim memegang
                    strategi sampai kode, jadi penjelasan Anda tidak pernah hilang di antara vendor.
                  </p>
                  <p>
                    Dan begitu website tayang, kami tak berhenti di situ. Kalau ada halaman yang
                    tidak bekerja, kami perbaiki — bukan karena janji, tapi karena ini pekerjaan
                    kami.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={0.1}>
                <div className="border border-line bg-white p-8">
                  <span className="label">Visi Kami</span>
                  <p className="mt-5 text-lg font-bold leading-relaxed tracking-tight text-forest sm:text-xl">
                    Menjadi studio yang dipilih karena kejujuran dan kualitas — bukan karena
                    banyaknya proyek yang bisa kami terima dalam sebulan.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.16}>
                <div className="mt-6 border border-line bg-forest p-8 text-ivory">
                  <span className="label-light">Cara Kami Bekerja</span>
                  <p className="mt-4 text-[14.5px] leading-relaxed text-ivory/60">
                    Prinsip ini kami pegang di setiap proyek:
                  </p>
                  <ul className="mt-5 flex flex-col border-l border-ivory/15">
                    {principles.map((item) => (
                      <li
                        key={item}
                        className="border-b border-ivory/10 py-4 last:border-b-0"
                      >
                        <span className="pl-5 text-[14.5px] font-semibold leading-relaxed text-ivory/85">
                          {item}
                        </span>
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
          "Ngobrol Dulu", "Desain Kemudian", "Satu Tim Sampai Kode",
          "Website Punya Alasan", "Dipantau Setelah Live",
        ]}
        tone="dark"
      />

      <section className="bg-forest py-20 text-ivory sm:py-28">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <span className="label-light">Pandangan Kami</span>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-7 text-3xl font-extrabold leading-[1.12] tracking-tight text-ivory sm:text-5xl">
                &ldquo;Website yang bagus itu yang bikin orang lupa mereka sedang pakai website —
                bukan yang bikin mereka kagum sama animasinya.&rdquo;
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mx-auto mt-8 max-w-xl text-[15.5px] leading-relaxed text-ivory/60">
                Ini yang kami sebut halaman yang bekerja: pengunjung paham apa yang Anda tawarkan,
                tahu langkah berikutnya, dan tidak pernah tersesat. Animasi hanyalah pelengkap —
                bukan alasan website itu ada.
              </p>
            </Reveal>
          </div>
        </Container>
        <div className="container-x mt-20">
          <div className="border-t border-ivory/10">
            {beliefs.map((belief) => (
              <Reveal key={belief.index}>
                <div className="grid grid-cols-1 gap-3 border-t border-ivory/10 py-8 first:border-t-0 sm:grid-cols-[10rem_1fr] sm:gap-10">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-sage">
                    {belief.title}
                  </span>
                  <p className="max-w-2xl text-lg font-bold leading-relaxed tracking-tight text-ivory/90">
                    {belief.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Kerja Sama"
        headline="Ceritakan bisnis Anda. Tanpa form panjang."
        text="Mulai dari percakapan singkat — kami akan bantu menentukan apakah website Anda perlu dibangun dari nol, dibenahi, atau sebenarnya sudah cukup."
        primaryLabel="Mulai Percakapan"
        primaryHref="/contact"
        secondaryLabel="Lihat Proyek Kami"
        secondaryHref="/work"
      />
    </>
  );
}