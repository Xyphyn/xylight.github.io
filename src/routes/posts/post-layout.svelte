<script context="module" lang="ts">
  import h1 from "./components/h1.svelte"
  import h2 from "./components/h2.svelte"
  import h3 from "./components/h3.svelte"
  import code from "./components/code.svelte"
  import p from "./components/p.svelte"
  import img from "./components/img.svelte"

  export { h1, h2, h3, code, p, img }
</script>

<script lang="ts">
  const { children } = $props<{ children: any }>()
</script>

{@render children()}
