<script>
  import { onMount } from "svelte";
  import Header from "@components/Header/index.svelte";
  import Wrap from "@components/Wrap.svelte";
  import { config } from "@shared/firebaseConfig";
  import { sync } from "@api/contentful";

  export let segment;
  // start up Firebase
  onMount(() => {
    firebase.initializeApp(config);
    let db = firebase.firestore();
  });
</script>

<main>
  <Header {segment} />
  <slot />
</main>
