"use client";

import Link from "next/link";
import { CalendarCheck, Clock, FileText, MessageSquare, Stethoscope, User } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/analytics";

type Props = {
  /** Número no formato wa.me: só dígitos, com DDI e DDD (ex.: 5554999999999). */
  whatsapp: string;
  nomeClinica: string;
  tratamentos: string[];
  /** Origem para o rastreamento (GA4/Pixel). */
  origem: string;
};

/**
 * Formulário que NÃO envia nada para servidor: monta a mensagem e abre o
 * WhatsApp da clínica com o texto pronto. O paciente confere e envia.
 *
 * Por que assim: a página não precisa de backend, não guarda dado pessoal
 * (menos exposição LGPD para a clínica) e o contato cai no mesmo canal que
 * a recepção já usa. O evento de rastreamento leva só a origem — nome e
 * tratamento não vão para GA4/Pixel (tratamento é dado de saúde).
 */
export default function FormularioWhatsApp({ whatsapp, nomeClinica, tratamentos, origem }: Props) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const dados = new FormData(e.currentTarget);
    const nome = String(dados.get("nome") || "").trim();
    const tratamento = String(dados.get("tratamento") || "").trim();
    const periodo = String(dados.get("periodo") || "").trim();
    const obs = String(dados.get("observacoes") || "").trim();

    const linhas = [
      `Olá, ${nomeClinica}. Meu nome é ${nome} e gostaria de agendar uma consulta.`,
      tratamento && `Assunto: ${tratamento}.`,
      periodo && `Período de preferência: ${periodo}.`,
      obs && `Observações: ${obs}`,
    ].filter(Boolean);

    trackWhatsAppClick(origem);
    window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(linhas.join("\n"))}`, "_blank", "noopener,noreferrer");
  }

  const campo =
    "w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-700 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all";

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-100">
      <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
        <CalendarCheck className="w-5 h-5 text-ocean-500" />
        Pedir agendamento
      </h3>

      <div className="space-y-4">
        <div>
          <label htmlFor="nome" className="block text-sm font-medium text-slate-700 mb-1.5">
            Seu nome
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input type="text" id="nome" name="nome" required autoComplete="given-name" placeholder="Como podemos te chamar" className={campo} />
          </div>
        </div>

        <div>
          <label htmlFor="tratamento" className="block text-sm font-medium text-slate-700 mb-1.5">
            Assunto (opcional)
          </label>
          <div className="relative">
            <Stethoscope className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <select id="tratamento" name="tratamento" className={`${campo} appearance-none bg-white`} defaultValue="">
              <option value="">Prefiro explicar na conversa</option>
              {tratamentos.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="periodo" className="block text-sm font-medium text-slate-700 mb-1.5">
            Melhor período (opcional)
          </label>
          <div className="relative">
            <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <select id="periodo" name="periodo" className={`${campo} appearance-none bg-white`} defaultValue="">
              <option value="">Qualquer horário</option>
              <option value="manhã">Manhã</option>
              <option value="tarde">Tarde</option>
              <option value="noite">Noite</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="observacoes" className="block text-sm font-medium text-slate-700 mb-1.5">
            Observações (opcional)
          </label>
          <div className="relative">
            <FileText className="absolute left-3 top-3 w-4 h-4 text-slate-500" />
            <textarea id="observacoes" name="observacoes" rows={3} placeholder="Ex.: prefiro sábado" className={`${campo} resize-none`} />
          </div>
        </div>

        <div className="flex items-start gap-2 pt-2">
          <input type="checkbox" id="consentimento" required className="mt-1 w-4 h-4 rounded border-slate-300 text-ocean-500 focus:ring-ocean-500" />
          <label htmlFor="consentimento" className="text-xs text-slate-600 leading-relaxed">
            Concordo em enviar estes dados à clínica pelo WhatsApp para tratar do agendamento, conforme a{" "}
            <Link href="/privacidade" className="text-ocean-600 underline hover:text-ocean-700">
              Política de Privacidade
            </Link>
            .
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="w-full mt-6 flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm bg-green-700 hover:bg-green-800 text-white shadow-md hover:shadow-lg transition-all"
      >
        <MessageSquare className="w-4 h-4" />
        Abrir conversa no WhatsApp
      </button>

      <p className="mt-4 text-xs text-slate-600 text-center">
        Nada é enviado a este site. O WhatsApp abre com a mensagem pronta para você conferir antes de mandar.
      </p>
    </form>
  );
}
