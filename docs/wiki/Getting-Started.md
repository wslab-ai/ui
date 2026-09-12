# Getting started

Install the released package:

```sh
npm install @workstarlab/ui
```

Import both stylesheets once in the application root:

```ts
import '@workstarlab/ui/tokens.css';
import '@workstarlab/ui/actions.css';
```

For components, install `workstar` too. Then use the package exports inside a `.workstar` file:

```sh
npm install workstar
```

```html
<script lang="ts">
  import { ActionLink, ArrowLink } from '@workstarlab/ui';
</script>

<Use component="{ActionLink}" href="/contact" label="Start a project" />
<Use component="{ArrowLink}" href="/services" label="Explore services" />
```

Requirements: Node.js 20 or later for development, and Workstar 0.1 for component use. CSS-only consumers do not need the Workstar runtime. Component labels and route decisions belong to the consumer, not the package.
