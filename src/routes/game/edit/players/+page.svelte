<script lang="ts">
  import { goto } from '$app/navigation';
  import MainContent from '$components/MainContent.svelte';
  import { getCurrentGame, getCompletedRoundsCount, setCurrentGame } from '$lib';
  import { nanoid } from 'nanoid';
  import { onMount, tick } from 'svelte';
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

  async function addPlayer() {
    players.push({ name: '', playerId: '' });
    await tick;
    const x = document.getElementById(`new-player-${players.length - 1}`);
    x?.focus();
  }

  function updatePlayers() {
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
</script>

<MainContent>
  <div class="container">
    <h1 class="text-center font-cursive">Edit Players</h1>
    <form autocomplete="off">
      <GSortableCards bind:items={players}>
        {#snippet children(player, index)}
          <div class="hstack align-items-end py-1 px-2 flex-fill">
            <GTextInput
              class="flex-fill"
              label="Player"
              bind:value={player.name}
              hideLabel
              id="new-player-{index}"
            />
            <GIconBtn
              icon="close"
              variant="base-i4"
              title="Remove"
              type="button"
              onclick={() => {
                players.splice(index, 1);
              }}
            />
          </div>
        {/snippet}
      </GSortableCards>
    </form>
    <div class="text-center">
      <GBtn
        class="mt-3"
        variant="base-1"
        iconLeft="plus"
        onclick={addPlayer}
      >
        Add Player
      </GBtn>
    </div>
  </div>

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
