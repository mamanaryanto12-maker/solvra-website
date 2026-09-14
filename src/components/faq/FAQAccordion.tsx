"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/utils";

export type FAQItem = {
  q: string;
  a: string[];
};

type FAQAccordionProps = {
  items: FAQItem[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="flex flex-col">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div
            key={item.q}
            className={cn("border-b border-line", index === 0 && "border-t")}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 py-5 text-left sm:py-6"
            >
              <span className="text-[15px] font-bold leading-snug tracking-tight text-forest sm:text-[17px]">
                {item.q}
              </span>
              <span
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center border transition-all duration-300",
                  isOpen
                    ? "border-forest bg-forest text-ivory"
                    : "border-line text-muted"
                )}
              >
                <ChevronDown
                  className={cn("h-4 w-4 transition-transform duration-300", isOpen && "rotate-180")}
                  strokeWidth={2.5}
                />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex max-w-2xl flex-col gap-3 pb-6">
                    {item.a.map((paragraph) => (
                      <p key={paragraph} className="text-[14.5px] leading-relaxed text-muted">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}