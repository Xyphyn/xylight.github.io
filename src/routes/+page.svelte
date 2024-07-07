<script>
  import Card from '$lib/Card.svelte'
  import Project from '$lib/Project.svelte'
  import Technologies from '$lib/Technologies.svelte';
</script>

<header class="heading center">
  <h1 class="title">
    xylight
    <span style="font-weight:300;">.dev</span>
  </h1>
  <!-- <p class="description fade">UI Design — Software Development</p> -->
</header>
<section>
  <h2 style="line-height: 1;">What I do</h2>
  <div class="grid grid-auto">
    <Card>
      {#snippet title()}
        UI Design
      {/snippet}
      {#snippet body()}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolores perferendis, aliquid cumque dicta, itaque minus ipsa earum minima animi, dolorem incidunt obcaecati corporis vitae blanditiis doloribus tempore possimus tenetur.
      {/snippet}
    </Card>
    <Card>
      {#snippet title()}
        Software Development
      {/snippet}
      {#snippet body()}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi quo qui tenetur possimus inventore, dicta, assumenda nisi unde architecto impedit nostrum? Nostrum facere aspernatur reprehenderit. Reiciendis ut magni assumenda nesciunt.
      {/snippet}
    </Card>
  </div>
</section>
<section>
  <h2 style="line-height: 1;">What I use</h2>
  <div class="technologies">
    <Technologies itemSize={32} technologies={['svelte', 'typescript', 'kotlin', 'typescript']} />
  </div>
</section>
<section>
  <h2 style="line-height: 1;">What I made</h2>

  <div class="grid grid-auto">
    <div style="grid-column: 1/-1">
      <Project link={{ url: 'https://phtn.app', name: 'phtn.app'}} technologies={['svelte', 'typescript']}>
        {#snippet title()}
        Photon
        {/snippet}
        {#snippet body()}
        A web client built with SvelteKit for the federated platform Lemmy.
        It is built primarily to be intuitive, fast, and with good design principles in mind.
        It has more features than the official client, with special customizations.
        {/snippet}
      </Project>
    </div>
    <Card>
      {#snippet title()}
        Imagi
      {/snippet}
      {#snippet body()}
        A small "social platform" I made to help me learn how to use Pocketbase.
        The post list, comments, etc are automatically updated in real time.
      {/snippet}
    </Card>
  </div>
</section>

<style>
  .center {
    text-align: center;
  }

  .title {
    font-size: 4em;
    display: inline-flex;
    flex-direction: row;
    margin: 0;
  }

  .heading {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .heading .description {
    font-size: 1.5rem;
  }

  .fade {
    color: rgb(var(--shell-fg-secondary));
  }

  .grid {
    display: grid;
    gap: 1rem;
  }

  .grid-auto {
    grid-template-columns: repeat(2, 1fr);
  }

  .technologies {
    display: flex;
    flex-direction: row;
    gap: .25rem;
    align-items: center;
    flex-wrap: wrap;
  }
</style>
