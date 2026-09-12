# Action links

`ActionLink` and `ArrowLink` both render native `<a>` elements. They accept `href`, `label`, and optional `light` props.

```html
<Use component="{ActionLink}" href="/contact" label="Contact us" />
<Use component="{ArrowLink}" href="/work" label="See work" light />
```

Import `@workstarlab/ui/actions.css` once to style them. The same stylesheet exposes the `wsl-button` class for native submit buttons:

```html
<button class="wsl-button" type="submit">Send request</button>
```

Use buttons for actions and anchors for navigation. Keep labels in the application's localization data. The arrow is decorative and hidden from screen readers in `ArrowLink`.
