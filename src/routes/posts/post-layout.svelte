<script context="module" lang="ts">
  import h1 from "./components/h1.svelte"
  import h2 from "./components/h2.svelte"
  import h3 from "./components/h3.svelte"

  export { h1, h2, h3 }
</script>

<script lang="ts">
  const { children } = $props<{ children: any }>()
</script>

{@render children()}
