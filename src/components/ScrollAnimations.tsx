"use client";

import { useEffect } from "react";

/**
 * Ativa as animações de entrada (.animate-on-scroll -> .is-visible).
 * Componente client isolado: o resto da página continua sendo renderizada
 * no servidor (SSR), o que é o que importa pra SEO e pro LCP.
 */
export default function ScrollAnimations() {
  useEffect(() => {
    const els = document.querySelectorAll(".animate-on-scroll");

    // Sem suporte a IntersectionObserver: mostra tudo, não esconde conteúdo.
    if (typeof IntersectionObserver === "undefined") {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
