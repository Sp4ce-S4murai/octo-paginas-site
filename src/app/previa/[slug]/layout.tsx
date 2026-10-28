import type { Metadata } from "next";

/**
 * Prévias de lead ficam SEMPRE fora do índice: são páginas com o nome de uma
 * clínica real que ainda não é cliente e não aprovou o conteúdo. O link é
 * mandado direto pra pessoa no WhatsApp — não precisa e não deve ser
 * encontrável no Google.
 */
export const metadata: Metadata = {
  robots: { index: false, follow: false, nocache: true },
};

export default function PreviaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
