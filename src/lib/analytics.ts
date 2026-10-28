// Helper central de rastreamento (GA4 + Meta Pixel).
// Não quebra se os scripts ainda não carregaram ou se os IDs não
// estiverem configurados — todo mundo checa `typeof window` e a
// existência da função antes de chamar.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

type EventParams = Record<string, string | number | boolean | undefined>;

/**
 * Dispara um evento no GA4 (via gtag) e, quando aplicável, o evento
 * equivalente no Meta Pixel. Chame no onClick dos CTAs de WhatsApp e
 * no onSubmit de formulários.
 */
export function trackEvent(gaEventName: string, params: EventParams = {}) {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", gaEventName, params);
  }
}

/** Clique em qualquer CTA que leva pro WhatsApp. */
export function trackWhatsAppClick(origem: string, extra: EventParams = {}) {
  // Páginas de demonstração (origem "demo_*") levam pra número fictício de
  // clínica de exemplo. Não são contato real com a OCTO: vão pro GA4 com
  // nome próprio e NÃO disparam "Contact" no Meta Pixel, pra não ensinar o
  // algoritmo de anúncio a otimizar pra clique em demo.
  if (origem.startsWith("demo_")) {
    trackEvent("demo_cta_click", { origem, ...extra });
    return;
  }

  trackEvent("whatsapp_click", { origem, ...extra });

  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    // "Contact" é o evento padrão do Meta pra intenção de contato direto.
    window.fbq("track", "Contact", { origem, ...extra });
  }
}

/** Envio de formulário de contato/agendamento. */
export function trackFormSubmit(origem: string, extra: EventParams = {}) {
  trackEvent("generate_lead", { origem, ...extra });

  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "Lead", { origem, ...extra });
  }
}
