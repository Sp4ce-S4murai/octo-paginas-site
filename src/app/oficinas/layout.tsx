import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exemplos para Oficinas Mecânicas | OCTO Páginas",
  description:
    "Veja exemplos de páginas profissionais para oficinas mecânicas. Escolha entre layouts focados em confiança ou em orçamento rápido para sua oficina.",
};

export default function OficinasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
