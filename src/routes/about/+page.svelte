<script lang="ts">
  import MainContent from '$components/MainContent.svelte';
    import { Btn, Debug } from 'nathanblaylock.com';
</script>

<MainContent>
  <div class="container font-cursive">
    <h1>About Scoresheet</h1>
    <p>
      Scoresheet is designed and maintained by Nathan Blaylock. It began as an opportunity to learn
      Svelte, SvelteKit and Tailwind. Now it is frequently used by friends and family. Version 2
      includes more features such as editing scores, players, graph view, and a victory podium.
    </p>
    <p>
      The purpose of this app is to do the math for each scoring round during a card game. It is
      designed to be as general purpose as possible. The app is designed for mobile devices and can
      be "installed" by creating a shortcut on your device home screen.
    </p>
    <p>
      Any bug fixes or suggestions can be submitted by creating an issue on <a
        href="https://github.com/ngblaylock/scoresheet/issues"
        target="_blank">GitHub</a
      >
      Or by contacting me through
      <a href="https://nathanblaylock.com/contact/" target="_blank">my website</a>.
    </p>
    <Debug data="TODO::: Add Logo" />
    TODO::: Add Logo
    &copy; {new Date().getFullYear()} Nathan Blaylock
  </div>
  {#snippet actions()}
    <div class="container">
      <div class="hstack justify-content-center">
        <Btn href="/">New Game</Btn>
      </div>
    </div>
  {/snippet}
</MainContent>
