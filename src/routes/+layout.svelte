<script lang="ts">
  import '../style/app.css'

  let { children } = $props()
</script>

<main class="shell">
  {@render children()}
</main>

<style>
  .shell {
    padding: 2rem;
    max-width: 48rem;
    margin-left: auto;
    margin-right: auto;
  }

  :global(.shell > *) {
    margin: 2rem 0rem;
  }

  :global(.shell > *:first-child) {
    margin-top: 0;
  }
  
  :global(.shell > *:last-child) {
    margin-bottom: 0;
  }
</style>
