import Link from "next/link";
import type { ReactNode } from "react";
import MagneticLink from "@/components/motion/MagneticLink";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  icon?: ReactNode;
  magnetic?: boolean;
  className?: string;
};

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-sm px-7 py-4 font-body text-[15px] font-semibold no-underline transition-[box-shadow,color,border-color] duration-300";

const VARIANTS = {
  primary:
    "bg-gold text-[#0b0b0b] shadow-[0_0_0_rgba(201,168,106,0)] hover:shadow-[0_14px_34px_rgba(201,168,106,0.3)]",
  secondary: "border border-[rgba(201,168,106,0.5)] text-cream hover:border-gold",
};

export default function Button({ href, children, variant = "primary", icon, magnetic = true, className = "" }: ButtonProps) {
  const isExternal = /^(https?:|tel:|mailto:)/.test(href);
  const classes = `${BASE} ${VARIANTS[variant]} ${className}`;

  const content = isExternal ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener" : undefined} data-cursor-hover className={classes}>
      {icon}
      {children}
    </a>
  ) : (
    <Link href={href} data-cursor-hover className={classes}>
      {icon}
      {children}
    </Link>
  );

  return magnetic ? <MagneticLink>{content}</MagneticLink> : content;
}
