"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function HeroVisual() {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <div className="border border-line bg-white p-2 sm:p-3">
          <Image
            src="/solvra-hero-visual.png"
            alt="Komposisi visual perpaduan digital dan arsitektural — arah visual SOLVRA untuk pertumbuhan bisnis"
            width={1600}
            height={1200}
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-line pt-3">
          <span className="text-[11px] font-bold uppercase tracking-widest text-muted">
            Digital Growth &amp; Technology Partner
          </span>
          <span className="text-[11px] font-bold uppercase tracking-widest text-moss">
            Dibangun untuk Bisnis
          </span>
        </div>
      </motion.div>
    </div>
  );
}