<script>
  import { onMount } from "svelte";
  import Header from "@components/Header.svelte";
  import { config } from "@shared/firebaseConfig";

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
