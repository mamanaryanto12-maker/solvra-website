import { Check, Minus } from "lucide-react";

import { packages, type WebPackage } from "@/data/packages";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

function PackageCard({ pkg, index }: { pkg: WebPackage; index: number }) {
  const dark = !!pkg.featured;

  return (
    <Reveal delay={index * 0.06} className="flex">
      <article
        className={cn(
          "relative flex w-full flex-col border p-7 sm:p-8",
          dark
            ? "border-forest bg-forest text-ivory shadow-raise"
            : "border-line bg-white"
        )}
      >
        {dark && (
          <>
            <span aria-hidden="true" className="absolute right-6 top-6 h-2 w-2 rounded-full bg-sage" />
          </>
        )}

        <header>
          <div className="flex items-start justify-between gap-4">
            <span
              className={cn(
                "text-[11px] font-bold uppercase tracking-widest",
                dark ? "text-sage" : "text-moss"
              )}
            >
              {pkg.number}
            </span>
            {pkg.badge && (
              <span className="border border-moss/40 bg-moss/10 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-widest text-moss">
                {pkg.badge}
              </span>
            )}
          </div>
          <h2
            className={cn(
              "mt-3 text-3xl font-extrabold tracking-tight sm:text-[2.15rem]",
              dark ? "text-ivory" : "text-forest"
            )}
          >
            {pkg.name}
          </h2>
          <p className={cn("mt-3 text-[14.5px] italic leading-relaxed", dark ? "text-ivory/65" : "text-muted")}>
            {pkg.tagline}
          </p>
        </header>

        <div
          className="mt-7 border-t py-6"
          style={{ borderColor: dark ? "rgba(247,247,245,0.16)" : "#E0E3EA" }}
        >
          <p className={cn("text-[12px] font-semibold uppercase tracking-widest", dark ? "text-ivory/50" : "text-muted")}>
            Investasi awal
          </p>
          <p className={cn("mt-1.5 text-[19px] font-bold tracking-tight", dark ? "text-ivory" : "text-forest")}>
            {pkg.price}
          </p>
        </div>

        <p className={cn("text-[13px] leading-relaxed", dark ? "text-ivory/75" : "text-muted")}>
          {pkg.description}
        </p>

        <dl>
          <dt className="sr-only">Yang termasuk dalam paket</dt>
          <dd>
            <ul className="mt-6 flex flex-col gap-3">
              {pkg.includes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check
                    className={cn("mt-0.5 h-4 w-4 shrink-0", dark ? "text-sage" : "text-moss")}
                    strokeWidth={2.5}
                  />
                  <span className={cn("text-[13.5px] leading-relaxed", dark ? "text-ivory/75" : "text-muted")}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </dd>
        </dl>

        {pkg.managed && (
          <div className="mt-6">
            <p className={cn("text-[11px] font-bold uppercase tracking-widest", dark ? "text-sage" : "text-moss")}>
              Dapat dikelola
            </p>
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {pkg.managed.map((item) => (
                <span
                  key={item}
                  className={cn(
                    "border px-2 py-1 text-[11px] font-semibold",
                    dark ? "border-ivory/25 text-ivory/70" : "border-line text-muted"
                  )}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {pkg.cocokUntuk && (
          <p className={cn("mt-6 text-[13px] leading-relaxed", dark ? "text-ivory/60" : "text-muted/85")}>
            <span className={cn("font-semibold", dark ? "text-ivory/80" : "text-forest")}>Cocok untuk: </span>
            {pkg.cocokUntuk}
          </p>
        )}

        {pkg.excludes && (
          <div className="mt-6">
            <p className={cn("text-[11px] font-bold uppercase tracking-widest", dark ? "text-ivory/45" : "text-muted")}>
              Tidak termasuk
            </p>
            <ul className="mt-2.5 flex flex-col gap-2">
              {pkg.excludes.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Minus className={cn("mt-0.5 h-3.5 w-3.5 shrink-0", dark ? "text-ivory/35" : "text-sage")} strokeWidth={2.5} />
                  <span className={cn("text-[12.5px]", dark ? "text-ivory/45" : "text-muted/70")}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-8 flex-1" />
        <div>
          <Button
            href="/contact"
            variant={dark ? "light" : "primary"}
            size="lg"
            arrow
            className="w-full"
          >
            {pkg.cta}
          </Button>
        </div>
      </article>
    </Reveal>
  );
}

export function PricingCards() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
      {packages.map((pkg, index) => (
        <PackageCard key={pkg.id} pkg={pkg} index={index} />
      ))}
    </div>
  );
}

const comparison: { label: string; values: Record<string, string> }[] = [
  {
    label: "Halaman",
    values: {
      starter: "1",
      ready: "Hingga 5",
      cms: "Hingga 7",
      business: "Hingga 10",
      "business-pro": "Struktur kompleks",
      custom: "Disesuaikan",
      "web-app": "Modul & dashboard",
    },
  },
  {
    label: "CMS (kelola konten sendiri)",
    values: {
      starter: "Tidak",
      ready: "Tidak",
      cms: "Ya",
      business: "Ya",
      "business-pro": "Ya",
      custom: "Opsional",
      "web-app": "Ya",
    },
  },
  {
    label: "Desain sesuai brand",
    values: {
      starter: "Dasar",
      ready: "Template",
      cms: "Diarahkan",
      business: "Ya",
      "business-pro": "Custom mendalam",
      custom: "Sepenuhnya custom",
      "web-app": "Produk digital",
    },
  },
  {
    label: "Database & backend custom",
    values: {
      starter: "Tidak",
      ready: "Tidak",
      cms: "Tidak",
      business: "Tidak",
      "business-pro": "Tidak",
      custom: "Ya",
      "web-app": "Ya",
    },
  },
  {
    label: "Revisi",
    values: {
      starter: "1x",
      ready: "1 sampai 2x",
      cms: "Hingga 2x",
      business: "Hingga 3x",
      "business-pro": "Hingga 4x",
      custom: "Disesuaikan",
      "web-app": "Disesuaikan",
    },
  },
  {
    label: "Integrasi pihak ketiga",
    values: {
      starter: "Dasar",
      ready: "Tidak",
      cms: "Tidak",
      business: "Opsional",
      "business-pro": "Ya",
      custom: "Ya",
      "web-app": "Ya",
    },
  },
  {
    label: "Dukungan pasca-launch",
    values: {
      starter: "Minor",
      ready: "Minor",
      cms: "Dasar",
      business: "Dasar",
      "business-pro": "Ya",
      custom: "Ya",
      "web-app": "Ya",
    },
  },
];

export function ComparisonTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[860px] border-collapse text-left">
        <thead>
          <tr>
            <th className="border-b border-line pb-4 pr-6 text-[12px] font-bold uppercase tracking-widest text-muted">
              Perbandingan
            </th>
            {packages.map((col) => (
              <th
                key={col.id}
                scope="col"
                className={cn(
                  "border-b border-line pb-4 text-[13px] font-bold tracking-tight",
                  col.featured ? "text-moss" : "text-forest"
                )}
              >
                {col.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {comparison.map((row) => (
            <tr key={row.label}>
              <th
                scope="row"
                className="border-b border-line py-4 pr-6 text-[13.5px] font-semibold text-muted"
              >
                {row.label}
              </th>
              {packages.map((col) => (
                <td
                  key={col.id}
                  className={cn(
                    "border-b border-line py-4 text-[12.5px] font-semibold",
                    col.featured ? "text-moss" : "text-forest"
                  )}
                >
                  {row.values[col.id]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-6 text-[13px] text-muted">
        Detail lengkap setiap paket tercantum pada kartu di atas. Harga adalah harga mulai dari dan dapat disesuaikan
        dengan ruang lingkup proyek.
      </p>
    </div>
  );
}