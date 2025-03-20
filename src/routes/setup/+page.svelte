<script lang="ts">
  import { goto } from '$app/navigation';
  import { setCurrentGame } from '$lib';
  import { nanoid } from 'nanoid';

  import MainContent from '$components/MainContent.svelte';
  import PlayersAddEdit from '$components/PlayersAddEdit.svelte';

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

  let players = $state([{ name: '' }]);

  let addPlayerForm: HTMLFormElement | undefined = $state();
  function createGame() {
    if (!addPlayerForm?.checkValidity()) {
      addPlayerForm?.reportValidity();
    } else {
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
  }
</script>

<MainContent>
  <PlayersAddEdit
    bind:players
    bind:addPlayerForm
  />
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
