import { cn } from "@/lib/utils";

type MockBrowserProps = {
  url?: string;
  className?: string;
  bodyClassName?: string;
  children: React.ReactNode;
  tone?: "light" | "dark";
};

export function MockBrowser({
  url,
  className,
  bodyClassName,
  children,
  tone = "light",
}: MockBrowserProps) {
  return (
    <div
      className={cn(
        "overflow-hidden border shadow-raise",
        tone === "dark" ? "border-forest-2 bg-forest-2" : "hairline bg-white",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center gap-3 border-b px-4 py-3",
          tone === "dark" ? "border-ivory/10 bg-forest" : "hairline bg-ivory/60"
        )}
      >
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-sage" />
        </div>
        {url && (
          <div
            className={cn(
              "flex h-7 flex-1 items-center justify-center rounded-[3px] text-[11px] tracking-wide",
              tone === "dark" ? "bg-ivory/10 text-ivory/50" : "bg-ivory text-muted"
            )}
          >
            {url}
          </div>
        )}
      </div>
      <div className={cn("relative", bodyClassName)}>{children}</div>
    </div>
  );
}