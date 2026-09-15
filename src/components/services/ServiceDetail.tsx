"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";

import { services, type Service } from "@/data/services";
import { Button } from "@/components/ui/Button";
import { ServiceIllustration } from "@/components/services/ServiceIllustration";
import { cn } from "@/lib/utils";

function DetailPanel({ service }: { service: Service }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={service.id}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col gap-10"
      >
        <div>
          <div className="flex items-center gap-4">
            <span className="text-base font-bold tracking-widest text-moss">{service.index}</span>
            <h2 className="text-3xl font-bold tracking-tight text-forest sm:text-4xl">
              {service.name}
            </h2>
          </div>
          <p className="mt-5 max-w-2xl text-[15.5px] leading-relaxed text-muted">
            {service.overview}
          </p>
        </div>

        <div className="border border-line bg-white p-1.5">
          <div className="min-h-[220px]">
            <ServiceIllustration service={service} />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <h3 className="border-b border-line pb-3 text-[13px] font-bold uppercase tracking-widest text-forest">
              Masalah yang diselesaikan
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {service.problems.map((problem) => (
                <li key={problem} className="flex items-start gap-3 text-[14px] leading-relaxed text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-moss" />
                  {problem}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="border-b border-line pb-3 text-[13px] font-bold uppercase tracking-widest text-forest">
              Yang termasuk
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {service.includes.map((item) => (
                <li key={item} className="flex items-center gap-3 text-[14px] leading-relaxed text-muted">
                  <Check className="h-4 w-4 shrink-0 text-moss" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <h3 className="border-b border-line pb-3 text-[13px] font-bold uppercase tracking-widest text-forest">
              Proses kami
            </h3>
            <ol className="mt-4 flex flex-col">
              {service.process.map((step, index) => (
                <li key={step} className="flex items-start gap-3 border-b border-line py-2.5 text-[14px] leading-relaxed text-muted last:border-b-0">
                  <span className="text-xs font-bold text-sage">0{index + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="border-b border-line pb-3 text-[13px] font-bold uppercase tracking-widest text-forest">
              Hasil Pekerjaan
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {service.deliverables.map((item) => (
                <li key={item} className="flex items-center gap-3 text-[14px] leading-relaxed text-muted">
                  <Check className="h-4 w-4 shrink-0 text-moss" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-l-2 border-moss bg-white px-6 py-5">
          <p className="text-[13px] font-bold uppercase tracking-widest text-muted">Hasil yang diharapkan</p>
          <p className="mt-2 text-[15px] font-semibold leading-relaxed text-forest">
            {service.outcome}
          </p>
        </div>

        <div>
          <Button href="/packages" variant="primary" arrow>
            Lihat Paket yang Sesuai
          </Button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export function ServiceDetailExplorer() {
  const [activeId, setActiveId] = useState<Service["id"]>("design");
  const active = services.find((s) => s.id === activeId) ?? services[0];

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && services.some((s) => s.id === hash)) {
      setActiveId(hash as Service["id"]);
    }
  }, []);

  function select(serviceId: Service["id"]) {
    setActiveId(serviceId);
    window.history.replaceState(null, "", `#${serviceId}`);
  }

  return (
    <section>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-4">
          <div className="flex flex-col gap-3 lg:sticky lg:top-32">
            <p className="label mb-2">Pilih layanan</p>
            {services.map((service) => {
              const isActive = service.id === activeId;
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => select(service.id)}
                  aria-pressed={isActive}
                  className={cn(
                    "group flex items-center gap-4 border border-line px-5 py-4 text-left transition-all duration-300",
                    isActive ? "border-forest bg-forest" : "bg-white hover:border-forest/40"
                  )}
                >
                  <span
                    className={cn(
                      "text-sm font-bold tracking-widest",
                      isActive ? "text-sage" : "text-moss"
                    )}
                  >
                    {service.index}
                  </span>
                  <span
                    className={cn(
                      "text-lg font-bold tracking-tight transition-colors",
                      isActive ? "text-ivory" : "text-forest"
                    )}
                  >
                    {service.name}
                  </span>
                  <span
                    className={cn(
                      "ml-auto h-1.5 w-1.5 rounded-full transition-colors",
                      isActive ? "bg-sage" : "bg-line group-hover:bg-moss"
                    )}
                  />
                </button>
              );
            })}
            <div className="mt-4 hidden border border-line bg-ivory p-5 lg:block">
              <p className="text-[12.5px] leading-relaxed text-muted">
                Tidak bisa menentukan layanan yang dibutuhkan? Mulailah dari percakapan — identifikasi
                kebutuhan bersama-sama.
              </p>
              <Button href="/contact" variant="ghost" className="mt-3 px-0">
                Mulai Percakapan
              </Button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8">
          <DetailPanel service={active} />
        </div>
      </div>
    </section>
  );
}