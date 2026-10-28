import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exemplos para Estéticas e Salões | OCTO Páginas",
  description:
    "Veja exemplos de páginas profissionais para estéticas e salões de beleza. Escolha entre layouts visuais ou focados em agendamento para o seu negócio.",
};

export default function EsteticasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
