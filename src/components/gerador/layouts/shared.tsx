import type { ReactNode } from "react";
import type { LinkProps } from "@/lib/gerador/types";

/** No site publicado o nome é o h1; dentro do gerador (que já tem h1) vira h2. */
export function levels(standalone: boolean) {
  return { H1: standalone ? "h1" : "h2", H2: standalone ? "h2" : "h3" } as const;
}

/** Link de ação. Some se o cliente não preencheu o dado. */
export function A({
  link,
  className,
  children,
}: {
  link?: LinkProps;
  className?: string;
  children: ReactNode;
}) {
  if (!link) return null;
  return (
    <a className={className} href={link.href} onClick={link.onClick} target={link.target} rel={link.rel}>
      {children}
    </a>
  );
}
