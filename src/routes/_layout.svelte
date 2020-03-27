<script>
  import Header from "@components/Header.svelte";
  export let segment;
</script>

<style>

</style>

<main>
  <Header {segment} />
  <slot />
</main>
