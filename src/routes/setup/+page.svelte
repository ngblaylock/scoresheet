<script lang="ts">
  import MainContent from '$components/MainContent.svelte';
  import { Btn } from 'nathanblaylock.com';
</script>

<MainContent>
  <div class="container">
    <h1 class="text-center font-cursive">Add Players</h1>
    ... add player stuff
    <div class="text-center pt-2">
      <Btn variant="base-1" iconLeft="plus">Add Player</Btn>
    </div>
  </div>
  {#snippet actions()}
    <div class="container d-flex flex-column align-items-center gap-3">
      <div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            checked
          />
          <label class="form-check-label" for="flexRadioDefault1">Highest Score Wins</label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
          />
          <label class="form-check-label" for="flexRadioDefault2">Lowest Score Wins</label>
        </div>
      </div>
      <div class="text-center">
        <Btn href="/game/">Start Game</Btn>
      </div>
    </div>
  {/snippet}
</MainContent>
