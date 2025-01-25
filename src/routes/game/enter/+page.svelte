<script lang="ts">
  import MainContent from '$components/MainContent.svelte';
  import { Btn, IconBtn } from 'nathanblaylock.com';
</script>

<MainContent>
  <div class="container">
    <h1 class="font-cursive text-center">Round X Scores</h1>
    ...Enter Scores
  </div>
  {#snippet actions()}
    <div class="container">
      <div class="hstack justify-content-center">
        <Btn href="/game">Complete Round X</Btn>
        <Btn href="/game/final" variant="base-2">End Game</Btn>
      </div>
    </div>
  {/snippet}
</MainContent>
