"use client";

import * as React from "react";

type CTAProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  /** rótulo pra identificar qual botão foi clicado (aparece no event_source_url) */
  label?: string;
  /** nome do evento do Meta Pixel/CAPI */
  eventName?: string; // ex: "Lead", "Subscribe"
  /** abrir em nova aba */
  newTab?: boolean;
};

export default function CTA({
  href,
  children,
  className,
  label = "cta",
  eventName = "Lead",
  newTab = false,
}: CTAProps) {
  const onClick = React.useCallback(() => {
    // 1) gera um id único pra dedupe entre navegador e servidor
    const eventID = crypto.randomUUID();

    // 2) Pixel do navegador (se o fbevents.js carregou)
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      try {
        window.fbq("track", eventName, {}, { eventID });
      } catch {
        /* ignore */
      }
    }

    // 3) Conversions API (servidor) — envia MESMO event_id
    try {
      const payload = {
        event_name: eventName,
        event_id: eventID,
        event_source_url: `${location.href}?cta=${encodeURIComponent(label)}`,
      };

      const body = JSON.stringify(payload);

      if ("sendBeacon" in navigator) {
        const blob = new Blob([body], { type: "application/json" });
        navigator.sendBeacon("/api/fb-capi", blob);
      } else {
        // fallback
        fetch("/api/fb-capi", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body,
          keepalive: true,
        }).catch(() => {});
      }
    } catch {
      /* ignore */
    }
    // não bloqueia a navegação
  }, [eventName, label]);

  return (
    <a
      href={href}
      onClick={onClick}
      data-cta={label}
      className={className}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}
