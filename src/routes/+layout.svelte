<script lang="ts">
  import '../style/app.css'

  let { children } = $props()
</script>

<div class="layout">
  <main class="shell">
    {@render children()}
  </main>
  <div class="background-dots"></div>
</div>

<style>
  .layout {
    z-index: 0;
  }

  .shell {
    padding: 2rem;
    max-width: 48rem;
    place-self: center;
    margin-left: auto;
    margin-right: auto;
    z-index: 50;
    position: relative;
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

  .background-dots {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-image: radial-gradient(rgb(var(--shell-bg-dots)) 2px, transparent 0);
    background-size: 20px 20px;
    mask-image: linear-gradient(to right, rgb(0, 0, 0, 1), rgb(0, 0, 0, 0), rgb(0, 0, 0, 1));
  }
</style>
