"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { trackWhatsAppClick } from "@/lib/analytics";

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "onClick"> & {
  href: string;
  /** Identificação da origem da campanha/seção (vai pro GA4 e pro Pixel). */
  origem: string;
  extra?: Record<string, string | number | boolean | undefined>;
  className?: string;
  children: ReactNode;
};

/**
 * Link de CTA pro WhatsApp com rastreamento. Isolado como client component
 * pra que as páginas que o usam continuem sendo server components.
 */
export default function WhatsAppLink({
  href,
  origem,
  extra,
  className,
  children,
  ...rest
}: Props) {
  return (
    <a
      {...rest}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick(origem, extra)}
      className={className}
    >
      {children}
    </a>
  );
}
