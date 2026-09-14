"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { MockBrowser } from "@/components/ui/MockBrowser";

export function HeroVisual() {
  return (
    <div className="relative" aria-hidden="true">
      <span className="absolute -top-8 left-4 hidden text-[96px] font-extrabold leading-none tracking-tightest text-forest/[0.06] select-none lg:block">
        SOLVRA
      </span>

      <div className="relative px-0 pt-8 sm:px-6 sm:pt-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <MockBrowser url="solvra.studio" bodyClassName="aspect-[4/3]">
            <div className="relative h-full w-full overflow-hidden bg-forest">
              <Image
                src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1400&q=80&auto=format&fit=crop"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover opacity-90"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(10,16,32,0.6) 0%, rgba(10,16,32,0) 45%)",
                }}
              />
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2.5 p-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-sage">
                  Digital Website Studio
                </span>
                <span className="max-w-xs text-2xl font-extrabold leading-[1.08] tracking-tight text-ivory sm:text-[1.7rem]">
                  Dibangun untuk memberi solusi, dirancang untuk berkembang.
                </span>
                <span className="mt-1 flex h-[3px] w-24 bg-sage" />
              </div>
            </div>
          </MockBrowser>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute -left-2 top-0 z-20 hidden -rotate-2 border border-line bg-ivory p-4 shadow-float md:block"
        >
          <div className="flex h-full flex-col justify-between gap-3">
            <span className="text-[11px] font-bold tracking-tight text-forest">Sistem Desain</span>
            <div className="grid grid-cols-4 gap-1.5">
              <span className="h-6 bg-forest" />
              <span className="h-6 bg-forest-2" />
              <span className="h-6 bg-moss" />
              <span className="h-6 bg-sage" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.62, ease: [0.22, 1, 0.36, 1] }}
          className="absolute -bottom-8 right-0 z-20 hidden rotate-2 border border-line bg-ivory px-4 py-3 shadow-float sm:block"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-forest">
              <span className="text-[10px] font-bold text-sage">S</span>
            </span>
            <div className="flex flex-col">
              <span className="text-[12px] font-bold tracking-tight text-forest">Strategi Diutamakan</span>
              <span className="text-[9px] font-medium uppercase tracking-wider text-muted">
                Desain · Kode · Konversi
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.span
        aria-hidden="true"
        className="absolute bottom-0 right-8 hidden h-40 w-px bg-forest/15 lg:block"
        animate={{ scaleY: [0.4, 1, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}