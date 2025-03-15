<script lang="ts">
  import { goto } from '$app/navigation';
  import MainContent from '$components/MainContent.svelte';
    import { setCurrentGame } from '$lib';
    import { nanoid } from 'nanoid';
  import { tick } from 'svelte';

  let players = $state([{ name: '' }]);
  let sortOrder = $state('desc');
  let winnerOptions = [
    {
      label: 'Highest Score Wins',
      value: 'desc',
    },
    {
      label: 'Lowest Score Wins',
      value: 'asc',
    },
  ];

  async function addPlayer() {
    players.push({ name: '' });
    await tick;
    const x = document.getElementById(`new-player-${players.length - 1}`);
    x?.focus();
  }

  function createGame() {
    const game: G.Game = {
      id: Date.now(),
      players: players
        .filter((p) => p.name)
        .map((p) => ({
          ...p,
          playerId: nanoid(),
          rounds: [],
        })),
      sortOrder: sortOrder as 'desc' | 'asc',
    };
    setCurrentGame(game);
    goto('/game/enter');
  }
</script>

<MainContent>
  <div class="container">
    <h1 class="text-center font-cursive">Add Players</h1>
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
    <div class="container d-flex flex-column align-items-center gap-3">
      <div>
        <GRadioGroup
          items={winnerOptions}
          bind:group={sortOrder}
        />
      </div>
      <div class="text-center">
        <GBtn
          disabled={!players.filter((p) => p.name).length}
          onclick={createGame}
        >
          Start Game
        </GBtn>
      </div>
    </div>
  {/snippet}
</MainContent>
