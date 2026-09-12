# @workstarlab/ui

Design tokens, action styles, and two small [Workstar](https://github.com/wslab-ai/workstar) components for Workstar Lab. Workstar is the UI framework; this package supplies an optional visual layer.

## Install

```sh
npm install @workstarlab/ui
```

Import styles once at the application root:

```ts
import '@workstarlab/ui/tokens.css';
import '@workstarlab/ui/actions.css';
```

The CSS exports work without Workstar. To use the component exports, also install the framework:

```sh
npm install workstar
```

In a `.workstar` component, use the native-link components with localized labels:

```html
<script lang="ts">
  import { ActionLink, ArrowLink } from '@workstarlab/ui';
</script>

<Use component="{ActionLink}" href="/contact" label="Start a project" />
<Use component="{ArrowLink}" href="/services" label="Explore services" />
```

`ActionLink` and `ArrowLink` render native anchors. Pass `light` to use their light-background variants. The library does not contain copy or route decisions.

For native buttons, apply the `wsl-button` class; never use an anchor to submit a form. Styles support reduced motion, forced colors, coarse pointers and keyboard focus.

## Development

```sh
npm install
npm run verify
```

Requires Node.js 20+ for development; the components require Workstar 0.1. Licensed under MIT. The [Wiki source](docs/wiki/Home.md) covers installation, tokens, components and accessibility.
