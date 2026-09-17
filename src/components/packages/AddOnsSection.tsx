import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { addOns } from "@/data/packages";

export function AddOnsSection() {
  return (
    <section className="border-b border-line py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Fitur Tambahan"
          title="Butuh fitur tambahan?"
          description="Tidak semua kebutuhan harus masuk ke dalam satu paket. Tambahkan fitur sesuai kebutuhan bisnis Anda. Harga setiap fitur tercantum di bawah."
        />

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-line bg-line md:grid-cols-2">
          {addOns.map((item, index) => (
            <Reveal key={item.name} delay={(index % 2) * 0.04}>
              <div className="group flex items-center justify-between gap-6 bg-white px-6 py-5 transition-colors duration-300 hover:bg-ivory sm:px-7">
                <span className="text-[15px] font-semibold tracking-tight text-forest">{item.name}</span>
                <span className="text-[13px] font-bold text-moss">{item.price}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-6 text-[13px] leading-relaxed text-muted">
            Perlu fitur yang tidak tercantum? Ceritakan kebutuhan Anda, banyak fitur dapat disesuaikan
            dengan paket yang dipilih.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}