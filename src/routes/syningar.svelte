<script>
  import { onMount } from "svelte";
  import { getAllSyningar } from "@api/contentful.js";
  import { syningar } from "@stores";

  onMount(() => {
    getAllSyningar().then(data => {
      syningar.set(data);
    });
  });
</script>

<svelte:head>
  <title>Listvitinn | Sýningar</title>

</svelte:head>

{#each $syningar as syning}
  <p>{syning.fields.title}</p>
{/each}
