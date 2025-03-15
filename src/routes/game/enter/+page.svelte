<script lang="ts">
  import { goto } from '$app/navigation';
  import MainContent from '$components/MainContent.svelte';
  import { getCurrentGame, getCurrentRound, getPlayers, setCurrentGame } from '$lib';
  import { onMount } from 'svelte';

  let round: number = $state(0);
  let players: { name: string; score: number | null }[] = $state([]);

  onMount(() => {
    round = getCurrentRound() || 1;
    const tempPlayers = getPlayers();    
    if (!tempPlayers) {
      goto('/game');
    } else {
      players = tempPlayers.map((player) => ({ name: player, score: null }));
    }
  });

  function completeRound(e: Event) {
    e.preventDefault();
    const currentGame = getCurrentGame();
    if (currentGame) {
      players.forEach((player) => {
        const foundPlayer = currentGame.players.find((cgp) => cgp.name === player.name);
        if (foundPlayer) {
          foundPlayer.rounds.push(player.score);
        }
      });
      setCurrentGame(currentGame);
    }
    goto('/game');
  }
</script>

{#if round}
  <MainContent>
    <form
      onsubmit={completeRound}
      id="add-form"
    >
      <div class="container">
        <h1 class="font-cursive text-center">Round {round} Scores</h1>

        <div class="vstack">
          {#each players as player, index}
            <div class="card text-bg-base-2 shadow-sm px-4 py-2 hstack">
              <label
                class="font-cursive flex-fill"
                for="score-add-{index}">{player.name}</label
              >
              <input
                class="form-control"
                style="width: 50%;"
                bind:value={player.score}
                type="number"
                id="score-add-{index}"
              />
            </div>
          {/each}
        </div>
      </div>
    </form>
    {#snippet actions()}
      <div class="container">
        <div class="hstack justify-content-center">
          <GBtn
            type="submit"
            form="add-form">Complete Round {round}</GBtn
          >
          <GBtn
            href="/game/final"
            variant="base-2">End Game</GBtn
          >
        </div>
      </div>
    {/snippet}
  </MainContent>
{/if}

<style lang="scss">
  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type='number'] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
</style>
