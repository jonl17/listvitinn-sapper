<script>
  import { onMount } from "svelte";
  import { getFilteredSyningar } from "@api/contentful";
  import { generateSyningarQueryParam } from "@shared/methods";

  // components
  import ItemWrap from "./itemWrap.svelte";
  import Image from "./image.svelte";
  import FilterTitle from "./filterTitle.svelte";
  import Info from "./info.svelte";

  export let item;

  const { syningar, filter } = item;
</script>

<style>
  #scroll-wrap {
    display: inline-grid;
    overflow-y: auto;
    height: 100%;
    grid-gap: 75px;
    position: relative;
    max-width: 25%;
  }
  div::-webkit-scrollbar {
    display: none;
  }
</style>

<div id="scroll-wrap">
  <FilterTitle title={filter} />
  {#each $syningar as syning}
    {#if syning}
      <ItemWrap>
        <Image image={syning.fields.mynd} />
        <Info title={syning.fields.title} />
      </ItemWrap>
    {/if}
  {/each}
</div>
