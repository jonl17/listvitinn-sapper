<script>
  import { stores } from "@sapper/app";

  const { page } = stores();

  let currentPath = $page.path;

  const unsubscribe = page.subscribe(() => {
    currentPath = $page.path;
  });

  const pages = [
    { name: "Sýningar", slug: "/syningar" },
    { name: "Listamenn", slug: "/listamenn" },
    { name: "Sýningarstaðir", slug: "/syningarstadir" },
    { name: "Um Listvitann", slug: "/um-listvitann" }
  ];
</script>

<style>
  nav {
    height: 100px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    box-sizing: border-box;
    padding: 0 100px 0 100px;
    align-items: center;
  }
  .anchor-wrap {
    display: flex;
    justify-content: space-between;
  }
  a {
    text-decoration: none;
  }
  p {
    position: relative;
  }
  #underline {
    position: absolute;
    height: 100%;
    width: 0%;
    transition: 0.2s ease-in-out;
    pointer-events: none;
    border-bottom: 2px solid;
    top: 0;
    left: 0;
  }
  .selected {
    width: 100% !important;
  }
  h1 {
    margin: 0;
  }
</style>

<nav>
  <h1>
    <a href="/">Listvitinn</a>
  </h1>
  <div class="anchor-wrap">
    {#each pages as page}
      <p>
        <a href={page.slug}>{page.name}</a>
        <span class:selected={currentPath === page.slug} id="underline" />
      </p>
    {/each}
  </div>
</nav>
