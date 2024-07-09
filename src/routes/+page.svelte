<script>
  import Card from '$lib/Card.svelte'
  import Project from '$lib/Project.svelte'
  import Technologies from '$lib/Technologies.svelte'
    import { AtSymbol, Calculator, CodeBracket, Icon, PaintBrush, PuzzlePiece, ServerStack, Sparkles } from 'svelte-hero-icons'
  import { slide } from 'svelte/transition'


</script>

<article class="body">
<header class="heading center">
  <h1 class="title">
    xylight
  <span style="font-weight:300;color:rgb(var(--shell-fg));">.dev</span>
</h1>

  <div class="footer">
    <Card alt size="xs" href="https://github.com/Xyphyn">
      <img src="/logos/github.svg" width={28} height={28} alt="GitHub" class="adaptive-color">
    </Card>
    <Card alt size="xs" href="mailto:xylight@xylight.dev">
      <img src="/logos/email.svg" width={28} height={28} alt="Email" class="adaptive-color">
    </Card>
    <Card alt size="xs" href="https://lemdro.id/u/xylight">
      <img src="/logos/lemmy.svg" width={28} height={28} alt="Lemmy">
    </Card>
    <Card alt size="xs" href="https://buymeacoffee.com/xylight">
      <img src="/logos/bmc.svg" width={28} height={28} alt="Buy me a Coffee" class="adaptive-color">
    </Card>
  </div>
  <!-- <p class="description fade">UI Design — Software Development</p> -->
</header>
<section>
  <h2 style="line-height: 1; margin-top: 0;">What I do</h2>
  <div class="grid grid-auto">
    <Card icon={PaintBrush}>
      {#snippet title()}
        Web Design
      {/snippet}
      {#snippet body()}
        I enjoy making new designs for UI and such, even if it's unconventional. This website
        is the result of me experimenting with a serif and sepia style for a website.        
      {/snippet}
    </Card>
    <Card icon={CodeBracket}>
      {#snippet title()}
        Software Development
      {/snippet}
      {#snippet body()}
        I'll occasionally write small pieces of software, especially if there's a repetitive task
        I need to automate. I often try new programming languages when I write these. Base-to-base, a number converter,
        helped me learn rust and it's very useful to convert hexadecimal to decimal and back.
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

  h2 {
    margin-top: 3rem;
  }

  .center {
    text-align: center;
  }

  .title {
    font-size: 3em;
    display: inline-flex;
    flex-direction: row;
    margin: 0;
    background: linear-gradient(90deg, rgba(255,77,49,1) 0%, rgba(255,205,108,1) 32%, rgba(255, 173, 105,1) 74%, rgba(255,77,49,1) 100%);
    background-clip: text;
    background-size: 200%;
    animation: gradientAnimation 10s infinite ease-in-out;
    color: transparent;
    position: relative;
  }

  @media (prefers-color-scheme: dark) {
    .title {
      background-image: linear-gradient(90deg, rgba(148,255,203,1) 0%, rgba(108,194,255,1) 32%, rgba(107,255,105,1) 64%, rgba(49,117,255,1) 100%);
    }
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

  @media (prefers-color-scheme: dark) {
    .adaptive-color {
      filter: invert(100%) hue-rotate(180deg) brightness(500%); 
    }
  }

  .body {
    padding: 1.5rem;
  }

  @media screen and (min-width: 768px) {
    .body {
      padding: 2rem;
    }
  }
</style>
