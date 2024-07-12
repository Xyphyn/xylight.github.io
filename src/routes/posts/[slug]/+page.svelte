<script lang="ts">
  import Card from '$lib/Card.svelte'
    import RelativeDate from '$lib/RelativeDate.svelte'

  let { data } = $props()
</script>

<div class="container">
  {#if data.meta}
    <div class="meta">
      <Card size="md" alt>
        {#snippet title()}
        {data.meta.title}
        {/snippet}
        {#snippet body()}
          {#if data.meta.description}
            {data.meta.description}
          {/if}
        {/snippet}
      </Card>
    </div>
  {/if}

  <div class="body">
    <svelte:component this={data.content} />
  </div>
</div>

<style>
  .container {
    z-index: 0;
    margin: 2rem 0;
    width: 100%;
  }

  .body {
    height: 100%;
    background-color: white;
    padding: 1rem;
    border-radius: 1rem;
    margin-top: 0;
    z-index: 50;
    font-size: large;
  }

  @media (prefers-color-scheme: dark) {
    .body {
      background-color: rgb(var(--card-bg-secondary));
    }
  }

  @media screen and (min-width: 768px) {
    .body {
      padding: 2rem;
    }
  }

  .meta {
    /* width: calc(100% - 1rem); */
    /* transform-origin: bottom; */
    /* margin-bottom: -8px !important; */
    margin-left: auto;
    margin-right: auto;
    z-index: -10;
    margin: 1rem;
  }

  :global(.meta .title) {
    font-size: xx-large;
  }

  :global(.meta .body) {
    font-size: large !important;
  }
</style>