import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Política de Privacidade | OCTO Páginas",
  description: "Como a OCTO Páginas trata os dados enviados pelos formulários de contato e agendamento.",
};

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white shadow-sm border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 sm:h-20">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-ocean-500 transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">
          Política de Privacidade
        </h1>

        <div className="space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-slate-800 mb-2">
              1. Quem trata seus dados
            </h2>
            <p>
              Pedro Filipe da Silva Rebello, CNPJ 68.612.682/0001-27,
              é responsável pelo tratamento dos dados pessoais coletados
              através deste site e de suas páginas de clientes.
              Contato: (54) 9405-8603 (WhatsApp) ou{" "}
              <a
                href="mailto:contato@octopaginas.com.br"
                className="text-ocean-500 hover:underline"
              >
                contato@octopaginas.com.br
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-800 mb-2">
              2. Quais dados coletamos e para quê
            </h2>
            <p>
              Quando você preenche um formulário de contato ou agendamento,
              coletamos nome, telefone e, quando informado, e-mail e o
              tratamento de interesse. Usamos esses dados exclusivamente para
              retornar seu contato e dar andamento à sua solicitação — não
              usamos para outra finalidade nem compartilhamos com terceiros
              para fins de marketing.
            </p>
            <p className="mt-3">
              No gerador de prévia (/gerador), os dados que você digita
              ficam apenas no seu navegador e não são enviados ao nosso
              servidor. Eles só chegam até nós, pelo WhatsApp, se você clicar
              em "Enviar pelo WhatsApp" e concordar com o envio. Usamos essas
              informações apenas para montar e enviar a sua proposta.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-800 mb-2">
              3. Cookies e ferramentas de medição
            </h2>
            <p>
              Este site pode usar Google Analytics (GA4) e Meta Pixel para
              entender quantas pessoas visitam a página e clicam no botão de
              WhatsApp. Essas ferramentas não identificam você pelo nome e os
              dados agregados são usados apenas para melhorar a página.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-800 mb-2">
              4. Seus direitos (LGPD)
            </h2>
            <p>
              Você pode solicitar a qualquer momento a confirmação, correção
              ou exclusão dos seus dados, entrando em contato pelo e-mail{" "}
              <a
                href="mailto:contato@octopaginas.com.br"
                className="text-ocean-500 hover:underline"
              >
                contato@octopaginas.com.br
              </a>{" "}
              ou WhatsApp informados acima. Atendemos solicitações de exclusão
              em até 15 dias úteis.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-800 mb-2">
              5. Atualizações desta política
            </h2>
            <p>
              Esta política pode ser atualizada periodicamente. A versão
              vigente é sempre a publicada nesta página, com a data da última
              atualização abaixo.
            </p>
            <p className="mt-2 text-xs text-slate-500">
              Última atualização: 24/08/2026
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
