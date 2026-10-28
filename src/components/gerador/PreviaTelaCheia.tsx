"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { draftFromHash } from "@/lib/gerador/codec";
import SiteView from "./SiteView";

const noop = () => () => {};
const subscribeHash = (cb: () => void) => {
  window.addEventListener("hashchange", cb);
  return () => window.removeEventListener("hashchange", cb);
};

/** Mostra a prévia a partir do link (#d=...). Nada passa pelo servidor. */
export default function PreviaTelaCheia() {
  const hash = useSyncExternalStore(subscribeHash, () => window.location.hash, () => "");
  const mounted = useSyncExternalStore(noop, () => true, () => false);
  if (!mounted) return null;
  const draft = draftFromHash(hash);
  if (!draft) {
    return (
      <main style={{ padding: 32, fontFamily: "system-ui, sans-serif", textAlign: "center" }}>
        <h1 style={{ fontSize: "1.3rem" }}>Este link de prévia não é válido</h1>
        <p>Ele pode ter sido cortado ao copiar. Monte a prévia de novo no gerador.</p>
        <p>
          <Link href="/gerador">Ir para o gerador</Link>
        </p>
      </main>
    );
  }
  return (
    <>
      <div style={{ background: "#1f2937", color: "#fff", padding: "8px 14px", fontFamily: "system-ui, sans-serif", fontSize: 14, display: "flex", gap: 12, justifyContent: "space-between", flexWrap: "wrap" }}>
        <span>Prévia feita no gerador da OCTO Páginas. Os botões não funcionam aqui.</span>
        <Link href="/gerador" style={{ color: "#fff" }}>Montar a minha</Link>
      </div>
      <SiteView form={draft.form} modelo={draft.modelo} cor={draft.cor} standalone />
    </>
  );
}
