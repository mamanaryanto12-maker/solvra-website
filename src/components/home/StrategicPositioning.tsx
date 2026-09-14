import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

const points = [
  {
    index: "01",
    title: "Membangun kredibilitas",
    text: "Website yang rapi dan profesional membuat bisnis Anda terlihat lebih dipercaya sejak pandangan pertama.",
  },
  {
    index: "02",
    title: "Menyampaikan nilai",
    text: "Struktur dan bahasa visual yang jelas membantu calon pelanggan memahami apa yang membuat bisnis Anda berbeda.",
  },
  {
    index: "03",
    title: "Menciptakan kepercayaan",
    text: "Informasi yang transparan dan alur yang jujur mengurangi keraguan sebelum pengunjung mengambil keputusan.",
  },
  {
    index: "04",
    title: "Memandu pengunjung",
    text: "Setiap halaman dirancang agar pengunjung tahu apa yang bisa dilakukan dan ke mana harus melangkah.",
  },
  {
    index: "05",
    title: "Mendukung pertumbuhan",
    text: "Fondasi digital yang baik siap tumbuh bersama bisnis — dari konten baru hingga integrasi di kemudian hari.",
  },
];

export function StrategicPositioning() {
  return (
    <section className="border-t border-line bg-white py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <span className="label">Mengapa Berpikir Strategis</span>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="mt-4 text-3xl font-bold leading-[1.08] tracking-tight text-forest sm:text-4xl lg:text-[2.9rem]">
                  Website Anda seharusnya lebih dari sekadar tampil baik.
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-5 max-w-md text-[15.5px] leading-relaxed text-muted">
                  Website bukan sekadar brosur daring. Website adalah tempat bisnis Anda dipahami,
                  dipercaya, dan diingat.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div>
              {points.map((point) => (
                <Reveal key={point.index}>
                  <div className="group grid grid-cols-[3.5rem_1fr] gap-4 border-t border-line py-7 last:border-b sm:grid-cols-[5rem_1fr] sm:gap-6">
                    <span className="text-sm font-bold tracking-widest text-moss">
                      {point.index}
                    </span>
                    <div className="grid gap-1.5 sm:grid-cols-2 sm:gap-8">
                      <h3 className="text-lg font-bold tracking-tight text-forest sm:text-xl">
                        {point.title}
                      </h3>
                      <p className="text-[14.5px] leading-relaxed text-muted">{point.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}