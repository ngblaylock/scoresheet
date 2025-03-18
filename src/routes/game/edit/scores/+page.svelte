<script lang="ts">
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import { getCompletedRoundsCount, getCurrentGame, getPlayers } from '$lib';

  import MainContent from '$components/MainContent.svelte';

  let players: string[] = $state([]);
  let rounds: number[] = $state([]);

  onMount(() => {
    const currentGame = getCurrentGame();
    if (!currentGame) goto('/game');
    players = getPlayers() || [];
    const completedRounds = getCompletedRoundsCount() || 0;
    
    for (let x = 1; x <= completedRounds; x++) {
      rounds.push(x);
    }
  });
</script>

<MainContent>
  <div class="container">
    <h1 class="font-cursive text-center">Edit Scores</h1>

    <h2 class="font-cursive text-center mt-4">By Player</h2>
    <div class="vstack">
      {#each players as player}
        <GBtn
          href="/game/edit/scores/player?name={player}"
          variant="base-2"
          iconRight="arrowRight"
          class="w-100 justify-content-between"
        >
          {player}
        </GBtn>
      {/each}
    </div>
    
    <h2 class="font-cursive text-center mt-4">By Round</h2>
    <div class="vstack">
      {#each rounds as round}
        <GBtn
          href="/game/edit/scores/round?round={round}"
          variant="base-2"
          iconRight="arrowRight"
          class="w-100 justify-content-between">Round {round}</GBtn
        >
      {/each}
    </div>

  </div>
</MainContent>
