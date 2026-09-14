import { cn } from "@/lib/utils";

type MarqueeProps = {
  items: string[];
  tone?: "light" | "dark";
  className?: string;
};

export function Marquee({ items, tone = "light", className }: MarqueeProps) {
  const row = [...items, ...items];

  return (
    <div
      className={cn(
        "relative flex w-full overflow-hidden border-y",
        tone === "dark" ? "border-ivory/15 bg-forest" : "hairline bg-ivory",
        className
      )}
      aria-hidden="true"
    >
      <div className="flex shrink-0 animate-marquee items-center whitespace-nowrap py-7 will-change-transform">
        {row.map((item, index) => (
          <span key={index} className="flex items-center">
            <span
              className={cn(
                "px-8 text-sm font-semibold uppercase tracking-wider",
                tone === "dark" ? "text-ivory/60" : "text-muted"
              )}
            >
              {item}
            </span>
            <span
              className={cn(
                "h-1.5 w-1.5 rounded-full",
                tone === "dark" ? "bg-sage" : "bg-moss/50"
              )}
            />
          </span>
        ))}
      </div>
    </div>
  );
}