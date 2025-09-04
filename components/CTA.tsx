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
}: {
  href: string;
  children: React.ReactNode;
  event?: string;
  label?: string; // ex.: "hero", "navbar"
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

  return (
    <motion.a
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      href={href}
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-medium transition bg-blue-600 text-white hover:bg-blue-700 shadow-lg"
    >
      {children}
    </motion.a>
  );
}
