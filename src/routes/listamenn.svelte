<script>
  import { onMount } from "svelte";
  import { getAllListamenn } from "@api/contentful";
  import { listamenn } from "@stores";

  onMount(() => {
    getAllListamenn().then(data => {
      listamenn.set(data);
    });
  });
</script>

<svelte:head>
  <title>Listvitinn | Listamenn</title>
</svelte:head>

{#each $listamenn as listamadur}
  <p>{listamadur.fields.nafn}</p>
{/each}
