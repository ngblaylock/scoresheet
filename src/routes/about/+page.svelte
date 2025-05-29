<script lang="ts">
  import MainContent from '$components/MainContent.svelte';

  let appVersion = __APP_VERSION__;
</script>

<MainContent>
  <div class="container">
    <h1>About Scoresheet</h1>

    <p>
      Scoresheet is a simple, ad-free scorekeeping app built for card games like Phase 10, Skip-Bo,
      and Skyjo. It’s designed to take the math out of game night so you can focus on having fun.
    </p>

    <h2>What It Does</h2>

    <p>
      Scoresheet keeps track of scores round by round. Whether you're playing a casual game with
      friends or a competitive family tournament, Scoresheet helps you:
    </p>

    <ul>
      <li>Add and edit players anytime during the game</li>
      <li>Record scores per round quickly and easily</li>
      <li>Switch between table and graph views to see who’s winning</li>
      <li>End the game to view a podium-style winner display</li>
      <li>Restart games with the same players</li>
      <li>Toggle between light and dark mode for comfort</li>
    </ul>

    <h2>Designed for Mobile</h2>

    <p>
      Scoresheet is designed to feel like a native app on your phone. Just add it to your home
      screen to "install" it like a regular app—no app store required. It works offline too, so you
      can use it anywhere, even at the cabin or on a plane.
    </p>

    <h2>Other Things to Know</h2>

    <ul>
      <li>
        Tie-breakers are randomly determined per round. Whoever is on top takes the lead. It’s like
        a quick game of rock-paper-scissors after each round. Reloading the page won’t change the
        outcome.
      </li>
      <li>
        The min-max-average feature from version 1 was removed to reduce clutter. It didn't provide
        much value beyond helping estimate a starting score for a new player.
      </li>
      <li>
        The difference between "Restart" and "New Game" is that restarting keeps the same players,
        while starting a new game clears all players.
      </li>
    </ul>

    <h2>Why It’s Free</h2>

    <p>Scoresheet costs nothing to run, so it’s completely free—and has no ads.</p>

    <h2>Bugs</h2>

    <p>
      Found a bug or have a suggestion? You can submit an issue on
      <a
        href="https://github.com/ngblaylock/scoresheet/issues"
        target="_blank">GitHub</a
      >
      or contact me through
      <a
        href="https://nathanblaylock.com/contact/"
        target="_blank">my website</a
      >.
    </p>
  </div>

  {#snippet actions()}
    <div class="container">
      <div class="hstack justify-content-center">
        <GBtn href="/game/">Back to the game</GBtn>
      </div>
    </div>
    <div class="hstack gap-5 py-5 justify-content-center">
      <GIcon
        name="nbMedia"
        size={1.9}
      />

      <div>
        &copy; {new Date().getFullYear()}
        <a
          href="https://nathanblaylock.com"
          target="_blank">Nathan Blaylock</a
        >
      </div>

      v{appVersion}
    </div>
  {/snippet}
</MainContent>
