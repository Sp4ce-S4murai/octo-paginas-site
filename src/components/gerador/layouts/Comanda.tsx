import { Check } from "lucide-react";
import { igHandle, subtitulo } from "@/lib/gerador/contact";
import type { LayoutProps } from "@/lib/gerador/types";
import { A, levels } from "./shared";
import s from "./Comanda.module.css";

/** Comanda: página em forma de cupom/recibo, em monoespaçada, sobre fundo de cor. */
export default function Comanda({ d, links, standalone }: LayoutProps) {
  const { H1, H2 } = levels(standalone);
  const sub = subtitulo(d);
  const ig = igHandle(d.instagram);
  return (
    <div className={s.site}>
      <div className={s.page}>
        <article className={s.paper}>
          <header className={s.head}>
            <H1 className={s.nome}>{d.nome}</H1>
            {sub && <p className={s.sub}>{sub}</p>}
          </header>

          {d.sobre && (
            <>
              <hr className={s.rule} />
              <p className={s.sobre}>{d.sobre}</p>
            </>
          )}

          {d.servicos.length > 0 && (
            <>
              <hr className={s.rule} />
              <H2 className={s.label}>Serviços</H2>
              <ul className={s.lines}>
                {d.servicos.map((x, i) => (
                  <li key={i}>
                    <span className={s.item}>{x}</span>
                    <span className={s.dots} aria-hidden="true" />
                    <Check size={16} aria-hidden="true" />
                  </li>
                ))}
              </ul>
            </>
          )}

          {d.horario.length > 0 && (
            <>
              <hr className={s.rule} />
              <H2 className={s.label}>Horários</H2>
              <ul className={s.plain}>
                {d.horario.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </>
          )}

          {d.endereco && (
            <>
              <hr className={s.rule} />
              <H2 className={s.label}>Endereço</H2>
              <p className={s.plain}>
                {d.endereco}
                {d.cidade ? `, ${d.cidade}` : ""}
              </p>
            </>
          )}

          <hr className={s.rule} />
          <div className={s.actions}>
            <A link={links.whatsapp} className={`${s.btn} ${s.primary}`}>Chamar no WhatsApp</A>
            <A link={links.telefone} className={s.btn}>Ligar</A>
            <A link={links.mapa} className={s.btn}>Como chegar</A>
            <A link={links.instagram} className={s.btn}>Instagram{ig ? ` @${ig}` : ""}</A>
          </div>

          <div className={s.barcode} aria-hidden="true" />
          <p className={s.thanks}>Obrigado pela visita</p>
        </article>
      </div>
    </div>
  );
}
