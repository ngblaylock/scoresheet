<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/state';
  import { chartColors, setCurrentGame } from '$lib';

  async function setGame(game: G.Game) {
    setCurrentGame(game);

    if (page.route.id === '/game') {
      window.location.reload();
    } else {
      await goto('/game');
      document.getElementById('scoresheet-dev-btn')?.click();
    }
  }
  function setGame1() {
    const game = {
      id: 1741410613594,
      players: [
        {
          name: 'Brian',
          playerId: 'Vt9xZJ7LQw2yM8rB5pXNd',
          chartColor: '#C22D2D',
          rounds: [48, 58, 6, 0, 45, 5, 15, 20, 78, 28, -48, -9, null, 9, -10],
        },
        {
          name: 'Nathan',
          playerId: 'kP3fYzT6XqWJmNvB9R2LQ',
          chartColor: '#304BB5',
          rounds: [10, null, 0, 0, -23, 34, 144, 78, 4, 28, 48, 9, 0, 0, 0],
        },
        {
          name: 'Rachel',
          playerId: 'M_9RcwhH2TeXbjAqnI_ct',
          chartColor: '#E5DB21',
          rounds: [90, 2, 23, 42, 1, -8, 23, -18, 122, 3, 33, 3, 23, -12, -19],
        },
        {
          name: 'Natalie',
          playerId: 'AY3PsiKfvh-H0qXskUgrt',
          chartColor: '#31A033',
          rounds: [23, 3, 5, -90, 80, 12, 4, 23, 90, 3, 80, 23, 2, 1, 2],
        },
      ],
      sortOrder: 'asc' as const,
    };
    setGame(game);
  }
  function setGame2() {
    const game = {
      id: 1741414061359,
      players: [
        {
          name: 'George',
          playerId: 'M5pXNdVt9xZJ7LQw2yM8r',
          chartColor: chartColors[0],
          rounds: [412, 58, -8],
        },
        {
          name: 'Abraham',
          playerId: 'YzT6XqWJmNvB9R2LQkP3f',
          chartColor: chartColors[1],
          rounds: [10, null, 0],
        },
        {
          name: 'James',
          playerId: 'XNdVt9xZJ7LQw2yM8rP3f',
          chartColor: chartColors[2],
          rounds: [78, 13, 8],
        },
        {
          name: 'Thomas',
          playerId: 'qWJmNvB9R2LQkP3fYzT6X',
          chartColor: chartColors[3],
          rounds: [null, null, 4],
        },
      ],
      sortOrder: 'asc' as const,
    };
    setGame(game);
  }
</script>

<div class="font-cursive text-center text-sm-start">
  <GBtn
    id="scoresheet-dev-btn"
    variant="dev"
    class="btn-sm"
    data-bs-toggle="offcanvas"
    data-bs-target="#dev-offcanvas"
    aria-controls="dev-offcanvas"
  >
    Scoresheet Dev
  </GBtn>
</div>
<div
  class="offcanvas offcanvas-top text-bg-dev"
  tabindex="-1"
  id="dev-offcanvas"
  aria-labelledby="dev-offcanvas-label"
>
  <div class="offcanvas-header">
    <h5
      class="offcanvas-title"
      id="dev-offcanvas-label"
    >
      Dev Tools
    </h5>
    <GIconBtn
      icon="close"
      title="Close Offcanvas"
      data-bs-dismiss="offcanvas"
      class="ms-auto"
      variant="base-1"
    />
  </div>
  <div class="offcanvas-body">
    <GBtn
      href="https://nathanblaylock.com/uikit/"
      target="_blank"
      variant="light"
    >
      UI Kit
    </GBtn>
    <GBtn
      href="https://github.com/ngblaylock/scoresheet/projects?query=is%3Aopen"
      target="_blank"
      variant="light"
      iconLeft="gitHub"
    >
      GitHub Project
    </GBtn>
    <br />
    <br />
    <GBtn onclick={setGame1}>Set Game 1</GBtn>
    <GBtn onclick={setGame2}>Set Game 2</GBtn>
  </div>
</div>
