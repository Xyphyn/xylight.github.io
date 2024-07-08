<script lang="ts">
  import type { Snippet } from 'svelte'
  import { headerID } from '../header.js'

  let { id, children } = $props<{ id?: string, children: Snippet }>()
</script>

<h1 use:headerID {id} class="heading">
  {@render children()}
</h1>

<style>
  .heading:first-child {
    margin-top: 0;
  }

  .heading {
    margin-top: 1rem;
  }
</style>