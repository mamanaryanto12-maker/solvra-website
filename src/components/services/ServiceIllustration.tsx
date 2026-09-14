"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import type { Service } from "@/data/services";

function DesignVisual() {
  return (
    <div className="flex h-full w-full flex-col bg-white">
      <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
        <span className="text-[10px] font-bold uppercase tracking-widest text-moss">Creative Direction</span>
        <div className="flex gap-1.5">
          <span className="h-2 w-2 bg-forest" />
          <span className="h-2 w-2 bg-forest-2" />
          <span className="h-2 w-2 bg-moss" />
          <span className="h-2 w-2 bg-sage" />
        </div>
      </div>
      <div className="grid min-h-0 flex-1 grid-cols-3 gap-2.5 p-3.5 sm:gap-3">
        <div className="col-span-2 relative flex min-h-0 flex-col justify-between overflow-hidden bg-forest-2 p-3.5">
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-sage">Typography</span>
          <span className="text-[clamp(2.4rem,5vw,4.5rem)] font-extrabold leading-none tracking-tightest text-ivory">
            Aa
          </span>
          <div className="flex flex-col gap-1">
            <span className="h-[4px] w-full bg-ivory/80" />
            <span className="h-[4px] w-2/3 bg-ivory/50" />
            <span className="h-[4px] w-5/6 bg-ivory/30" />
          </div>
          <span className="mt-2 text-[9px] font-semibold uppercase tracking-widest text-ivory/60">
            Manrope · 400–800
          </span>
        </div>
        <div className="relative min-h-0 overflow-hidden bg-forest-2">
          <Image
            src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=700&q=80&auto=format&fit=crop"
            alt=""
            fill
            sizes="200px"
            className="object-cover"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,16,32,0.5), transparent 55%)" }} />
          <span className="absolute bottom-2.5 left-2.5 text-[8px] font-bold uppercase tracking-[0.18em] text-ivory">
            Design System
          </span>
        </div>
      </div>
      <div className="grid shrink-0 grid-cols-2 gap-2 px-3.5 pb-3.5 sm:gap-3">
        <div className="flex h-9 items-center gap-2.5 border border-line bg-ivory px-3">
          <span className="h-4 w-8 bg-forest" />
          <span className="h-3 w-10 bg-line" />
          <span className="ml-auto h-3 w-8 rounded-[2px] bg-moss" />
        </div>
        <div className="flex h-9 items-center justify-between border border-line bg-ivory px-3">
          <span className="text-[9px] font-bold uppercase tracking-widest text-forest">01 · 02 · 03</span>
          <span className="h-3 w-12 rounded-[2px] bg-sage" />
        </div>
      </div>
    </div>
  );
}

