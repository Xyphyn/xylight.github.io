<script lang="ts">
  import type { Snippet } from 'svelte'
  import Card from './Card.svelte'
  import type { Technology } from './Technologies.svelte'
  import Technologies from './Technologies.svelte'
  import { Icon, Link } from 'svelte-hero-icons'

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
        <Icon src={Link} size="16" micro />
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
    font-size: small;
    text-decoration: none;
    color: rgb(var(--link-fg));
    align-items: center;
    display: inline-flex;
  }

  .link:hover {
    text-decoration: underline;
  }

  .footer {
    margin-top: auto;
    display: flex;
    flex-direction: row;
    align-items: end;
    gap: 8px;
  }

  .space-right {
    margin-right: auto;
  }
</style>
