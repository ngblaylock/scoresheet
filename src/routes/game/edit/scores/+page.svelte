<script lang="ts">
  import MainContent from '$components/MainContent.svelte';
</script>

<MainContent>
  <div class="container">
    <h1 class="font-cursive text-center">Edit Scores</h1>

    <h2 class="font-cursive text-center mt-4">By Player</h2>
    <GBtn
      href="/game/edit/scores/player/"
      variant="base-2"
      iconRight="arrowRight"
      class="w-100 justify-content-between">Player Name</GBtn
    >

    <h2 class="font-cursive text-center mt-4">By Round</h2>
    <GBtn
      href="/game/edit/scores/round/"
      variant="base-2"
      iconRight="arrowRight"
      class="w-100 justify-content-between">Round 1</GBtn
    >
  </div>
</MainContent>
