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
  .body {
    height: 100%;
    padding: 1.5rem;
    margin-top: 0;
    z-index: 50;
    font-size: large;
    box-shadow: 0 0 0 1px rgb(var(--card-border));
    background-color: rgb(var(--card-bg-secondary));
  }

  .meta {
    /* width: calc(100% - 1rem); */
    /* transform-origin: bottom; */
    /* margin-bottom: -8px !important; */
    margin-left: auto;
    margin-right: auto;
    z-index: -10;
  }

  :global(.meta .title) {
    font-size: xx-large;
  }

  :global(.meta .body) {
    font-size: large !important;
  }
</style>