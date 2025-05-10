<script lang="ts">
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import { getCurrentGame, getCurrentRound, getPlayers, setCurrentGame } from '$lib';
  import CardEnterScore from '$components/CardEnterScore.svelte';
  import MainContent from '$components/MainContent.svelte';

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

  function completeRound(e: Event, gotoRoute: string = '/game') {
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
    goto(gotoRoute);
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
            <CardEnterScore
              label={player.name}
              bind:score={player.score}
            />
          {/each}
        </div>
      </div>
    </form>
    {#snippet actions()}
      <div class="container">
        <div class="hstack justify-content-center">
          <GBtn
            type="submit"
            form="add-form"
          >
            Complete Round {round}
          </GBtn>
          <GBtn
            onclick={(e: Event) => completeRound(e, '/game/final')}
            variant="base-2"
          >
            End Game
          </GBtn>
        </div>
      </div>
    {/snippet}
  </MainContent>
{/if}
