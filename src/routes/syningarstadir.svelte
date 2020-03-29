<script>
  import { onMount } from "svelte";
  import { getAllSyningarStadir } from "@api/contentful";
  import { syningarstadir } from "@stores";

  onMount(() => {
    getAllSyningarStadir().then(data => syningarstadir.set(data));
  });
</script>

<svelte:head>
  <title>Listvitinn | Sýningarstaðir</title>
</svelte:head>

{#each $syningarstadir as syningarstadur}
  <p>{syningarstadur.fields.title}</p>
{/each}
