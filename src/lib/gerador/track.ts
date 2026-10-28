// Eventos do gerador. Só dispara se GA4 / Meta Pixel já estiverem carregados
// (o layout do site já injeta os dois). Nunca envia o conteúdo do formulário.
type Params = Record<string, string | number | boolean>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function track(event: string, params: Params = {}) {
  try {
    window.gtag?.("event", event, params);
  } catch {}
}

export function trackContact(params: Params = {}) {
  track("generator_cta_click", params);
  try {
    window.fbq?.("track", "Contact");
  } catch {}
}
