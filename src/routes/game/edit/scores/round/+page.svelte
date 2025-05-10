<script lang="ts">
  import { onMount, tick } from 'svelte';
  import { goto } from '$app/navigation';
  import { page } from '$app/state';
  import { getCurrentGame, getPlayers, setCurrentGame } from '$lib';

  import MainContent from '$components/MainContent.svelte';
  import CardEnterScore from '$components/CardEnterScore.svelte';

  let round = $state(0);
  let players: G.Player[] = $state([]);
  onMount(() => {
    const currentGame = getCurrentGame();
    if (currentGame) {
      round = Number(page.url.searchParams.get('round')) || 0;
      if (!round) goto('/game');
      players = currentGame.players;
    } else {
      goto('/game');
    }
  });

  function updateScores(e: SubmitEvent) {
    e.preventDefault();
    const game = getCurrentGame();
    if (game) {
      game.players = players;
      setCurrentGame(game);
    }
    goto('/game');
  }
</script>

<MainContent>
  <form
    onsubmit={updateScores}
    id="edit-scores"
  >
    <div class="container">
      <h1 class="font-cursive text-center">Edit Scores</h1>
      <h2 class="font-cursive text-center">{round}</h2>
      <div class="vstack">
        {#each players as player, index}
          <div class="animate__animated animate__fadeIn animate__delay-1s" style="--animate-delay: {index * 100}ms">
            <CardEnterScore
              label={player.name}
              bind:score={player.rounds[round - 1]}
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
          form="edit-scores">Update Scores</GBtn
        >
      </div>
    </div>
  {/snippet}
</MainContent>
