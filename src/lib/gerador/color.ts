// Utilitários de cor com checagem de contraste (WCAG). Tudo que vira texto
// passa por aqui para a cor escolhida pelo cliente nunca quebrar a leitura.

type RGB = [number, number, number];

export function parseHex(hex: string): RGB | null {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex.trim());
  if (!m) return null;
  const n = parseInt(m[1], 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

export function toHex([r, g, b]: RGB): string {
  return "#" + [r, g, b].map((v) => Math.round(v).toString(16).padStart(2, "0")).join("");
}

function lum([r, g, b]: RGB): number {
  const f = (v: number) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
}

export function contrast(a: RGB, b: RGB): number {
  const la = lum(a);
  const lb = lum(b);
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
}

export function mix(a: RGB, b: RGB, t: number): RGB {
  return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
}

const WHITE: RGB = [255, 255, 255];
const BLACK: RGB = [0, 0, 0];
const INK: RGB = [17, 17, 17];

/** Texto (branco ou quase preto) legível sobre a cor. Sempre >= 4,5:1. */
export function onColor(bg: RGB): string {
  return contrast(WHITE, bg) >= contrast(INK, bg) ? "#ffffff" : "#111111";
}

/** Escurece a cor até ter `min` de contraste com `bg`. */
export function darkenUntil(c: RGB, bg: RGB, min: number): RGB {
  let out = c;
  for (let i = 0; i <= 25 && contrast(out, bg) < min; i++) out = mix(c, BLACK, i * 0.04);
  return out;
}

export interface ThemeVars {
  "--accent": string; // cor do cliente, usada como superfície
  "--on-accent": string; // texto sobre a superfície
  "--ink": string; // a cor como texto sobre branco (>= 4,5:1)
  "--deep": string; // versão escura (>= 7:1 com branco), para painéis
  "--tint": string; // versão bem clara, para fundos suaves
}

export function themeVars(hex: string): ThemeVars {
  const base = parseHex(hex) ?? [37, 99, 235];
  return {
    "--accent": toHex(base),
    "--on-accent": onColor(base),
    "--ink": toHex(darkenUntil(base, WHITE, 4.5)),
    "--deep": toHex(darkenUntil(base, WHITE, 7)),
    "--tint": toHex(mix(base, WHITE, 0.88)),
  };
}
