<script lang="ts">
  import MainContent from '$components/MainContent.svelte';
  import ScoresChart from '$components/ScoresChart.svelte';
  import ScoresPodium from '$components/ScoresPodium.svelte';
  import ScoresTable from '$components/ScoresTable.svelte';
  import { getTotals } from '$lib';
  import type { IconName } from 'nathanblaylock.com/icons';
  let scItems: { label: string; value: unknown; icon?: IconName }[] = $state([
    {
      label: 'Table View',
      value: 'table',
      icon: 'table',
    },
    {
      label: 'Podium View',
      value: 'podium',
      icon: 'poll',
    },
    {
      label: 'Graph View',
      value: 'chart',
      icon: 'chartLine',
    },
  ]);
  let view = $state('podium');

  let gameTotals = $state(getTotals());
</script>

<MainContent>
  <div class="container h-100 d-flex flex-column">
    <h1 class="font-cursive text-center">Final Scores</h1>
    {#if view === 'table'}
      <ScoresTable {gameTotals} />
    {:else if view === 'chart'}
      <ScoresChart {gameTotals} />
    {:else if view === 'podium'}
      <ScoresPodium {gameTotals} />
    {/if}
  </div>
  {#snippet actions()}
    <div class="container">
      <div class="text-center mb-3">
        <GSegmentedControl
          items={scItems}
          bind:group={view}
        />
      </div>
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
