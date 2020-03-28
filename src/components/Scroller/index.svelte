<script>
  import { onMount } from "svelte";
  import { getAllEntries } from "@api/contentful";
  import { filterEntries } from "@shared/methods";

  // components
  import Image from "./image.svelte";

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
    box-sizing: border-box;
    padding: 15px;
  }
  div::-webkit-scrollbar {
    display: none;
  }
  p {
    position: fixed;
    margin-left: -75px;
    margin-top: 40px;
    width: 100px;
    transform: rotate(-90deg);
    text-align: right;
  }
</style>

<div id="scroll-wrap">
  <p>{filter}</p>
  {#each syningar as syning}
    {#if syning}
      <div>
        <Image image={syning.fields.mynd} />
      </div>
    {/if}
  {/each}
</div>
