<script lang="ts">
  import Card from "$lib/Card.svelte"
  import Nav from "$lib/Nav.svelte"
  import { Icon, Newspaper } from "svelte-hero-icons"

  let { data, children } = $props()
</script>

<div class="layout">
  <nav class="leftbar">
    {#each data.posts as post}
      <Card href="/posts/{post.slug}" alt layout={false}>
        <div class="link">
          <span style="grid-area: icon; place-self: center;"><Icon src={Newspaper} solid size="32" /></span>
          <span style="font-size: x-large; font-weight: 600; height: max-content; grid-area: title;">{post.title}</span>
          <span style="grid-area: description;">{post.description}</span>
        </div>
      </Card>
    {/each}
  </nav>
  {@render children()}
</div>

<style>
  .layout {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1px;
  }

  .leftbar {
    display: none;
    flex-direction: column;
    row-gap: 1px;
    position: sticky;
    top: 0;
  }

  @media screen and (min-width: 900px) {
    .layout {
      grid-template-columns: 1fr 2fr;
    }
    .leftbar {
      display: flex;
    }
  }

  @media screen and (min-width: 1512px) {
    .layout {
      grid-template-columns: 1fr 2fr 1fr;
    }
  }
  
  .layout > * {
    padding: 0rem 0rem;
    box-shadow: 0 0 0 1px rgb(var(--card-border));
    margin: 0;
  }

  .leftbar a {
    text-decoration: none;
    color: var(--shell-fg);
  }

  .leftbar a:hover {
    text-decoration: underline;
  }

  .link {
    display: grid;
    grid-template-columns: 64px 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      'icon title'
      'icon description';
    column-gap: 4px;
  }
</style>