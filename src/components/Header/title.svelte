<script>
  import { onMount } from "svelte";
  let text = "Listvitinn";
</script>

<style>
  h1 {
    margin: 0;
    position: relative;
  }
  a {
    text-decoration: none;
  }
</style>

<h1>
  <a href="/">
    {#each text as char, i}
      <span>{char}</span>
    {/each}
  </a>
</h1>
