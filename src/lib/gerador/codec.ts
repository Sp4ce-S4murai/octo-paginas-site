import { FormState, LIMITES, ModelId, PlanoId } from "./types";
import { MODELO_IDS, VAZIO } from "./data";

export interface Draft {
  form: FormState;
  modelo: ModelId;
  cor: string | null; // null = cor padrão do modelo
  plano: PlanoId;
}

// Chaves curtas: o link da prévia vai dentro da mensagem do WhatsApp.
interface Wire {
  n?: string; r?: string; c?: string; t?: string; o?: string;
  s?: string[]; h?: string[]; e?: string; w?: string; p?: string; i?: string;
  m?: string; a?: string; l?: string;
}

const clean = (v: unknown, max: number) => (typeof v === "string" ? v.slice(0, max) : "");
const list = (v: unknown, n: number, len: number) =>
  Array.isArray(v) ? v.filter((x) => typeof x === "string").slice(0, n).map((x: string) => x.slice(0, len)) : [];

function b64urlEncode(s: string): string {
  const bytes = new TextEncoder().encode(s);
  let bin = "";
  bytes.forEach((b) => (bin += String.fromCharCode(b)));
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function b64urlDecode(s: string): string {
  const pad = s.replace(/-/g, "+").replace(/_/g, "/") + "===".slice((s.length + 3) % 4);
  const bin = atob(pad);
  const bytes = Uint8Array.from(bin, (c) => c.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

export function encodeDraft(d: Draft): string {
  const f = d.form;
  const w: Wire = {
    n: f.nome, r: f.ramo, c: f.cidade, t: f.frase, o: f.sobre,
    s: f.servicos.split("\n").map((x) => x.trim()).filter(Boolean),
    h: f.horario.split("\n").map((x) => x.trim()).filter(Boolean),
    e: f.endereco, w: f.whatsapp, p: f.telefone, i: f.instagram,
    m: d.modelo, l: d.plano,
  };
  if (d.cor) w.a = d.cor;
  // remove vazios
  const slim = Object.fromEntries(
    Object.entries(w).filter(([, v]) => (Array.isArray(v) ? v.length : v !== "")),
  );
  return b64urlEncode(JSON.stringify(slim));
}

/** Decodifica e SANITIZA. Nunca confia no que veio do link. */
export function decodeDraft(encoded: string): Draft | null {
  try {
    const w = JSON.parse(b64urlDecode(encoded)) as Wire;
    if (!w || typeof w !== "object") return null;
    const modelo = MODELO_IDS.includes(w.m as ModelId) ? (w.m as ModelId) : "letreiro";
    const cor = typeof w.a === "string" && /^#[0-9a-f]{6}$/i.test(w.a) ? w.a : null;
    const plano: PlanoId = w.l === "unico" ? "unico" : "mensal";
    const form: FormState = {
      ...VAZIO,
      nome: clean(w.n, LIMITES.nome),
      ramo: clean(w.r, LIMITES.ramo),
      cidade: clean(w.c, LIMITES.cidade),
      frase: clean(w.t, LIMITES.frase),
      sobre: clean(w.o, LIMITES.sobre),
      servicos: list(w.s, LIMITES.servicos, LIMITES.servico).join("\n"),
      horario: list(w.h, LIMITES.horarios, LIMITES.horario).join("\n"),
      endereco: clean(w.e, LIMITES.endereco),
      whatsapp: clean(w.w, LIMITES.telefone),
      telefone: clean(w.p, LIMITES.telefone),
      instagram: clean(w.i, LIMITES.instagram),
    };
    return { form, modelo, cor, plano };
  } catch {
    return null;
  }
}

export const HASH_PREFIX = "#d=";
export function draftFromHash(hash: string): Draft | null {
  return hash.startsWith(HASH_PREFIX) ? decodeDraft(hash.slice(HASH_PREFIX.length)) : null;
}
