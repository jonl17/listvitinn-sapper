<script>
  import { onMount } from "svelte";
  import { getAllEntries } from "@api/contentful.js";

  let syningar = [];
  onMount(() => {
    getAllEntries({ content_type: "exhibition", order: "fields.title" }).then(
      data => (syningar = data)
    );
  });
</script>

<svelte:head>
  <title>Listvitinn | Sýningar</title>

</svelte:head>

{#each syningar as syning}
  <p>{syning.fields.title}</p>
{/each}
