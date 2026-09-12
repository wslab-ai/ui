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

<a class="wsl-button" class:wsl-button--light={light} {href}>{label}</a>
