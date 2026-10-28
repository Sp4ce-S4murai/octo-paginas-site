import type { Metadata } from "next";
import PreviaTelaCheia from "@/components/gerador/PreviaTelaCheia";

export const metadata: Metadata = {
  title: "Prévia de página | OCTO Páginas",
  robots: { index: false, follow: false },
};

export default function PreviaPage() {
  return <PreviaTelaCheia />;
}
