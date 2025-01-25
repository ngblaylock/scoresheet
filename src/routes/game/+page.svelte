<script lang="ts">
  import MainContent from '$components/MainContent.svelte';
  import { Btn, IconBtn } from 'nathanblaylock.com';
</script>

<MainContent>
  <div class="container">
    <div class="hstack">
      <h1 class="font-cursive flex-fill">Current Scores</h1>
      <IconBtn variant="base-i1" icon="pencil" title="Edit" />
      <IconBtn variant="base-i1" icon="chartLine" title="Chart View" />
    </div>
    ...table view
  </div>
  {#snippet actions()}
  <div class="container">
    <div class="hstack justify-content-center">
      <Btn href="/game/enter">Add Scores</Btn>
      <Btn href="/game/final" variant="base-2">End Game</Btn>
    </div>
  </div>
  {/snippet}
</MainContent>
