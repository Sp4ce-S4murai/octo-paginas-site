import type { Metadata } from "next";
import Link from "next/link";
import GeradorApp from "@/components/gerador/GeradorApp";

export const metadata: Metadata = {
  title: "Monte a prévia da sua página | OCTO Páginas",
  description:
    "Escolha entre 5 modelos, preencha os dados do seu negócio e veja a sua página pronta no celular e no computador. Sem cadastro.",
  alternates: { canonical: "/gerador" },
};

export default function GeradorPage() {
  return (
    <div style={{ background: "#eef1f5", minHeight: "100vh" }}>
      <div style={{ background: "#fff", borderBottom: "1px solid #d7dde6", padding: "12px 16px", fontFamily: "system-ui, sans-serif" }}>
        <Link href="/" style={{ color: "#18202b", fontWeight: 700, textDecoration: "none" }}>OCTO Páginas</Link>
      </div>
      <header style={{ maxWidth: 1240, margin: "0 auto", padding: "28px 16px 0", fontFamily: "system-ui, sans-serif", color: "#18202b" }}>
        <h1 style={{ margin: 0, fontSize: "clamp(1.6rem, 5vw, 2.3rem)", lineHeight: 1.15 }}>Monte a prévia da sua página</h1>
        <p style={{ margin: "10px 0 0", maxWidth: "62ch", color: "#4f5b6b", fontSize: "1.05rem" }}>
          Escolha entre 5 modelos, preencha os dados do seu negócio e veja a página pronta no celular e no computador. Sem cadastro: nada é enviado até você decidir.
        </p>
      </header>
      <GeradorApp />
    </div>
  );
}
