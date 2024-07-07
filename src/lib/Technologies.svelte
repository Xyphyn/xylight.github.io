<script lang="ts">
  let { technologies, itemSize = 32 } = $props<{
    technologies: Technology[]
    itemSize?: number
  }>()

  const technology: {
    [key: string]: { color: string; icon: string; name: string }
  } = {
    svelte: {
      color: '#ff3e0030',
      icon: '/logos/svelte.svg',
      name: 'Svelte',
    },
    typescript: {
      color: '#3178c640',
      icon: '/logos/typescript.svg',
      name: 'TypeScript',
    },
    kotlin: {
      color: '#6b57ff40',
      icon: '/logos/kotlin.svg',
      name: 'Kotlin',
    },
  }

  type Technology = keyof typeof technology
</script>

{#each technologies as tech}
  {@const item = technology[tech]}

  <div
    class="technology"
    style="--color: {item?.color}; width: {itemSize}; height: {itemSize};"
  >
    <img src={item?.icon} alt={item?.name} width={itemSize} height={itemSize} />
  </div>
{/each}

<style>
  .technology {
    border-radius: 9999px;
    display: grid;
    place-items: center;
    background-color: var(--color);
    padding: 12px;
  }
</style>
