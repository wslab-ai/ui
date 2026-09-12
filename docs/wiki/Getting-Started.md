# Getting started

Install a specific public commit until the npm release is available:

```sh
npm install '@workstarlab/ui@https://codeload.github.com/wslab-ai/ui/tar.gz/<commit-sha>'
```

Import both stylesheets once in the application root:

```ts
import "@workstarlab/ui/tokens.css";
import "@workstarlab/ui/actions.css";
```

Use components from the package root:

```svelte
<script lang="ts">
  import { ActionLink, ArrowLink } from "@workstarlab/ui";
</script>

<ActionLink href="/contact" label="Start a project" />
<ArrowLink href="/services" label="Explore services" />
```

Requirements: Node.js 20 or later and Svelte 5. Component labels and route decisions belong to the consumer, not the package.
