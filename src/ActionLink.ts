import { attr, html, type Template } from 'workstar';

export interface ActionLinkProps {
  href: string;
  label: string;
  light?: boolean;
}

export function ActionLink({
  href,
  label,
  light = false,
}: ActionLinkProps): Template {
  return html`<a
    ${attr('class', light ? 'wsl-button wsl-button--light' : 'wsl-button')}
    ${attr('href', href)}
    >${label}</a
  >`;
}
