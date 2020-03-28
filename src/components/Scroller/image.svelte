<script>
  export let image;

  let src = image.fields.file.url;
  let alt = image.fields.title;
</script>

<style>
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  img:hover {
    cursor: pointer;
  }
</style>

<img {src} {alt} />
