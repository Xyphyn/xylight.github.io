<nav>
  <a href="/" class="home">xylight.dev</a>
</nav>

<style>
  nav {
    display: flex;
    flex-direction: row;
    padding: 1rem 1rem;
    gap: 0.5rem;
    align-items: center;
    height: 100%;
    position: fixed;
    z-index: 50;
    background-color: rgba(var(--shell-bg), 0.5);
    backdrop-filter: blur(32px);
    box-shadow:
      0 0 0 1px rgb(var(--card-border)),
      0px 10px 34px -6px rgba(0, 0, 10, 0.1);

    width: calc(100% - 5rem);
    height: 2rem;
    max-width: 48rem;

    top: 1rem;
    left: 50%;
    transform: translateX(-50%);

    border-radius: 9999px;
  }

  nav .home {
    font-weight: 700;
    margin-right: auto;
    font-size: larger;
    padding: 0.25rem 0.5rem;
  }

  nav .home:hover {
    color: rgb(var(--accent-bg));
  }

  nav a {
    font-weight: 500;
    text-decoration: none;
    padding: 0.5rem 0.5rem;
    color: rgb(var(--shell-fg));
    transition: 150ms background-color;
    border-radius: 0.5rem;
  }

  nav a:hover {
    background-color: rgb(var(--card-bg-hover));
  }
</style>
