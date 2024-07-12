<script lang="ts">
  import type { Snippet } from 'svelte'
  import { Icon, type IconSource } from 'svelte-hero-icons'

  let { title, body, children, shadow = false, round = false,
    layout = true, href, size = 'md', alt = false, icon, ...props } = $props<{
    title?: Snippet<[any]>
    body?: Snippet<[any]>,
    children?: Snippet<[any]>,
    shadow?: boolean,
    round?: boolean,
    layout?: boolean,
    href?: string,
    size?: Size,
    alt?: boolean,
    icon?: IconSource
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
    <div class="title">
      <span>
        {@render title()}
      </span>
      {#if icon}
        <div class="icon">
          <Icon
            src={icon}
            size="18"
            micro
          />
        </div>
      {/if}
    </div>
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
    box-shadow:0 0 0 1px rgb(var(--card-border));
    transition: background-color 100ms;
    text-decoration: none;
    fill: rgb(var(--card-fg));
    position: relative;
    z-index: 1;
  }

  .card:not(.card-alt):hover {
    background-color: rgb(var(--card-bg-hover));
    cursor: pointer;
  }

  .card-alt {
    background-color: rgb(var(--card-bg-secondary));
  }

  .card-alt:hover {
    background-color: rgb(var(--card-bg-secondary-hover)) !important;
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
    font-weight: 700;
    font-size: 1.4em;
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
  }

  .body {
    margin: 0;
    font-size: 0.9em;
    max-width: 32rem;
  }

  .icon {
    background: rgb(var(--card-bg));
    border-radius: 999px;
    width: 24px;
    height: 24px;
    padding: .25rem;
    display: grid;
    place-items: center;
    border: 1px solid rgb(var(--card-border));
    color: rgb(var(--accent-bg))
  }
</style>
