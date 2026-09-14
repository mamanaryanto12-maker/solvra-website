import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  tone?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeClasses = {
  sm: "h-7",
  md: "h-9",
  lg: "h-10",
} as const;

export function Logo({ tone = "light", size = "sm", className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="SOLVRA — Beranda"
      className={cn("group inline-flex items-center", className)}
    >
      <Image
        src={tone === "dark" ? "/logo-solvra-white.png" : "/logo-solvra.png"}
        alt="SOLVRA"
        width={4903}
        height={1109}
        priority
        className={cn(
          "w-auto object-contain transition-opacity duration-300 group-hover:opacity-80",
          sizeClasses[size]
        )}
      />
    </Link>
  );
}