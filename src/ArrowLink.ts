import { attr, html, type Template } from 'workstar';

export interface ArrowLinkProps {
  href: string;
  label: string;
  light?: boolean;
}

export function ArrowLink({
  href,
  label,
  light = false,
}: ArrowLinkProps): Template {
  return html`<a
    ${attr('class', light ? 'wsl-arrow-link wsl-arrow-link--light' : 'wsl-arrow-link')}
    ${attr('href', href)}
    ><span>${label}</span><span aria-hidden="true">↗</span></a
  >`;
}
