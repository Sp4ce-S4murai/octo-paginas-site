import { igHandle, subtitulo } from "@/lib/gerador/contact";
import type { LayoutProps } from "@/lib/gerador/types";
import { A, levels } from "./shared";
import s from "./Letreiro.module.css";

/** Letreiro: fachada de loja de bairro. Toldo listrado, placa emoldurada, quadro de serviços. */
export default function Letreiro({ d, links, standalone }: LayoutProps) {
  const { H1, H2 } = levels(standalone);
  const sub = subtitulo(d);
  const ig = igHandle(d.instagram);
  return (
    <div className={s.site}>
      <div className={s.page}>
        <div className={s.awning} aria-hidden="true" />
        <div className={s.fringe} aria-hidden="true" />

        <header className={s.plaque}>
          <div className={s.plaqueInner}>
            {d.ramo && (
              <p className={s.ramo}>
                <span>{d.ramo}</span>
              </p>
            )}
            <H1 className={s.nome}>{d.nome}</H1>
            {sub && d.ramo !== sub && <p className={s.sub}>{sub}</p>}
            <A link={links.whatsapp} className={s.cta}>
              Chamar no WhatsApp
            </A>
          </div>
        </header>

        {d.sobre && <p className={s.sobre}>{d.sobre}</p>}

        <div className={s.row}>
          {d.servicos.length > 0 && (
            <section className={s.board}>
              <H2 className={s.boardTitle}>Serviços</H2>
              <ul className={s.menu}>
                {d.servicos.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </section>
          )}

          {d.horario.length > 0 && (
            <section className={s.hang}>
              <div className={s.hangBody}>
                <H2 className={s.hangTitle}>Horários</H2>
                <ul>
                  {d.horario.map((x, i) => (
                    <li key={i}>{x}</li>
                  ))}
                </ul>
              </div>
            </section>
          )}
        </div>

        {(d.endereco || links.telefone || links.instagram) && (
          <section className={s.visit}>
            <H2 className={s.visitTitle}>Venha nos visitar</H2>
            {d.endereco && (
              <p className={s.addr}>
                {d.endereco}
                {d.cidade ? ` — ${d.cidade}` : ""}
              </p>
            )}
            <div className={s.links}>
              <A link={links.mapa} className={s.link}>Como chegar</A>
              <A link={links.telefone} className={s.link}>Ligar</A>
              <A link={links.instagram} className={s.link}>Instagram{ig ? ` @${ig}` : ""}</A>
            </div>
          </section>
        )}

        <footer className={s.foot}>
          {d.nome}
          {d.cidade ? ` · ${d.cidade}` : ""}
        </footer>
      </div>
    </div>
  );
}
