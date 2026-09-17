import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

const principles = [
  {
    tag: "Urutan kerja",
    title: "Ide sebelum piksel.",
    text: "Struktur dan tujuan dibangun dulu, desain menyusul. Bukan sebaliknya. Cantik tanpa struktur tidak pernah selesai menjadi website yang bekerja.",
  },
  {
    tag: "Fondasi",
    title: "Cepat itu pilihan, bukan keberuntungan.",
    text: "Next.js, gambar teroptimasi, dan tanpa tumpukan plugin. Website harus tetap ringan bahkan setelah bertahun-tahun berjalan.",
  },
  {
    tag: "Satu tim",
    title: "Dari brief sampai kode, di satu tangan.",
    text: "Kami pegang strategi, desain, dan development dalam satu tim. Yang Anda ceritakan kepada kami, sampai utuh menjadi kode.",
  },
];

export function WhySolvra() {
  return (
    <section className="bg-forest text-ivory">
      <Container className="py-20 sm:py-28">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <span className="label-light">Mengapa SOLVRA</span>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="mt-4 max-w-sm text-3xl font-bold leading-[1.05] tracking-tight text-ivory sm:text-4xl lg:text-[2.75rem]">
                  Kami tidak mulai dari template. Kami mulai dari pertanyaan.
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-ivory/60">
                  Untuk apa website ini, dan siapa yang membukanya? Dua pertanyaan pertama sebelum
                  lembar kerja desain dibuka.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-7">
            {principles.map((principle) => (
              <Reveal key={principle.tag}>
                <div className="grid grid-cols-1 gap-3 border-t border-ivory/10 py-8 last:border-b sm:grid-cols-[10rem_1fr] sm:gap-8">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-sage sm:pt-1.5">
                    {principle.tag}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-ivory sm:text-2xl">
                      {principle.title}
                    </h3>
                    <p className="mt-2.5 max-w-md text-[14.5px] leading-relaxed text-ivory/60">
                      {principle.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.1}>
              <blockquote className="mt-14 max-w-lg">
                <p className="text-2xl font-bold leading-snug tracking-tight text-ivory/90 sm:text-3xl">
                  &ldquo;Klien kami biasa kaget di pertemuan pertama: kami lebih sering bilang
                  &lsquo;cukup&rsquo;, &lsquo;bakal nggak kepake&rsquo;, atau &lsquo;ini bukan
                  masalahnya&rsquo;, dibanding asal setuju.&rdquo;
                </p>
                <cite className="mt-3 block not-italic text-[12px] font-semibold uppercase tracking-widest text-sage">
                  Dari percakapan proyek
                </cite>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}