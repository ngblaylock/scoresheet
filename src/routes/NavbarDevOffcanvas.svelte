<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/state';

  async function setGame(game: G.Game) {
    window.localStorage.setItem('currentGame', JSON.stringify(game));

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
          rounds: [48, 58, 6, 45, 45, 5, 15, 20, 78, 28, 48, -9, null, 9, 0],
        },
        {
          name: 'Nathan',
          rounds: [10, null, 0, 0, null, null, null, 78, 4, 28, 48, 9, 0, 0, 0],
        },
      ],
      sortOrder: 'desc' as const,
    };
    setGame(game);
  }
  function setGame2() {
    const game = {
      id: 1741414061359,
      players: [
        {
          name: 'George',
          rounds: [412, 58, -8],
        },
        {
          name: 'Abraham',
          rounds: [10, null, 0],
        },
        {
          name: 'James',
          rounds: [78, 13, 8],
        },
        {
          name: 'Thomas',
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
    >
      GitHub Project
    </GBtn>
    <br />
    <br />
    <GBtn onclick={setGame1}>Set Game 1</GBtn>
    <GBtn onclick={setGame2}>Set Game 2</GBtn>
  </div>
</div>
