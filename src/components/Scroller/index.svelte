<script>
  import { onMount } from "svelte";
  import { getAllEntries } from "@api/contentful";

  // components
  import ItemWrap from "./itemWrap.svelte";
  import Image from "./image.svelte";
  import FilterTitle from "./filterTitle.svelte";
  import Info from "./info.svelte";

  export let filter;
  let syningar = [];
  let queryParam = "";

  const today = new Date();
  onMount(() => {
    if (filter === "opna bráðum") {
      queryParam = {
        content_type: "exhibition",
        order: "fields.title",
        "fields.opnun[gt]": today
      };
    } else if (filter === "opnar") {
      queryParam = {
        content_type: "exhibition",
        order: "fields.title",
        "fields.opnun[lte]": today,
        "fields.lokun[gte]": today
      };
    } else if (filter === "afstaðnar") {
      queryParam = {
        content_type: "exhibition",
        order: "fields.title",
        "fields.lokun[lt]": today
      };
    }

    getAllEntries(queryParam).then(data => (syningar = data));
  });
</script>

<style>
  #scroll-wrap {
    display: inline-grid;
    overflow-y: auto;
    height: 100%;
    grid-gap: 75px;
    position: relative;
    max-width: 25%;

    /* border-right: 1px solid lightgray;
    padding-right: 2.5%; */
  }
  div::-webkit-scrollbar {
    display: none;
  }
</style>

<div id="scroll-wrap">
  <FilterTitle title={filter} />
  {#each syningar as syning}
    {#if syning}
      <ItemWrap>
        <Image image={syning.fields.mynd} />
        <Info title={syning.fields.title} />
      </ItemWrap>
    {/if}
  {/each}
</div>
