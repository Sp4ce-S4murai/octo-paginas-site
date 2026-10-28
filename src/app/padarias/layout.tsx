import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exemplos para Padarias e Confeitarias | OCTO Páginas",
  description:
    "Veja exemplos de páginas profissionais para padarias e confeitarias. Escolha entre layouts focados no cardápio ou em encomendas para o seu negócio.",
};

export default function PadariasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
