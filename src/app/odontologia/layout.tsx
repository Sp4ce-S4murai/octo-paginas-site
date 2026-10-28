import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exemplos para Clínicas Odontológicas | OCTO Páginas",
  description:
    "Veja exemplos de páginas profissionais para clínicas odontológicas. Escolha entre layouts humanizados ou estruturados para sua clínica.",
};

export default function OdontologiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
