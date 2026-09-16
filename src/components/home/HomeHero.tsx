"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const copy = [
  {
    label: "SOLVRA — Digital Website Studio dari Indonesia",
    headline: ["Website yang dibangun", "untuk bisnis dan keperluan Anda."],
    body: "SOLVRA adalah digital website studio dari Indonesia. Kami membangun website di seputaran kebutuhan nyata bisnis — dimulai dari masalah, bukan dari template. Teknologi adalah alatnya; kemajuan bisnis tujuannya.",
    steps: ["Discovery", "Strategy", "Design", "Development", "Launch"],
  },
];

export function HomeHero() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 700], ["0%", "6%"]);

  return (
    <section className="relative overflow-hidden bg-ivory pb-20 pt-[7.5rem] sm:pb-28 sm:pt-40">
      <motion.div aria-hidden="true" style={{ y: bgY }} className="absolute inset-0 -z-10 scale-110">
        <Image
          src="/hero-background.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(247,247,245,0.92) 0%, rgba(247,247,245,0.64) 34%, rgba(247,247,245,0.3) 56%, rgba(247,247,245,0) 76%), linear-gradient(0deg, rgba(247,247,245,0.95) 0%, rgba(247,247,245,0.55) 5%, rgba(247,247,245,0) 12%), radial-gradient(900px 620px at 18% 4%, rgba(247,247,245,0.4) 0%, rgba(247,247,245,0) 62%)",
          }}
        />
        <div className="noise absolute inset-0" />
      </motion.div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="flex flex-col gap-8 lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.05 }}
              className="flex items-center gap-3"
            >
              <span className="h-2 w-2 rounded-full bg-moss" />
              <span className="label">{copy[0].label}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.15 }}
              className="text-[2.25rem] font-extrabold leading-[1.05] tracking-tightest text-forest sm:text-5xl lg:text-[3.75rem]"
            >
              {copy[0].headline[0]}
              <br />
              <span className="font-medium text-moss">{copy[0].headline[1]}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.28 }}
              className="max-w-lg text-[15.5px] leading-relaxed text-muted sm:text-[17px]"
            >
              {copy[0].body}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Button href="/contact" variant="primary" size="lg" arrow>
                Get Started
              </Button>
              <Button href="/work" variant="outline" size="lg">
                View Work
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.55 }}
              className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-[12px] font-semibold uppercase tracking-widest text-muted/80"
            >
              {copy[0].steps.map((step, index) => (
                <span key={step} className="flex items-center gap-6">
                  <span>{step}</span>
                  {index < copy[0].steps.length - 1 && (
                    <span className="h-1 w-1 rounded-full bg-sage" aria-hidden="true" />
                  )}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}