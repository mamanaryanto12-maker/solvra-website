import type { Metadata } from "next";

import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Ketentuan Layanan",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Legal"
        title="Ketentuan Layanan"
        description="Syarat dan ketentuan penggunaan layanan SOLVRA."
      />
      <section className="py-16 sm:py-24">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-measure">
              <p className="text-lg font-bold text-forest">Halaman ini sedang disiapkan.</p>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                Ketentuan layanan lengkap akan tersedia di halaman ini setelah proses finalisasi.
                Jika Anda memiliki pertanyaan terkait ketentuan layanan, silakan hubungi kami
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