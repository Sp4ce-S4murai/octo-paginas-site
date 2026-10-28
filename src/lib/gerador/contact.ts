const digits = (s: string) => s.replace(/\D/g, "");

/** Número no formato do wa.me (55 + DDD + número) ou null se não parecer válido. */
export function waNumber(raw: string): string | null {
  const d = digits(raw).replace(/^0+/, "");
  if (d.startsWith("55") && (d.length === 12 || d.length === 13)) return d;
  if (d.length === 10 || d.length === 11) return "55" + d;
  return null;
}

export function waHref(raw: string, msg: string): string | null {
  const n = waNumber(raw);
  return n ? `https://wa.me/${n}?text=${encodeURIComponent(msg)}` : null;
}

export function telHref(raw: string): string | null {
  const n = waNumber(raw);
  return n ? `tel:+${n}` : null;
}

/** (54) 99999-9999 */
export function formatPhone(raw: string): string {
  const n = waNumber(raw);
  if (!n) return raw.trim();
  const l = n.slice(2);
  const ddd = l.slice(0, 2);
  const rest = l.slice(2);
  const cut = rest.length === 9 ? 5 : 4;
  return `(${ddd}) ${rest.slice(0, cut)}-${rest.slice(cut)}`;
}

/** Aceita "@usuario", "usuario" ou link do Instagram; devolve só o usuário válido. */
export function igHandle(raw: string): string | null {
  const m = raw
    .trim()
    .replace(/^https?:\/\/(www\.)?instagram\.com\//i, "")
    .replace(/^@/, "")
    .split(/[/?#]/)[0];
  return /^[A-Za-z0-9._]{1,30}$/.test(m) ? m : null;
}

export function mapsHref(endereco: string, cidade: string): string | null {
  const q = [endereco, cidade].filter(Boolean).join(", ").trim();
  return q ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}` : null;
}

export function iniciais(nome: string): string {
  const parts = nome
    .split(/\s+/)
    .map((p) => p.replace(/[^\p{L}\p{N}]/gu, ""))
    .filter(Boolean);
  if (!parts.length) return "•";
  const first = parts[0][0];
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

export function subtitulo(d: { frase: string; ramo: string; cidade: string }): string {
  if (d.frase) return d.frase;
  if (d.ramo && d.cidade) return `${d.ramo} em ${d.cidade}`;
  return d.ramo || d.cidade;
}
