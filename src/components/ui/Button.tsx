import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "light" | "outline" | "outline-light" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-forest text-ivory hover:bg-forest-2 hover:-translate-y-0.5",
  light:
    "bg-ivory text-forest hover:bg-white hover:-translate-y-0.5",
  outline:
    "border border-forest/30 text-forest hover:border-forest hover:bg-forest/[0.04]",
  "outline-light":
    "border border-ivory/30 text-ivory hover:border-ivory hover:bg-ivory/[0.06]",
  ghost: "text-forest border-b border-transparent hover:border-forest",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-[13px]",
  md: "px-6 py-3 text-[14px]",
  lg: "px-8 py-4 text-[15px]",
};

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
  target?: string;
  ariaLabel?: string;
};

type ButtonAsButton = CommonProps & {
  href?: undefined;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
};

export type ButtonProps = ButtonAsLink | ButtonAsButton;

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    arrow = false,
    className,
    children,
  } = props;

  const base = cn(
    "group inline-flex items-center justify-center gap-2 rounded-[3px] font-semibold transition-all duration-300 ease-out",
    variantClasses[variant],
    sizeClasses[size],
    props.href ? "" : "select-none",
    className
  );

  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={2}
        />
      )}
    </>
  );

  if (props.href !== undefined) {
    return (
      <Link
        href={props.href}
        target={props.target}
        aria-label={props.ariaLabel}
        className={base}
      >
        {content}
      </Link>
    );
  }

  const { type = "button", onClick, disabled } = props as ButtonAsButton;

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={base}>
      {content}
    </button>
  );
}