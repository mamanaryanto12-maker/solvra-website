import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  tone?: "light" | "dark";
  className?: string;
  as?: "h1" | "h2" | "h3";
};

const sizeByTag: Record<NonNullable<SectionHeadingProps["as"]>, string> = {
  h1: "text-4xl sm:text-5xl lg:text-6xl",
  h2: "text-3xl sm:text-4xl lg:text-[2.75rem]",
  h3: "text-2xl sm:text-3xl",
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
  as = "h2",
}: SectionHeadingProps) {
  const Tag = as;

  return (
    <div
      className={cn(
        "flex max-w-3xl flex-col gap-4",
        align === "center" && "items-center text-center mx-auto",
        align === "right" && "items-end text-right ml-auto",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <span className={cn("label", tone === "dark" && "label-light")}>
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.06}>
        <Tag
          className={cn(
            "leading-[1.05] tracking-tightest",
            sizeByTag[Tag],
            tone === "dark" ? "text-ivory" : "text-forest"
          )}
        >
          {title}
        </Tag>
      </Reveal>
      {description && (
        <Reveal delay={0.12}>
          <p
            className={cn(
              "max-w-xl text-[15px] leading-relaxed sm:text-base",
              tone === "dark" ? "text-ivory/70" : "text-muted"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}