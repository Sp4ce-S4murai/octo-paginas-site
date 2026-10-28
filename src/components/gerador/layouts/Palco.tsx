import { igHandle, subtitulo } from "@/lib/gerador/contact";
import type { LayoutProps } from "@/lib/gerador/types";
import { A, levels } from "./shared";
import s from "./Palco.module.css";

/** Palco: tela dividida. Painel escuro fixo com o nome gigante, coluna clara com a lista. */
export default function Palco({ d, links, standalone }: LayoutProps) {
  const { H1, H2 } = levels(standalone);
  const sub = subtitulo(d);
  const ig = igHandle(d.instagram);
  return (
    <div className={s.site}>
      <div className={s.page}>
        <header className={s.stage}>
          <div className={s.stageIn}>
            <H1 className={s.nome}>{d.nome}</H1>
            {sub && <p className={s.sub}>{sub}</p>}
            <A link={links.whatsapp} className={s.cta}>
              Chamar no WhatsApp
            </A>
          </div>
        </header>

        <main className={s.content}>
          {d.sobre && <p className={s.sobre}>{d.sobre}</p>}

          {d.servicos.length > 0 && (
            <section>
              <H2 className={s.label}>Serviços</H2>
              <ul className={s.services}>
                {d.servicos.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </section>
          )}

          {d.horario.length > 0 && (
            <section>
              <H2 className={s.label}>Horários</H2>
              <ul className={s.hours}>
                {d.horario.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </section>
          )}

          {(d.endereco || links.telefone || links.instagram) && (
            <section>
              <H2 className={s.label}>Contato</H2>
              {d.endereco && (
                <p className={s.addr}>
                  {d.endereco}
                  {d.cidade ? `, ${d.cidade}` : ""}
                </p>
              )}
              <p className={s.inline}>
                <A link={links.mapa} className={s.u}>Como chegar</A>
                <A link={links.telefone} className={s.u}>Ligar</A>
                <A link={links.instagram} className={s.u}>Instagram{ig ? ` @${ig}` : ""}</A>
              </p>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}
