<script lang="ts">
  import MainContent from '$components/MainContent.svelte';
</script>

<MainContent>
  <div class="container">
    <h1 class="font-cursive text-center">Edit Scores</h1>
    <h2 class="font-cursive text-center">Round 1</h2>
    <GDevNote>Edit scores by round</GDevNote>
  </div>

  {#snippet actions()}
    <div class="container">
      <div class="hstack justify-content-center">
        <GBtn href="/game/">Update Scores</GBtn>
      </div>
    </div>
  {/snippet}
</MainContent>