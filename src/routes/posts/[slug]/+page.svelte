<script lang="ts">
  import Card from '$lib/Card.svelte'
    import RelativeDate from '$lib/RelativeDate.svelte'

  let { data } = $props()
</script>

<div class="container">
  {#if data.meta}
    <div class="meta">
      <Card size="sm" alt shadow={false}>
        {#snippet title()}
          {data.meta.title}
        {/snippet}
        <RelativeDate date={new Date(data.meta.published)} />
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
  }

  .body {
    height: 100%;
    background-color: rgb(var(--card-bg));
    border: 1px solid rgb(var(--card-border));
    padding: 1.5rem;
    border-radius: 1rem;
    margin-top: 0;
    box-shadow: 0px 0px 15px -3px rgba(0,0,0,0.1), 0px -8px 15px -3px rgba(0,0,0,0.1);
    z-index: 50;
  }

  @media screen and (min-width: 768px) {
    .body {
      padding: 2rem;
    }
  }

  .meta {
    transform: scale(96%);
    transform-origin: bottom;
    margin-bottom: -8px !important;
    margin-left: auto;
    margin-right: auto;
    z-index: -10;
  }

  .meta > :global(*) {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: 0;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    z-index: inherit;
    
  }
</style>