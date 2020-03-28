<script>
  import { stores } from "@sapper/app";

  // components
  import Title from "./title.svelte";

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

  p {
    position: relative;
  }
  #underline {
    position: absolute;
    height: 100%;
    width: 0%;
    transition: 0.2s ease-in-out;
    pointer-events: none;
    border-bottom: 1px solid gold;
    top: 0;
    left: 0;
  }
  .selected {
    width: 100% !important;
  }
  a {
    text-decoration: none;
  }
</style>

<nav>
  <Title />
  <div class="anchor-wrap">
    {#each pages as page}
      <p>
        <a rel="prefetch" href={page.slug}>{page.name}</a>
        <span class:selected={currentPath === page.slug} id="underline" />
      </p>
    {/each}
  </div>
</nav>
