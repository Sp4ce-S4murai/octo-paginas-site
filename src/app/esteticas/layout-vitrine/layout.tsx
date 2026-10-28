import type { Metadata } from "next";

/**
 * Demo com dados de estabelecimento fictício. Fica fora do índice do Google
 * de propósito: conteúdo/dado estruturado de negócio inexistente em página
 * indexável é risco de penalização. Ela continua acessível pelo link direto,
 * que é como ela é usada na prospecção.
 */
export const metadata: Metadata = {
  robots: { index: false, follow: true },
};

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
