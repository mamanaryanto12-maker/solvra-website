"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { siteConfig } from "@/data/siteConfig";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";

const MotionLink = motion(Link);

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

const menuVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.12 + i * 0.05, ease: [0.22, 1, 0.36, 1] },
  }),
  exit: { opacity: 0, y: 12, transition: { duration: 0.2 } },
};

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled && !open
            ? "border-b border-line bg-ivory/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <nav className="container-x flex h-[72px] items-center justify-between">
          <Logo tone={open ? "dark" : "light"} size="md" />

          <div className="hidden items-center gap-8 lg:flex">
            {siteConfig.nav.primary.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(pathname, item.href) ? "page" : undefined}
                className={cn(
                  "link-underline text-[13.5px] font-semibold tracking-tight transition-colors duration-200",
                  isActive(pathname, item.href) ? "text-forest" : "text-muted hover:text-forest"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button href="/contact" variant="primary" size="sm" className="hidden lg:inline-flex">
              Get Started
            </Button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Tutup menu" : "Buka menu"}
              aria-expanded={open}
              className={cn(
                "relative flex h-11 w-11 items-center justify-center border transition-colors duration-300 lg:hidden",
                open ? "border-ivory/25 bg-transparent" : "border-forest/15 bg-white hover:border-forest"
              )}
            >
              <span className="relative block h-3.5 w-5">
                <span
                  className={cn(
                    "absolute left-0 top-0 h-[2px] w-full transition-all duration-300",
                    open ? "bg-ivory top-1/2 -translate-y-1/2 rotate-45" : "bg-forest"
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 bottom-0 h-[2px] w-full transition-all duration-300",
                    open ? "bg-ivory bottom-1/2 translate-y-1/2 -rotate-45" : "bg-forest"
                  )}
                />
              </span>
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 flex flex-col overflow-hidden bg-forest lg:hidden"
          >
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, #0e1a3d 0%, #132352 55%, #0b1530 100%)",
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(720px 480px at 85% -5%, rgba(46,111,242,0.18) 0%, transparent 60%), radial-gradient(640px 420px at -8% 112%, rgba(22,42,92,0.85) 0%, transparent 64%)",
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(247,247,245,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(247,247,245,0.05) 1px, transparent 1px)",
                  backgroundSize: "72px 72px",
                }}
              />
              <div
                className="absolute inset-x-0 top-0 h-48"
                style={{
                  background:
                    "radial-gradient(560px 220px at 50% -40px, rgba(46,111,242,0.14) 0%, transparent 70%)",
                }}
              />
              <div className="noise absolute inset-0" />
            </div>
            <nav className="container-x relative flex flex-1 flex-col justify-center gap-1 py-24">
              {siteConfig.nav.primary.map((item, index) => (
                <MotionLink
                  key={item.href}
                  href={item.href}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  custom={index}
                  variants={itemVariants}
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                  className={cn(
                    "group flex items-baseline justify-between border-b border-ivory/10 py-4",
                    isActive(pathname, item.href) ? "text-ivory" : "text-ivory/70"
                  )}
                >
                  <span className="text-3xl font-bold tracking-tight sm:text-4xl">
                    {item.label}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-sage transition-colors duration-300 group-hover:bg-ivory" />
                </MotionLink>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-8 flex flex-col gap-4"
              >
                <Button href="/contact" variant="light" size="lg" arrow>
                  Get Started
                </Button>
                <p className="text-xs leading-relaxed text-ivory/50">
                  {siteConfig.contact.email}
                </p>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}