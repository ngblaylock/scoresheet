<script lang="ts">
  import { goto } from '$app/navigation';
  import { chartColors, getCurrentGame, setCurrentGame } from '$lib';
  import { nanoid } from 'nanoid';
  import { page } from '$app/state';
  import chroma from 'chroma-js';

  import MainContent from '$components/MainContent.svelte';
  import PlayersAddEdit from '$components/PlayersAddEdit.svelte';

  let sortOrder = $state('asc');
  let winnerOptions = [
    {
      label: 'Lowest Score Wins',
      value: 'asc',
    },
    {
      label: 'Highest Score Wins',
      value: 'desc',
    },
  ];

  let players = $state([{ name: '' }]);

  $effect(() => {
    const restart = page.url.searchParams.get('restart');
    if (restart === 'true') {
      const currentGame = getCurrentGame();
      if (currentGame?.players.length) {
        players = currentGame.players.map((p) => ({ name: p.name }));
      }
    } else {
      players = [{ name: '' }];
    }
  });

  let addPlayerForm: HTMLFormElement | undefined = $state();
  function createGame() {
    if (!addPlayerForm?.checkValidity()) {
      addPlayerForm?.reportValidity();
    } else {
      const game: G.Game = {
        id: Date.now(),
        players: players
          .filter((p) => p.name)
          .map((p, index) => ({
            ...p,
            playerId: nanoid(),
            chartColor: chartColors[index] || `${chroma.random()}`,
            rounds: [],
          })),
        preferredView: 'table',
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
