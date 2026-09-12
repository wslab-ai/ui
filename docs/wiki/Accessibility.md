# Accessibility

The components use native anchors so keyboard activation and link semantics work without JavaScript. Link labels are required props; decorative arrows are hidden from assistive technology.

The action stylesheet includes visible focus indicators, reduced-motion support, forced-colors borders and coarse-pointer target sizing. Consumers are still responsible for:

- meaningful localized labels;
- sufficient contrast after overriding tokens;
- a logical document structure and focus order;
- testing at mobile widths, high zoom, with keyboard and screen readers.

Prefer ordinary HTML over a new component unless the abstraction solves a real repeated problem. Accessibility is a property of the whole page, not a guarantee conferred by this package.
