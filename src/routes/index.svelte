<script>
  import Scroller from "@components/Scroller/index.svelte";
  import { onMount } from "svelte";
  import { getFilteredSyningar } from "@api/contentful";
  import { filteredSyningar } from "@stores";
  import { generateSyningarQueryParam } from "@shared/methods";

  onMount(() => {
    for (let item of filteredSyningar) {
      let query = generateSyningarQueryParam(item.filter);
      getFilteredSyningar(query).then(data => item.syningar.set(data));
      console.log(item);
    }
  });
</script>

<style>
  #outer-wrap {
    overflow: hidden;
  }
  #inner-wrap {
    height: 100vh;
    width: 100%;
    margin-top: -100px;
    position: relative;
    width: 100%;
    backface-visibility: hidden;
    will-change: overflow;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 12.5% 5% 0%;
    position: relative;
  }
</style>

<svelte:head>
  <title>Listvitinn</title>
</svelte:head>

<div id="outer-wrap">
  <div id="inner-wrap">

    {#each filteredSyningar as item}
      <Scroller {item} />
    {/each}

  </div>
</div>
