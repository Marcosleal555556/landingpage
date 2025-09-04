"use client";
import { motion } from "framer-motion";

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

export default function CTA({
  href,
  children,
  event = "Lead",
  label,
}: {
  href: string;
  children: React.ReactNode;
  event?: string;
  label?: string; // ex.: "hero", "navbar", etc.
}) {
  const onClick = () => {
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      // Envia o evento só se o Pixel estiver ativo
      if (label) {
        window.fbq("track", event, { label });
      } else {
        window.fbq("track", event);
      }
    }
  };

  return (
    <motion.a
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      href={href}
      onClick={onClick}
      className="btn-primary"
    >
      {children}
    </motion.a>
  );
}
