import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

const focusPoints = [
  {
    label: "Sekarang",
    title: "Website adalah fokus utama kami.",
    text: "Mulai dari strategi, desain, pengembangan, hingga pengalaman digital — kami fokus melakukan ini dengan sangat baik.",
  },
  {
    label: "Nanti",
    title: "Ekosistem yang lebih luas sedang dipersiapkan.",
    text: "SEO, lead generation, automation, dan solusi AI dapat bergabung kemudian sebagai bagian dari ekosistem SOLVRA yang lebih besar.",
  },
];

export function ScopeSection() {
  return (
    <section className="bg-ivory py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="label">Fokus Kami</span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-4 max-w-sm text-3xl font-bold leading-[1.08] tracking-tight text-forest sm:text-4xl">
                Kami membuat website. Dan kami melakukannya dengan sungguh-sungguh.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted">
                Banyak studio menawarkan segalanya. Kami memilih untuk menjadi sangat baik pada satu
                hal terlebih dahulu: pengalaman website yang strategis dan premium.
              </p>
            </Reveal>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-7">
            {focusPoints.map((point, index) => (
              <Reveal key={point.label} delay={index * 0.08}>
                <div className="border border-line bg-white p-7 sm:p-9">
                  <span
                    className={
                      point.label === "Nanti"
                        ? "text-[11px] font-bold uppercase tracking-widest text-muted"
                        : "text-[11px] font-bold uppercase tracking-widest text-moss"
                    }
                  >
                    {point.label}
                  </span>
                  <h3 className="mt-3 text-xl font-bold tracking-tight text-forest sm:text-2xl">
                    {point.title}
                  </h3>
                  <p className="mt-3 max-w-lg text-[14.5px] leading-relaxed text-muted">
                    {point.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}