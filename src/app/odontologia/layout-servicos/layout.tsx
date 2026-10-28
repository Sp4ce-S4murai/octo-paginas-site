import type { Metadata } from "next";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

/** Ver comentário em ../layout-acolhimento/layout.tsx. */
export const metadata: Metadata = {
  robots: { index: false, follow: true },
};

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LocalBusinessSchema
        tipo="Dentist"
        nome="Clínica OdontoVida (exemplo)"
        descricao="Layout de exemplo para clínica odontológica — foco em especialidades."
        url="https://octopaginas.com.br/odontologia/layout-servicos"
        imagem="https://octopaginas.com.br/images/dentist-treating.webp"
        horarios={["Mo-Fr 08:00-19:00"]}
      />
      {children}
    </>
  );
}
