<script lang="ts">
  import type { Snippet } from 'svelte'
  import Card from './Card.svelte'

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

  const technology: {
    [key: string]: { color: string; icon: string; name: string }
  } = {
    svelte: { color: '#ff3e0030', icon: '/logos/svelte.svg', name: 'Svelte' },
    typescript: {
      color: '#3178c640',
      icon: '/logos/typescript.svg',
      name: 'TypeScript',
    },
  }

  type Technology = keyof typeof technology
</script>

<Card {title} {body} href={link?.url}>
  <div class="footer">
    {#if link}
      <span class="link space-right">
        {link.name}
      </span>
    {/if}
    {#if technologies.length > 0}
      {#each technologies as tech}
        {@const item = technology[tech]}
        <div class="technology" style="--color: {item?.color}">
          <img src={item?.icon} alt="test" width="24" height="24" />
        </div>
      {/each}
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
