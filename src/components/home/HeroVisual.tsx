"use client";

import { motion } from "framer-motion";

import { MockBrowser } from "@/components/ui/MockBrowser";

function MiniDivider() {
  return <span aria-hidden="true" className="block h-1 w-4 bg-white/15" />;
}

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
          <MockBrowser url="solvra.studio" tone="dark" bodyClassName="aspect-[4/3]">
            <div className="flex h-full w-full flex-col bg-forest">
              <div className="flex shrink-0 items-center justify-between border-b border-ivory/10 px-5 py-3">
                <span className="text-[10px] font-extrabold tracking-[0.2em] text-ivory">
                  SOLVRA
                </span>
                <div className="flex items-center gap-3">
                  <MiniDivider />
                  <MiniDivider />
                  <MiniDivider />
                  <span className="block h-4 w-10 rounded-[2px] bg-moss" />
                </div>
              </div>

              <div className="flex min-h-0 flex-1 flex-col justify-between p-5 sm:p-6">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-moss" />
                  <span className="block h-1.5 w-24 rounded-[1px] bg-white/25" />
                </div>

                <div className="flex flex-col gap-2.5">
                  <div className="w-[88%] text-[clamp(18px,2.6vw,30px)] font-extrabold leading-[1.05] tracking-tight text-ivory">
                    Satu website.
                    <br />
                    Benar-benar dipikirkan.
                  </div>
                  <div className="flex flex-col gap-1.5 pt-1">
                    <span className="block h-2 w-[70%] rounded-[1px] bg-white/20" />
                    <span className="block h-2 w-[52%] rounded-[1px] bg-white/12" />
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <span className="block h-7 w-24 rounded-[2px] bg-moss" />
                  <span className="block h-7 w-24 rounded-[2px] border border-white/25" />
                </div>
              </div>
            </div>

            <div className="flex shrink-0 flex-col gap-3 border-t border-ivory/10 bg-white p-5">
              <span className="block h-2 w-32 rounded-[1px] bg-forest/80" />
              <div className="grid grid-cols-3 gap-2.5">
                <span className="block h-6 rounded-[1px] bg-ivory" />
                <span className="block h-6 rounded-[1px] bg-forest/[0.06]" />
                <span className="block h-6 rounded-[1px] border border-moss/40 bg-moss/10" />
              </div>
              <div className="mt-0.5 flex items-center justify-between border-t border-line pt-3">
                <span className="block h-1.5 w-16 rounded-[1px] bg-muted/40" />
                <span className="block h-1.5 w-8 rounded-[1px] bg-sage" />
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
            <span className="text-[10px] font-medium uppercase tracking-wider text-muted">
              Warna &amp; tata letak
            </span>
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
              <span className="text-[12px] font-bold tracking-tight text-forest">
                Ngobrol dulu, desain kemudian
              </span>
              <span className="text-[9px] font-medium uppercase tracking-wider text-muted">
                Bukan mulai dari template
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