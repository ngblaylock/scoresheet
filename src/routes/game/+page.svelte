<script lang="ts">
  import MainContent from '$components/MainContent.svelte';
</script>

<MainContent>
  <div class="container">
    <div class="hstack">
      <h1 class="font-cursive flex-fill">Current Scores</h1>
      <GIconBtn variant="base-i1" icon="pencil" title="Edit" />
      <GIconBtn variant="base-i1" icon="chartLine" title="Chart View" />
    </div>
    <GDevNote>Table View</GDevNote>
  </div>
  {#snippet actions()}
  <div class="container">
    <div class="hstack justify-content-center">
      <GBtn href="/game/enter">Add Scores</GBtn>
      <GBtn href="/game/final" variant="base-2">End Game</GBtn>
    </div>
  </div>
  {/snippet}
</MainContent>
