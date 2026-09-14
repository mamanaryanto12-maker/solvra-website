"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

import { services, type Service } from "@/data/services";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { ServiceIllustration } from "@/components/services/ServiceIllustration";
import { cn } from "@/lib/utils";

function HudItem({ service, active, onSelect }: { service: Service; active: boolean; onSelect: () => void }) {
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      onMouseEnter={onSelect}
      aria-pressed={active}
      initial={false}
      animate={{ backgroundColor: active ? "#0E1A3D" : "rgba(255,255,255,0)" }}
      transition={{ duration: 0.3 }}
      className={cn(
        "group flex flex-col gap-2 border border-line p-5 text-left transition-colors duration-300 sm:p-6",
        !active && "bg-white hover:border-forest/40"
      )}
    >
      <div className="flex items-center justify-between">
        <span className={cn("text-sm font-bold tracking-widest", active ? "text-sage" : "text-moss")}>
          {service.index}
        </span>
        <span
          className={cn(
            "h-1.5 w-1.5 rounded-full transition-colors duration-300",
            active ? "bg-sage" : "bg-line"
          )}
        />
      </div>
      <span
        className={cn(
          "text-xl font-bold tracking-tight transition-colors duration-300 sm:text-2xl",
          active ? "text-ivory" : "text-forest"
        )}
      >
        {service.name}
      </span>
      <span
        className={cn(
          "text-[13px] leading-relaxed transition-colors duration-300",
          active ? "text-ivory/65" : "text-muted"
        )}
      >
        {service.summary}
      </span>
    </motion.button>
  );
}

export function ServicesOverview() {
  const [activeId, setActiveId] = useState<Service["id"]>("design");
  const active = services.find((s) => s.id === activeId) ?? services[0];

  return (
    <section className="overflow-hidden py-20 sm:py-28">
      <Container>
        <div className="mb-14 flex flex-col gap-10 lg:mb-20 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <span className="label">Yang Kami Lakukan</span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-forest sm:text-4xl lg:text-[2.75rem]">
                Tiga keahlian, satu tujuan: website yang bekerja.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 text-[15px] leading-relaxed text-muted sm:text-base">
                Dari kesan pertama hingga interaksi terakhir, kami membangun website di mana
                strategi, desain, dan teknologi berjalan bersama.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Button href="/services" variant="outline" arrow className="shrink-0">
              Lihat Semua Layanan
            </Button>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-6">
          <div className="flex flex-col gap-4 lg:col-span-5">
            {services.map((service, index) => (
              <motion.div key={service.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: index * 0.06 }}>
                <HudItem service={service} active={service.id === activeId} onSelect={() => setActiveId(service.id)} />
              </motion.div>
            ))}
          </div>

          <div className="lg:col-span-7">
            <motion.div
              key={active.id + "-container"}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex h-full min-h-[320px] flex-col border border-line bg-ivory p-2.5"
            >
              <div className="min-h-[280px] flex-1">
                <ServiceIllustration service={active} />
              </div>
              <div className="flex items-center justify-between px-4 pb-3 pt-4">
                <p className="max-w-md text-[13px] leading-relaxed text-muted">
                  {active.overview}
                </p>
                <span className="hidden shrink-0 items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted sm:flex">
                  <ArrowDown className="h-3.5 w-3.5" />
                  {active.index}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}