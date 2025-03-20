<script lang="ts">
  import { goto } from '$app/navigation';
  import MainContent from '$components/MainContent.svelte';
  import { getCurrentGame, getCompletedRoundsCount, setCurrentGame } from '$lib';
  import { nanoid } from 'nanoid';
  import { onMount } from 'svelte';
  import PlayersAddEdit from '$components/PlayersAddEdit.svelte';

  let players: { name: string; playerId: string }[] = $state([]);
  const currentGame = getCurrentGame();

  onMount(async () => {
    if (currentGame) {
      players = currentGame.players.map((player) => {
        return {
          name: player.name,
          playerId: player.playerId,
        };
      });
    } else {
      goto('/game');
    }
  });

  let addPlayerForm: HTMLFormElement | undefined = $state();

  function updatePlayers() {
    if (!addPlayerForm?.checkValidity()) {
      addPlayerForm?.reportValidity();
    } else {
      if (currentGame) {
        let newPlayers: G.Player[] = [];
        players.forEach((player) => {
          const foundPlayer = currentGame?.players.find((p) => p.playerId === player.playerId);
          if (foundPlayer) {
            newPlayers.push({
              name: player.name,
              playerId: foundPlayer.playerId,
              rounds: foundPlayer.rounds,
            });
          } else {
            newPlayers.push({
              name: player.name,
              playerId: nanoid(),
              rounds: Array(getCompletedRoundsCount()).fill(null),
            });
          }
        });
        currentGame.players = newPlayers;
        setCurrentGame(currentGame);
      }
      goto('/game');
    }
  }
</script>

<MainContent>
  <PlayersAddEdit
    bind:players
    bind:addPlayerForm
  />

  {#snippet actions()}
    <div class="container">
      <div class="hstack justify-content-center">
        <GBtn onclick={updatePlayers}>Update Players</GBtn>
        <GBtn
          variant="base-2"
          onclick={() => history.back()}>Cancel</GBtn
        >
      </div>
    </div>
  {/snippet}
</MainContent>
