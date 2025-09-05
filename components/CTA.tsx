"use client";
import { motion } from "framer-motion";

declare global {
  interface Window {
    fbq?: (method: string, ...args: unknown[]) => void;
  }
}

export default function CTA({
  href,
  children,
  event = "Lead",
  label,
  className,
}: {
  href: string;
  children: React.ReactNode;
  event?: string;
  label?: string;        // ex.: "hero"
  className?: string;    // permite customizar cor/estilo do botão
}) {
  const onClick = () => {
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      if (label) {
        window.fbq("track", event, { label });
      } else {
        window.fbq("track", event);
      }
    }
  };

  // estilo padrão (se não passar className)
  const base =
    "inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-medium transition bg-[color:var(--brand-1)] text-slate-900 hover:bg-[color:var(--brand-1)]/90 shadow-lg";

  return (
    <motion.a
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      href={href}
      onClick={onClick}
      className={className ?? base}
    >
      {children}
    </motion.a>
  );
}
