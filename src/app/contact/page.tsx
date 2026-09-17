import type { Metadata } from "next";

import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Kontak: Mulai Proyek Anda",
  description:
    "Ceritakan tentang bisnis dan kebutuhan website Anda. Kami akan membantu menentukan pendekatan yang paling sesuai, tanpa komitmen.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        atmosphere="contact"
        eyebrow="Kontak"
        title="Mari membangun sesuatu yang berarti."
        description="Ceritakan ke mana arah bisnis Anda. Kami akan membantu membangun pengalaman digital yang membawa Anda ke sana."
        meta={["Mulai percakapan", "Tanpa komitmen", "Kami bantu tentukan arah"]}
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <h2 className="text-2xl font-bold tracking-tight text-forest sm:text-3xl">
                  Kirim pengajuan proyek
                </h2>
                <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-muted">
                  Formulir ini membantu kami memahami kebutuhan Anda sebelum percakapan pertama.
                  Isi sesingkat atau sejelas yang Anda inginkan.
                </p>
              </Reveal>
              <Reveal delay={0.06}>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={0.08}>
                <div className="border border-line bg-forest p-8 text-ivory sm:p-10 lg:sticky lg:top-32">
                  <span className="label-light">Informasi Kontak</span>
                  <h3 className="mt-4 text-xl font-bold tracking-tight text-ivory sm:text-2xl">
                    Siap untuk percakapan?
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-ivory/65">
                    Kami tidak meminta komitmen dari percakapan awal. Mulailah dari pertanyaan sederhana,
                    kami akan membantu menentukan arah yang tepat.
                  </p>

                  <div className="mt-10 flex flex-col gap-5 border-t border-ivory/15 pt-8">
                    <div>
                      <p className="label-light">Email</p>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="mt-1.5 block text-[15px] font-semibold text-ivory transition-colors hover:text-sage"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                    {!siteConfig.contact.whatsappPlaceholder && siteConfig.contact.whatsapp && (
                      <div>
                        <p className="label-light">WhatsApp</p>
                        <a
                          href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1.5 block text-[15px] font-semibold text-ivory transition-colors hover:text-sage"
                        >
                          {siteConfig.contact.whatsapp}
                        </a>
                      </div>
                    )}
                    <div>
                      <p className="label-light">Lokasi</p>
                      <p className="mt-1.5 text-[15px] font-semibold text-ivory/80">
                        {siteConfig.contact.location}
                      </p>
                    </div>
                  </div>

                  <div className="mt-10 border-t border-ivory/15 pt-8">
                    <p className="label-light">Ikuti Kami</p>
                    <div className="mt-3 flex flex-wrap gap-5">
                      {siteConfig.socials.map((social) => (
                        <span key={social.name} className="text-[13px] text-ivory/50">
                          {social.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}