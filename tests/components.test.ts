import { describe, expect, it } from 'vitest';
import { renderToString } from 'workstar/server';
import { ActionLink, ArrowLink } from '../src/index.js';

describe('Workstar action links', () => {
  it('renders a localized native link and escapes its label', () => {
    const markup = renderToString(
      ActionLink({ href: '/contact', label: 'Talk & plan' }),
    );
    expect(markup).toContain('class="wsl-button"');
    expect(markup).toContain('href="/contact"');
    expect(markup).toContain('Talk &amp; plan');
  });

  it('renders a decorative arrow and a light-background variant', () => {
    const markup = renderToString(
      ArrowLink({ href: '/services', label: 'Explore', light: true }),
    );
    expect(markup).toContain('class="wsl-arrow-link wsl-arrow-link--light"');
    expect(markup).toContain('href="/services"');
    expect(markup).toContain('<span aria-hidden="true">↗</span>');
  });

  it('rejects unsafe URL schemes', () => {
    expect(() =>
      renderToString(
        ActionLink({ href: 'javascript:alert(1)', label: 'Unsafe' }),
      ),
    ).toThrow('Unsafe URL');
  });
});
