# Design tokens

Import `@workstarlab/ui/tokens.css` once. Tokens are CSS custom properties on `:root`:

| Group      | Examples                                    | Purpose                         |
| ---------- | ------------------------------------------- | ------------------------------- |
| Colors     | `--ink`, `--paper`, `--signal`              | Brand surfaces and emphasis     |
| Typography | `--font-sans`, `--font-display`, `--step-0` | Type families and fluid scale   |
| Spacing    | `--space-1` to `--space-6`, `--gutter`      | Fluid layout rhythm             |
| Layout     | `--max`, `--radius`, `--ease`               | Container width, radius, timing |

The values are defaults, not locked globals. Override them in a parent scope to theme a product. Do not use the orange signal color as the only carrier of meaning.

The website's accessibility preferences override selected color and font tokens at the document level; the UI package does not own the preference state.
