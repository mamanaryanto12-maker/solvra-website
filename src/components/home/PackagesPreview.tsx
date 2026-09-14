import { packages } from "@/data/packages";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

export function PackagesPreview() {
  return (
    <section className="border-t border-line py-20 sm:py-28">
      <Container>
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <span className="label">Harga yang Jelas</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-forest sm:text-4xl lg:text-[2.75rem]">
              Pilihan Paket Website
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <Button href="/packages" variant="outline" arrow className="shrink-0">
              Lihat Semua Paket
            </Button>
          </Reveal>
        </div>

        <div className="flex flex-col">
          {packages.map((pkg, index) => (
            <Reveal key={pkg.id} delay={index * 0.04}>
              <div
                className={cn(
                  "group relative grid grid-cols-1 gap-3 overflow-hidden border border-line px-5 py-7 transition-all duration-300 sm:grid-cols-[1fr_auto] sm:items-center sm:px-7",
                  "hover:-translate-y-0.5 hover:shadow-raise",
                  index > 0 && "-mt-px",
                  pkg.featured && "bg-forest text-ivory"
                )}
              >
                {pkg.featured && (
                  <span className="absolute right-5 top-4 h-2 w-2 rounded-full bg-sage" />
                )}
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={cn(
                        "text-sm font-bold tracking-widest",
                        pkg.featured ? "text-sage" : "text-moss"
                      )}
                    >
                      {pkg.number.replace("Paket ", "")}
                    </span>
                    <h3
                      className={cn(
                        "text-2xl font-bold tracking-tight",
                        pkg.featured ? "text-ivory" : "text-forest"
                      )}
                    >
                      {pkg.name}
                    </h3>
                    {pkg.badge && (
                      <span className="border border-moss/40 bg-moss/10 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-widest text-moss">
                        {pkg.badge}
                      </span>
                    )}
                  </div>
                  <p
                    className={cn(
                      "mt-2 max-w-md text-[14px] leading-relaxed",
                      pkg.featured ? "text-ivory/60" : "text-muted"
                    )}
                  >
                    {pkg.tagline}
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:items-end">
                  <span
                    className={cn(
                      "text-[15px] font-bold tracking-tight",
                      pkg.featured ? "text-ivory" : "text-forest"
                    )}
                  >
                    {pkg.price}
                  </span>
                  <span
                    className={cn(
                      "text-[12px]",
                      pkg.featured ? "text-sage" : "text-muted"
                    )}
                  >
                    Harga mulai dari · disesuaikan dengan kebutuhan
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}