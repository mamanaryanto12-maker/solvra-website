import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

const principles = [
  {
    index: "01",
    title: "Strategi Lebih Dulu",
    text: "Kami tidak sekadar mendesain. Kami membangun website sebagai alat pertumbuhan bisnis.",
  },
  {
    index: "02",
    title: "Performa dari Awal",
    text: "Website yang cepat, responsive, secure, dan dioptimalkan untuk pengalaman terbaik di berbagai perangkat.",
  },
  {
    index: "03",
    title: "Dari Ide Hingga Peluncuran",
    text: "Pendampingan menyeluruh mulai dari discovery, strategy, design, development, hingga launch.",
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
                  Pendekatan yang jernih, dari strategi hingga peluncuran.
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-ivory/60">
                  Tidak ada formula generik. Setiap website dimulai dari pemahaman tentang tujuan
                  bisnis, lalu dirancang dan dibangun dengan presisi.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-7">
            {principles.map((principle) => (
              <Reveal key={principle.index}>
                <div className="grid grid-cols-[3.5rem_1fr] gap-4 border-t border-ivory/10 py-8 last:border-b sm:grid-cols-[5rem_1fr] sm:gap-6">
                  <span className="text-sm font-bold tracking-widest text-sage">
                    {principle.index}
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
                  &ldquo;Teknologi seharusnya menyelesaikan masalah, bukan menciptakannya.&rdquo;
                </p>
                <cite className="mt-3 block not-italic text-[12px] font-semibold uppercase tracking-widest text-sage">
                  Filosofi SOLVRA
                </cite>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}