function DevelopmentVisual() {
  return (
    <div className="flex h-full w-full flex-col bg-white">
      <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-moss" />
          <span className="h-2 w-2 rounded-full bg-line" />
          <span className="h-2 w-2 rounded-full bg-line" />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-widest text-moss">Development</span>
        <span className="h-3 w-16 rounded-[2px] bg-sage" />
      </div>
      <div className="grid min-h-0 flex-1 grid-cols-2 gap-2.5 p-3.5 sm:gap-3">
        <div className="relative min-h-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=700&q=80&auto=format&fit=crop"
            alt=""
            fill
            sizes="240px"
            className="object-cover"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,16,32,0.5), transparent 50%)" }} />
          <span className="absolute bottom-2.5 left-2.5 text-[8px] font-bold uppercase tracking-[0.18em] text-ivory">
            Clean · Fast · Solid
          </span>
        </div>
        <div className="relative flex min-h-0 flex-col justify-between bg-forest p-3.5">
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-moss" />
            <span className="h-[3px] flex-1 bg-ivory/20" />
          </div>
          <div className="flex flex-col gap-1.5">
            {["#2e6ff2", "#6b7280", "#9aa3b5", "#f7f7f5"].map((color, i) => (
              <span key={color} className="flex items-center gap-2">
                <span className="font-mono text-[8px] leading-none text-ivory/50">{["01","02","03","04"][i]}</span>
                <span className="h-[4px] rounded-[1px]" style={{ backgroundColor: color, opacity: 1 - i * 0.12, width: `${[78, 60, 70, 50][i]}%` }} />
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[8px] font-bold uppercase tracking-widest text-sage">Build</span>
            <span className="flex items-center gap-1">
              <span className="h-1 w-6 bg-moss" />
              <span className="h-1 w-6 bg-line" />
              <span className="h-1 w-6 bg-sage" />
            </span>
          </div>
        </div>
      </div>
      <div className="grid shrink-0 grid-cols-3 gap-2 px-3.5 pb-3.5">
        {["Desktop", "Tablet", "Mobile"].map((device, i) => (
          <div key={device} className="flex h-7 items-center gap-2 border border-line bg-ivory px-2.5">
            <span className={`h-3 ${i === 2 ? "w-2 rounded-[1px]" : "w-3.5 rounded-[1px]"} bg-forest`} />
            <span className="h-2 flex-1 bg-line" />
            <span className="text-[8px] font-bold uppercase tracking-widest text-muted">{device}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ExperienceVisual() {
  return (
    <div className="flex h-full w-full flex-col bg-white">
      <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
        <span className="text-[10px] font-bold uppercase tracking-widest text-moss">User Journey</span>
        <div className="flex items-center gap-1.5">
          <span className="h-1 w-6 bg-moss" />
          <span className="h-1 w-6 bg-line" />
          <span className="h-1 w-6 bg-sage" />
        </div>
      </div>
      <div className="grid min-h-0 flex-1 grid-cols-2 gap-2.5 p-3.5 sm:gap-3">
        <div className="relative min-h-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=700&q=80&auto=format&fit=crop"
            alt=""
            fill
            sizes="240px"
            className="object-cover"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,16,32,0.5), transparent 55%)" }} />
          <div className="absolute bottom-3 left-3 right-3 flex flex-col gap-1">
            <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-sage">Akses kapan saja</span>
            <span className="h-[3px] w-3/4 bg-ivory/70" />
          </div>
        </div>
        <div className="flex min-h-0 flex-col justify-center gap-3">
          {[
            { n: "01", label: "Kunjungi", state: true },
            { n: "02", label: "Pahami nilai", state: true },
            { n: "03", label: "Hubungi / Aksi", state: false },
          ].map((step) => (
            <div key={step.n} className="flex items-center gap-2.5">
              <span
                className={`flex h-6 w-6 items-center justify-center rounded-full border text-[9px] font-bold ${
                  step.state ? "border-forest bg-forest text-ivory" : "border-line text-muted"
                }`}
              >
                {step.n}
              </span>
              <span className={`text-[11px] font-bold tracking-tight ${step.state ? "text-forest" : "text-muted"}`}>
                {step.label}
              </span>
              {!step.state && <span className="h-[3px] flex-1 bg-sage" />}
            </div>
          ))}
        </div>
      </div>
      <div className="flex shrink-0 items-center justify-between border-t border-line px-4 py-2.5">
        <div className="flex h-6 items-end gap-1">
          {[10, 16, 12, 20, 14, 22, 18].map((h, i) => (
            <span key={i} className={`w-2 ${i === 5 ? "bg-forest" : "bg-moss/40"}`} style={{ height: h }} />
          ))}
        </div>
        <span className="text-[8px] font-bold uppercase tracking-widest text-muted">Fokus konversi</span>
      </div>
    </div>
  );
}

const visuals: Record<string, React.ReactNode> = {
  design: <DesignVisual />,
  development: <DevelopmentVisual />,
  "digital-experience": <ExperienceVisual />,
};

export function ServiceIllustration({ service }: { service: Service }) {
  return (
    <motion.div
      key={service.id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="h-full min-h-[220px] overflow-hidden border border-line bg-white"
    >
      {visuals[service.id]}
    </motion.div>
  );
}