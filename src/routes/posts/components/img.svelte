<script lang="ts">
  let { alt, ...props } = $props()
</script>

<div class="img-container">
  <img {...props} />
  {#if alt}
    <span>{alt}</span>
  {/if}
</div>

<style>
  .img-container {
    border-radius: 1rem;
    border: 1px solid rgb(var(--card-border));
    padding: 0.5rem;
    position: relative;
    max-width: 100%;
    max-height: 100%;
  }

  .img-container > img {
    border-radius: 0.5rem;
    max-width: 100%;
    max-height: 100%;
  }

  div > span {
    position: absolute;
    font-size: smaller;
    bottom: 0rem;
    transform: translateY(50%);
    left: 1rem;
    background-color: rgb(var(--card-bg-secondary));
    padding: 0.25rem 0.5rem;
  }
</style>
