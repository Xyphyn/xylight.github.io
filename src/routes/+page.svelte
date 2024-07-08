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

  <div class="footer">
    <Card alt size="xs" href="https://github.com/Xyphyn">
      <img src="/logos/github.svg" width={28} height={28} alt="GitHub">
    </Card>
    <Card alt size="xs" href="mailto:xylight@xylight.dev">
      <img src="/logos/email.svg" width={28} height={28} alt="Email">
    </Card>
    <Card alt size="xs" href="https://lemdro.id/u/xylight">
      <img src="/logos/lemmy.svg" width={28} height={28} alt="Lemmy">
    </Card>
    <Card alt size="xs" href="#discord">
      <img src="/logos/discord.svg" width={28} height={28} alt="Discord">
    </Card>
  </div>
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
    <Technologies itemSize={32} technologies={['svelte', 'typescript', 'kotlin', 'rust']} />
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
    <Project link={{ url: 'https://imagi.xylight.dev', name: 'imagi.xylight.dev' }} technologies={['svelte', 'typescript']}>
      {#snippet title()}
        Imagi
      {/snippet}
      {#snippet body()}
        A small "social platform" I made to help me learn how to use Pocketbase.
        The post list, comments, etc are automatically updated in real time.
      {/snippet}
    </Project>
    <Project link={{ url: 'https://github.com/Xyphyn/Pulse', name: 'github.com' }}
    technologies={['kotlin']}>
      {#snippet title()}
        Pulse
      {/snippet}
      {#snippet body()}
        A Minestom server written to freshen my Kotlin skills. It has a few minigames,
        and thanks to the nature of Minestom, can handle thousands of players easily.
        The code is not good. 
      {/snippet}
    </Project>
    <Project link={{ url: 'https://github.com/Xyphyn/base-to-base', name: 'github.com' }}
    technologies={['rust']}>
      {#snippet title()}
        Base to Base
      {/snippet}
      {#snippet body()}
        A tiny command line utility I made to learn Rust. It lets you easily convert numbers
        between bases, such as seeing all the conversions of a hex number at once.
      {/snippet}
    </Project>
  </div>
</section>
<p style="font-size: 14px; text-align: center;">My username on most platforms is Xylight, or Xyphyn.</p>

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
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (min-width: 768px) {
    .grid-auto {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .technologies {
    display: flex;
    flex-direction: row;
    gap: .25rem;
    align-items: center;
    flex-wrap: wrap;
  }

  .footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: .5rem;
  }
</style>
