<script lang="ts">
  import MainContent from '$components/MainContent.svelte';
  import { GBtn, GDevNote } from 'nathanblaylock.com';
</script>

<MainContent>
  <div class="container">
    <h1 class="font-cursive text-center">Round X Scores</h1>
    <GDevNote>Enter Scores</GDevNote>
  </div>
  {#snippet actions()}
    <div class="container">
      <div class="hstack justify-content-center">
        <GBtn href="/game">Complete Round X</GBtn>
        <GBtn href="/game/final" variant="base-2">End Game</GBtn>
      </div>
    </div>
  {/snippet}
</MainContent>
