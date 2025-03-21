<script lang="ts">
  import MainContent from '$components/MainContent.svelte';
</script>

<MainContent>
  <div class="container">
    <h1 class="font-cursive text-center">Final Scores</h1>
    TODO: PODIUM
  </div>
  {#snippet actions()}
    <div class="container">
      <div class="hstack justify-content-center">
        <GBtn href="/setup/?restart=true">Restart</GBtn>
        <GBtn
          href="/"
          variant="base-2">New Game</GBtn
        >
      </div>
    </div>
  {/snippet}
</MainContent>
