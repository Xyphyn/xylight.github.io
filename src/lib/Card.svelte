<script lang="ts">
  import type { Snippet } from 'svelte'

  let { title, body, children, shadow = true, round = true,
    layout = true, href, size = 'md', alt = false, ...props } = $props<{
    title?: Snippet<[any]>
    body?: Snippet<[any]>,
    children?: Snippet<[any]>,
    shadow?: boolean,
    round?: boolean,
    layout?: boolean,
    href?: string,
    size?: Size,
    alt?: boolean
  }>()

  const sizes: {
    [key: string]: string
  } = {
    none: '',
    xs: 'card-xs',
    sm: 'card-sm',
    md: 'card-md'
  }

  type Size = keyof typeof sizes
</script>

<svelte:element
  this={href ? 'a' : props.onclick ? 'button' : 'div'}
  href={href}
  class:card-shadow={shadow}
  class:card-round={round}
  class:card-layout={layout}
  class:card-alt={alt}
  class="card {sizes[size]}"
>
  {#if title}
    <span class="title">{@render title()}</span>
  {/if}
  {#if body}
    <p class="body">{@render body()}</p>
  {/if}
  {#if children}
  {@render children()}
  {/if}
</svelte:element>

<style>
  .card {
    background-color: rgb(var(--card-bg));
    color: rgb(var(--card-fg));
    border: 1px solid rgb(var(--card-border));
    transition: background-color 100ms;
    text-decoration: none;
    fill: rgb(var(--card-fg));
  }

  .card-alt {
    background-color: rgb(var(--card-bg-secondary));
  }

  .card:hover {
    background-color: rgb(var(--card-bg-hover));
    cursor: pointer;
  }

  .card-xs {
    padding: 0.5rem 0.5rem;
  }

  .card-sm {
    padding: 1rem 1rem;
  }

  .card-md {
    padding: 1.5rem 1.5rem;
  }

  .card-shadow {
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.05);
  }

  .card-round {
    border-radius: 0.75rem;
  }

  .card-layout {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .title {
    font-weight: 500;
    font-size: large;
  }

  .body {
    margin: 0;
    font-size: 0.9em;
    max-width: 32rem;
  }
</style>
