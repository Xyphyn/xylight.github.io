<script lang="ts">
    import type { Snippet } from "svelte"

  let { children } = $props<{ children: Snippet }>()
</script>

<p>
  {@render children()}
</p>

<style>
  p {
    color: rgb(var(--shell-fg-p));
    line-height: 1.5;
  }
</style>
