// Configuração do gerador de prévia. Tudo que é decisão comercial fica aqui.

/** WhatsApp da OCTO (mesmo número do BRAND.md / site institucional). */
export const OCTO_WHATSAPP = "555494058603";

/** Pagamento único, em reais. SUPOSIÇÃO inicial — decisão de preço é do Pedro. */
export const PRECO_UNICO = 497;

/** Menor mensalidade (plano Essencial). Conferir se segue valendo. */
export const PRECO_MENSAL_A_PARTIR = 97;

/** SUPOSIÇÃO: por quanto tempo a OCTO mantém no ar a página de pagamento único. */
export const HOSPEDAGEM_UNICO_MESES = 12;

export const brl = (n: number) =>
  `R$ ${n.toLocaleString("pt-BR", { maximumFractionDigits: 0 })}`;

export const STORAGE_KEY = "octo-gerador-v1";
