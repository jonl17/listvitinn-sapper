<script>
  import { onMount } from "svelte";
  import { getAllEntries } from "@api/contentful";

  let listamenn = [];
  onMount(() => {
    getAllEntries({ content_type: "artist", order: "fields.nafn" }).then(
      data => (listamenn = data)
    );
  });
</script>

<svelte:head>
  <title>Listvitinn | Listamenn</title>
</svelte:head>

{#each listamenn as listamadur}
  <p>{listamadur.fields.nafn}</p>
{/each}
