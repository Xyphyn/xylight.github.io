<script lang="ts">
  import type { Snippet } from 'svelte'
  import Card from './Card.svelte'
  import type { Technology } from './Technologies.svelte'
  import Technologies from './Technologies.svelte'

  let {
    link,
    title,
    body,
    technologies = [],
    ...props
  } = $props<{
    link?: { name: string; url: string }
    title: Snippet
    body: Snippet
    technologies?: Technology[]
  }>()
</script>

<Card {title} {body} href={link?.url}>
  <div class="footer">
    {#if link}
      <span class="link space-right">
        {link.name}
      </span>
    {/if}
    {#if technologies.length > 0}
      <Technologies itemSize={24} {technologies} />
    {/if}
  </div>
</Card>

<style>
  .link {
    max-width: max-content;
    flex-direction: row;
    gap: 3px;
    align-items: center;
    font-size: small;
    text-decoration: none;
    color: rgb(var(--link-fg));
  }

  .link:hover {
    text-decoration: underline;
  }

  .footer {
    display: flex;
    flex-direction: row;
    gap: 8px;
  }

  .space-right {
    margin-right: auto;
  }

  .technology {
    border-radius: 9999px;
    display: grid;
    place-items: center;
    background-color: var(--color);
    padding: 8px;
  }
</style>
