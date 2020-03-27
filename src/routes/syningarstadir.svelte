<script>
  import { onMount } from "svelte";
  import { getAllEntries } from "@api/contentful";

  let syningarstadir = [];
  onMount(() => {
    getAllEntries("stadir", "fields.title").then(
      data => (syningarstadir = data)
    );
  });
</script>

<svelte:head>
  <title>Listvitinn | Sýningarstaðir</title>
</svelte:head>

{#each syningarstadir as syningarstadur}
  <p>{syningarstadur.fields.title}</p>
{/each}
