<script lang="ts">
  import type { IconName } from 'nathanblaylock.com/icons';
  import {
    getCurrentGame,
    getTotals,
    setCurrentGame,
    getPreferredView,
    setPreferredView,
  } from '$lib';
  import { goto } from '$app/navigation';
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
      value: 'chart',
      icon: 'chartLine',
    },
  ]);
  let view = $state(getPreferredView());

  let game = $state(getCurrentGame());
  let gameTotals = $state(getTotals());

  onMount(() => {
    if (!game) goto('/setup');
  });

  let winnerDeterminateOptions = $state([
    { label: 'Lowest Score Wins', value: 'asc' },
    { label: 'Highest Score Wins', value: 'desc' },
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

{#if game}
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
            <li class="px-3 mb-n2">
              <GRadioGroup
                items={winnerDeterminateOptions}
                bind:group={winnerDeterminate}
                onchange={updateCurrentGame}
              />
            </li>
          </ul>
        </div>
      </div>
      {#if view === 'table'}
        <ScoresTable {gameTotals} />
      {:else}
        <ScoresChart {gameTotals} />
      {/if}
    </div>
    {#snippet actions()}
      <div class="container">
        <div class="text-center mb-3">
          <GSegmentedControl
            items={scItems}
            bind:group={view}
            onchange={setPreferredView(view)}
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
{/if}
