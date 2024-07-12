<script lang="ts">
  import type { Snippet } from "svelte"

  let { children } = $props<{ children: Snippet }>()
</script>

<code class="codeblock">
  {@render children()}
</code>

<style>
  .codeblock {
    background-color: rgb(var(--card-bg-secondary));
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    font-family: monospace;
  }
</style>
