<script>
  import Card from '$lib/Card.svelte'
  import Project from '$lib/Project.svelte'
  import Technologies from '$lib/Technologies.svelte'
    import { AtSymbol, Calculator, CodeBracket, Icon, Newspaper, PaintBrush, PuzzlePiece, ServerStack, Sparkles } from 'svelte-hero-icons'
  import { fly, slide } from 'svelte/transition'


</script>

<article class="body">
<header class="heading">
  <h1 class="title fly-in">
    xylight
  <span style="font-weight:300;color:rgb(var(--shell-fg));">.dev</span>
</h1>

  <div class="footer fly-in" style="--animate-index: 1;">
    {#snippet link({ image, link, alt, adaptive = false })}
      <Card alt round size="xs" href={link}>
        <img src={image} width={28} height={28} alt={alt} class:adaptive-color={adaptive}>
      </Card>
    {/snippet}
    {@render link({ image: "/logos/github.svg", link: "https://github.com/Xyphyn", alt: "GitHub", adaptive: true })}
    {@render link({ image: "/logos/lemmy.svg", link: "https://lemdro.id/u/xylight", alt: "Lemmy", adaptive: false })}
    {@render link({ image: "/logos/bmc.svg", link: "https://buymeacoffee.com/xylight", alt: "Buy me a Coffee", adaptive: true })}
    {@render link({ image: "/logos/email.svg", link: "mailto:xylight@xylight.dev", alt: "Email", adaptive: true })}
    {@render link({ image: "/logos/matrix.svg", link: "https://matrix.to/#/@xylightsucks:matrix.org", alt: "Matrix", adaptive: true })}
  </div>
  <!-- <p class="description fade">UI Design — Software Development</p> -->
</header>
<section style="--animate-index: 2;" class="fly-in">
  <div class="grid grid-auto">
    <div style="grid-column: 1/-1">
      <Card icon={PaintBrush}>
        {#snippet body()}
          I'm a "developer" from California who primarily does UI design and software dev. 
          I prefer to use Svelte for web development, and Rust/Kotlin for everything else. 
        {/snippet}
      </Card>
    </div>
  </div>
</section>
<section style="--animate-index: 3;" class="fly-in">
  <h2 style="line-height: 1;">What I've made</h2>

  <div class="grid grid-auto">
    <div style="grid-column: 1/-1">
      <Project icon={AtSymbol} link={{ url: 'https://phtn.app', name: 'phtn.app'}} technologies={['svelte', 'typescript']}>
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
    <Project icon={AtSymbol} link={{ url: 'https://imagi.xylight.dev', name: 'imagi.xylight.dev' }} technologies={['svelte', 'typescript']}>
      {#snippet title()}
        Imagi
      {/snippet}
      {#snippet body()}
        A small "social platform" I made to help me learn how to use Pocketbase.
        The post list, comments, etc are automatically updated in real time.
      {/snippet}
    </Project>
    <Project icon={ServerStack} link={{ url: 'https://github.com/Xyphyn/Pulse', name: 'github.com' }}
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
    <Project icon={Calculator} link={{ url: 'https://github.com/Xyphyn/base-to-base', name: 'github.com' }}
    technologies={['rust']}>
      {#snippet title()}
        Base to Base
      {/snippet}
      {#snippet body()}
        A tiny command line utility I made to learn Rust. It lets you easily convert numbers
        between bases, such as seeing all the conversions of a hex number at once.
      {/snippet}
    </Project>
    <Project icon={PuzzlePiece} link={{ url: 'https://github.com/Xyphyn/xylo-bot', name: 'github.com' }}
    technologies={['typescript']}>
      {#snippet title()}
        Xylo
      {/snippet}
      {#snippet body()}
        Yet another Discord bot with a terrible name.
      {/snippet}
    </Project>
  </div>
</section>
<p style="font-size: 14px; text-align: center;">My username on most platforms is Xylight, or Xyphyn.</p>
</article>

<style>
  @keyframes gradientAnimation {
    0% {
      background-position-x: left;
    }
    50% {
      background-position-x: right;
    }
    0% {
      background-position-x: left;
    }
  }

  .body {
    box-shadow: 0 0 0 1px rgb(var(--card-border));
    background-color: rgb(var(--shell-bg));
    display: flex;
    flex-direction: column;
    gap: 1px;
    position: relative;
    z-index: 0;
    margin: 0;
  }

  .body > * {
    padding: 0rem 0rem;
    box-shadow: 0 0 0 1px rgb(var(--card-border));
    margin: 0;
  }

  .body h1,h2 { 
    padding: 2rem 2rem;
    margin: 0 !important;
  }

  .title {
    font-size: 3.5em;
    display: inline-flex;
    flex-direction: row;
    margin: 0;
    background: linear-gradient(90deg, rgba(148,255,203,1) 0%, rgba(108,194,255,1) 32%, rgba(107,255,105,1) 64%, rgba(49,117,255,1) 100%);
    background-clip: text;
    background-size: 200%;
    animation: gradientAnimation 5s infinite ease-in-out, 500ms cubic-bezier(0.075, 0.82, 0.165, 1) 0s forwards flyIn;
    color: transparent;
    position: relative;
  }

  .heading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 24rem;
    background: linear-gradient(to top, rgba(0, 255, 42, 0.025), rgba(108, 167, 255, 0.025));
  }

  .light-source {
    /* filter: blur(256px);
    z-index: -10;
    background: radial-gradient(circle, rgb(0, 255, 132), rgb(130, 108, 255)); */
    box-shadow: none;
  }

  @media screen and (min-width: 468px) {
    .title {
      font-size: 4em;
    }
  }

  @media screen and (min-width: 768px) {
    .title {
      font-size: 5em;
    }
  }

  .grid {
    display: grid;
    gap: 1px;
  }

  .grid-auto {
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (min-width: 768px) {
    .grid-auto {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (prefers-color-scheme: dark) {
    .adaptive-color {
      filter: invert(100%) hue-rotate(180deg) brightness(500%);
    }
  }

  .footer {
    display: flex;
    flex-direction: row;
    border: 1px solid rgb(var(--card-border));
    background-color: rgb(var(--card-bg));
    border-radius: 1rem;
    padding: 0.25rem;
    gap: .25rem;
  }

  :global(.footer > *) {
    box-shadow: none !important;
  }

  h2 {
    font-size: xx-large;
  }
</style>
