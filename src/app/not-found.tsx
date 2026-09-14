import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="py-32 sm:py-40">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <span className="text-6xl font-extrabold tracking-tightest text-forest/20">404</span>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-forest sm:text-4xl">
            Halaman tidak ditemukan
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            Sepertinya halaman yang Anda cari sudah dipindahkan atau belum tersedia.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/" variant="primary">
              Kembali ke Beranda
            </Button>
            <Link href="/contact" className="text-[14px] font-semibold text-moss transition-colors hover:text-forest">
              Hubungi Kami
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}