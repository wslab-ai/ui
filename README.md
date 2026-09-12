# @workstarlab/ui

Workstar Lab's public Svelte 5 UI foundations: design tokens and accessible, localizable action links. This is a small versioned design system, not a replacement for native HTML or a general-purpose component framework.

The package is currently installed from the [public GitHub repository](https://github.com/wslab-ai/ui) because npm publication requires a new Workstar Lab token with 2FA bypass. The npm package name is specified in this manifest but **not yet published**.

## Install from GitHub

```sh
npm install '@workstarlab/ui@https://codeload.github.com/wslab-ai/ui/tar.gz/<commit-sha>'
```

Import styles once at the application root:

```ts
import "@workstarlab/ui/tokens.css";
import "@workstarlab/ui/actions.css";
```

Use the semantic Svelte components with localized labels:

```svelte
<script lang="ts">
  import { ActionLink, ArrowLink } from "@workstarlab/ui";
</script>

<ActionLink href="/contact" label="Start a project" />
<ArrowLink href="/services" label="Explore services" />
```

`ActionLink` and `ArrowLink` render native anchors. Pass `light` to use their light-background variants. The library does not contain copy or route decisions.

For native buttons, apply the `wsl-button` class; never use an anchor to submit a form. Styles support reduced motion, forced colors, coarse pointers and keyboard focus.

## Development

```sh
npm install
npm run verify
```

Requires Node.js 20+ and Svelte 5. Licensed under MIT. The [Wiki source](docs/wiki/Home.md) covers installation, tokens, components and accessibility; GitHub Wiki is enabled for the repository.
