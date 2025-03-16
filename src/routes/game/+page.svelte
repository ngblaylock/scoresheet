<script lang="ts">
  import type { IconName } from 'nathanblaylock.com/icons';
  import { getCurrentGame, getTotals, setCurrentGame } from '$lib';
  import { goto } from '$app/navigation';
  import { browser } from '$app/environment';
  import { onMount } from 'svelte';

  import MainContent from '$components/MainContent.svelte';
  import ScoresTable from '$components/ScoresTable.svelte';
  import ScoresChart from '$components/ScoresChart.svelte';

  let scItems: { label: string; value: unknown; icon?: IconName }[] = $state([
    {
      label: 'Table View',
      value: 'table',
      icon: 'table',
    },
    {
      label: 'Graph View',
      value: 'graph',
      icon: 'chartLine',
    },
  ]);
  let view = $state(scItems[0].value);

  let game = $state(getCurrentGame());
  let gameTotals = $state(getTotals());

  onMount(() => {
    if (!game) goto('/');
  });

  let winnerDeterminateOptions = $state([
    { label: 'Highest Score Wins', value: 'desc' },
    { label: 'Lowest Score Wins', value: 'asc' },
  ]);

  let winnerDeterminate = $state(getCurrentGame()?.sortOrder);

  function updateCurrentGame() {
    if (game) {
      game.sortOrder = winnerDeterminate as 'asc' | 'desc';
      setCurrentGame(game);
      game = getCurrentGame();
      gameTotals = getTotals();
    }
  }
</script>

<MainContent>
  <div class="container">
    <div class="hstack">
      <h1 class="font-cursive flex-fill">Current Scores</h1>
      <div class="dropdown">
        <GIconBtn
          variant="base-i1"
          icon="pencil"
          title="Edit"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        />
        <ul
          class="dropdown-menu"
          style="--bs-dropdown-min-width: 14rem;"
        >
          <li>
            <a
              class="dropdown-item"
              href="/game/edit/players/">Edit Players</a
            >
          </li>
          <li>
            <a
              class="dropdown-item"
              href="/game/edit/scores/">Edit Scores</a
            >
          </li>
          <li><hr class="dropdown-divider" /></li>
          <li class="px-3">
            <GRadioGroup
              items={winnerDeterminateOptions}
              bind:group={winnerDeterminate}
              legend="Car Brands"
              onchange={updateCurrentGame}
            />
          </li>
        </ul>
      </div>
    </div>
    {#if view === 'table'}
      <ScoresTable {gameTotals} />
    {:else}
      <ScoresChart />
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
        <GBtn href="/game/enter">Add Scores</GBtn>
        <GBtn
          href="/game/final"
          variant="base-2"
        >
          End Game
        </GBtn>
      </div>
    </div>
  {/snippet}
</MainContent>
