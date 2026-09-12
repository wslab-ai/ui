<script lang="ts">
  let {
    href,
    label,
    light = false,
  }: {
    href: string;
    label: string;
    light?: boolean;
  } = $props();
</script>

<a class="wsl-arrow-link" class:wsl-arrow-link--light={light} {href}>
  <span>{label}</span><span aria-hidden="true">↗</span>
</a>
