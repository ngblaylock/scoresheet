<script lang="ts">
  import { onMount, tick } from 'svelte';
  import { goto } from '$app/navigation';
  import { page } from '$app/state';
  import { getCurrentGame, setCurrentGame } from '$lib';

  import MainContent from '$components/MainContent.svelte';
  import CardEnterScore from '$components/CardEnterScore.svelte';

  let name = $state('');
  let rounds: G.Round[] = $state([]);
  onMount(() => {
    const currentGame = getCurrentGame();
    if (currentGame) {
      name = page.url.searchParams.get('name') || '';
      const foundPlayer = currentGame.players.find((player) => player.name === name);
      if (foundPlayer) {
        rounds = foundPlayer.rounds;
      } else {
        goto('/game');
      }
    } else {
      goto('/game');
    }
  });

  function updateScores(e: SubmitEvent) {
    e.preventDefault();
    const game = getCurrentGame();
    if (game) {
      const foundPlayer = game.players.find((player) => player.name === name);
      if (foundPlayer) {
        foundPlayer.rounds = $state.snapshot(rounds);
      }
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
      <h2 class="font-cursive text-center">{name}</h2>
      <div class="vstack">
        {#each rounds as round, index}
          <div
            class="animate__animated animate__fadeIn animate__delay-1s"
            style="--animate-delay: {index * 100}ms"
          >
            <CardEnterScore
              label="Round {index + 1}"
              bind:score={rounds[index]}
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
