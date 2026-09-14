import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

const points = [
  {
    tag: "Kredibilitas",
    title: "Diraih sebelum satu kata dibaca",
    text: "Kerapian dan konsistensi membuat bisnis terlihat terkelola dengan baik — kesan yang terbentuk lebih cepat daripada teks mana pun.",
  },
  {
    tag: "Nilai",
    title: "Disampaikan lewat struktur, bukan basa-basi",
    text: "Hirarki yang jujur membantu calon pelanggan memahami apa yang membuat Anda berbeda — tanpa kalimat pemasaran yang bertele-tele.",
  },
  {
    tag: "Kepercayaan",
    title: "Dibangun dengan transparansi",
    text: "Harga, kontak, dan proses yang jujur mengurangi keraguan sebelum pengunjung mengambil keputusan.",
  },
  {
    tag: "Arah",
    title: "Setiap halaman punya satu tugas",
    text: "Pengunjung tidak perlu menebak langkah berikutnya — setiap halaman memandu dengan jelas.",
  },
  {
    tag: "Pertumbuhan",
    title: "Fondasi yang siap ditanami konten baru",
    text: "Struktur yang baik membuat website mudah ditambah, diukur, dan diperbaiki di kemudian hari.",
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
                <span className="label">Yang Kami Pikirkan</span>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="mt-4 text-3xl font-bold leading-[1.08] tracking-tight text-forest sm:text-4xl lg:text-[2.9rem]">
                  Website bukan brosur daring. Ia tempat orang menilai Anda dalam hitungan detik.
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-5 max-w-md text-[15.5px] leading-relaxed text-muted">
                  Sebagian besar calon pelanggan mengambil keputusan sebelum menghubungi Anda.
                  Lima hal ini kami kerjakan di hampir setiap halaman.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div>
              {points.map((point) => (
                <Reveal key={point.tag}>
                  <div className="grid grid-cols-1 gap-3 border-t border-line py-7 last:border-b sm:grid-cols-[9rem_1fr] sm:gap-8">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-moss sm:pt-1.5">
                      {point.tag}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold tracking-tight text-forest sm:text-xl">
                        {point.title}
                      </h3>
                      <p className="mt-1.5 max-w-lg text-[14.5px] leading-relaxed text-muted">
                        {point.text}
                      </p>
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