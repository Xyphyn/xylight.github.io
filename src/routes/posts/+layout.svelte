<script lang="ts">
  let { data, children } = $props()
</script>

<div class="layout">
  <nav class="sidebar">
    {#each data.posts as post}
      <a href="/posts/{post.slug}">{post.title}</a>
    {/each}
  </nav>
  {@render children()}
</div>

<style>
  .layout {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
  }

  .sidebar {
    display: flex;
    flex-direction: column;
    gap: .25rem;
    margin: 2rem;
  }

  .sidebar a {
    text-decoration: none;
    color: var(--shell-fg);
  }

  .sidebar a:hover {
    text-decoration: underline;
  }
</style>