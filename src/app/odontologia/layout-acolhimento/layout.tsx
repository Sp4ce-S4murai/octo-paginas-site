import type { Metadata } from "next";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

/**
 * Demo com dados de clínica fictícia. Fica fora do índice do Google de
 * propósito: dado estruturado de negócio inexistente em página indexável é
 * risco de penalização. O link direto continua funcionando, que é como a
 * página é usada na prospecção.
 *
 * Ao montar a página de um cliente real, é só trocar os dados abaixo pelos
 * dados verdadeiros (NAP igual ao Google Business Profile) e remover o
 * `robots`.
 */
export const metadata: Metadata = {
  robots: { index: false, follow: true },
};

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LocalBusinessSchema
        tipo="Dentist"
        nome="Clínica Sorriso & Saúde (exemplo)"
        descricao="Layout de exemplo para clínica odontológica."
        url="https://octopaginas.com.br/odontologia/layout-acolhimento"
        imagem="https://octopaginas.com.br/images/dental-team.webp"
        horarios={["Mo-Fr 08:00-18:00", "Sa 08:00-12:00"]}
      />
      {children}
    </>
  );
}
