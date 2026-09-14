import type { Metadata } from "next";

import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Legal"
        title="Kebijakan Privasi"
        description="Informasi tentang bagaimana SOLVRA mengumpulkan, menggunakan, dan melindungi data Anda."
      />
      <section className="py-16 sm:py-24">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-measure">
              <p className="text-lg font-bold text-forest">Halaman ini sedang disiapkan.</p>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                Kebijakan privasi lengkap akan tersedia di halaman ini setelah disetujui oleh tim
                hukum. Jika Anda memiliki pertanyaan terkait privasi data, silakan hubungi kami
                melalui email.
              </p>
              <p className="mt-3 text-[15px] text-muted/70">
                Status: draft
              </p>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}