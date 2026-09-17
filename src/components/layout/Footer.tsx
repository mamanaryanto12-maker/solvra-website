import Link from "next/link";

import { siteConfig } from "@/data/siteConfig";
import { Logo } from "@/components/ui/Logo";

const serviceLinks = [
  { label: "Design", href: "/services#design" },
  { label: "Development", href: "/services#development" },
  { label: "Digital Experience", href: "/services#digital-experience" },
  { label: "Paket Website", href: "/packages" },
];

const exploreLinks = [
  { label: "Proyek", href: "/work" },
  { label: "Insights", href: "/insights" },
  { label: "Tentang SOLVRA", href: "/about" },
  { label: "Kontak", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-line bg-forest text-ivory">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #0e1a3d 0%, #111f48 42%, #0c1633 78%, #0a1126 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(1000px 620px at 82% -6%, rgba(46,111,242,0.22) 0%, transparent 62%), radial-gradient(760px 480px at -6% 112%, rgba(22,42,92,0.9) 0%, transparent 64%), radial-gradient(1100px 520px at 50% 118%, rgba(7,12,30,0.85) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(247,247,245,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(247,247,245,0.035) 1px, transparent 1px)",
            backgroundSize: "110px 110px",
          }}
        />
        <div className="noise absolute inset-0" />
      </div>
      <div className="container-x grid grid-cols-1 gap-14 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:py-20">
        <div className="flex flex-col gap-6 lg:col-span-5">
          <Logo tone="dark" size="md" />
          <p className="text-[15px] leading-relaxed text-ivory/65">
            {siteConfig.tagline}
          </p>
          <div className="flex flex-wrap items-center gap-5 pt-2">
            {siteConfig.socials.map((social) => (
              <span
                key={social.name}
                title={`${social.name}, segera tersedia`}
                className="text-[13px] font-medium text-ivory/50 transition-colors duration-200 hover:text-ivory"
              >
                {social.name}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <p className="label-light mb-6">Layanan</p>
          <ul className="flex flex-col gap-3.5">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="link-underline text-[14px] font-medium text-ivory/70 hover:text-ivory"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <p className="label-light mb-6">Jelajah</p>
          <ul className="flex flex-col gap-3.5">
            {exploreLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="link-underline text-[14px] font-medium text-ivory/70 hover:text-ivory"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="label-light mb-6">Kontak</p>
          <div className="flex flex-col gap-3.5 text-[14px] text-ivory/70">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="link-underline w-fit font-medium hover:text-ivory"
            >
              {siteConfig.contact.email}
            </a>
            <span className="text-ivory/40">{siteConfig.contact.location}</span>
          </div>
          <a href="#top" className="mt-8 inline-flex items-center gap-2 text-[13px] font-semibold text-sage hover:text-ivory">
            Kembali ke atas
            <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container-x flex flex-col gap-3 py-6 text-[12.5px] text-ivory/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Seluruh hak cipta dilindungi.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="link-underline hover:text-ivory">
              Kebijakan Privasi
            </Link>
            <Link href="/terms" className="link-underline hover:text-ivory">
              Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}