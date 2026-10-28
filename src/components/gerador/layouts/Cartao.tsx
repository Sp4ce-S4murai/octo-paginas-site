import { Clock, AtSign, MapPin, MessageCircle, Phone } from "lucide-react";
import { igHandle, iniciais, subtitulo } from "@/lib/gerador/contact";
import type { LayoutProps } from "@/lib/gerador/types";
import { A, levels } from "./shared";
import s from "./Cartao.module.css";

/** Cartão: página de links, uma coluna estreita, tudo a um toque. */
export default function Cartao({ d, links, standalone }: LayoutProps) {
  const { H1, H2 } = levels(standalone);
  const sub = subtitulo(d);
  const ig = igHandle(d.instagram);
  return (
    <div className={s.site}>
      <div className={s.page}>
        <header className={s.head}>
          <div className={s.avatar} aria-hidden="true">{iniciais(d.nome)}</div>
          <H1 className={s.nome}>{d.nome}</H1>
          {sub && <p className={s.sub}>{sub}</p>}
        </header>

        {d.sobre && <p className={s.sobre}>{d.sobre}</p>}

        <nav className={s.buttons} aria-label="Contato">
          <A link={links.whatsapp} className={`${s.btn} ${s.primary}`}>
            <MessageCircle size={20} aria-hidden="true" /> Chamar no WhatsApp
          </A>
          <A link={links.telefone} className={s.btn}>
            <Phone size={20} aria-hidden="true" /> Ligar
          </A>
          <A link={links.mapa} className={s.btn}>
            <MapPin size={20} aria-hidden="true" /> Como chegar
          </A>
          <A link={links.instagram} className={s.btn}>
            <AtSign size={20} aria-hidden="true" /> Instagram{ig ? ` @${ig}` : ""}
          </A>
        </nav>

        {d.servicos.length > 0 && (
          <section className={s.card}>
            <H2 className={s.cardTitle}>Serviços</H2>
            <ul className={s.chips}>
              {d.servicos.map((x, i) => (
                <li key={i}>{x}</li>
              ))}
            </ul>
          </section>
        )}

        {(d.horario.length > 0 || d.endereco) && (
          <section className={s.card}>
            {d.horario.length > 0 && (
              <>
                <H2 className={s.cardTitle}>
                  <Clock size={16} aria-hidden="true" /> Horários
                </H2>
                <ul className={s.plain}>
                  {d.horario.map((x, i) => (
                    <li key={i}>{x}</li>
                  ))}
                </ul>
              </>
            )}
            {d.endereco && (
              <p className={s.addr}>
                {d.endereco}
                {d.cidade ? `, ${d.cidade}` : ""}
              </p>
            )}
          </section>
        )}
      </div>
    </div>
  );
}
