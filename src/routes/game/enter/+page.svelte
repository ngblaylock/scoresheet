<script lang="ts">
  import { nanoid } from 'nanoid';
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
          // Change up the player ID to randomize tie breakers after each round.
          foundPlayer.playerId = nanoid();
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
            <div
              class="animate__animated animate__fadeIn animate__delay-1s"
              style="--animate-delay: {index * 100}ms"
            >
              <CardEnterScore
                label={player.name}
                bind:score={player.score}
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
