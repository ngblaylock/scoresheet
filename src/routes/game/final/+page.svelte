<script lang="ts">
  import MainContent from '$components/MainContent.svelte';
  import { GBtn, GIcon, GDevNote } from 'nathanblaylock.com';
</script>

<MainContent>
  <div class="container">
    <h1 class="font-cursive text-center">Final Scores</h1>
    <GDevNote>Podium</GDevNote>
  </div>
  {#snippet actions()}
    <div class="container">
      <div class="d-flex justify-content-center mb-4">
        <div class="btn-check-group rounded-pill">
          <div>
            <input
              type="radio"
              class="btn-check"
              name="options-icon"
              id="option26"
              autocomplete="off"
            />
            <label class="btn btn-icon" for="option26">
              <GIcon name="chartLine" size={1.5} />
            </label>
          </div>
          <div>
            <input
              type="radio"
              class="btn-check"
              name="options-icon"
              id="option25"
              autocomplete="off"
              checked
            />
            <label class="btn btn-icon" for="option25">
              <GIcon name="poll" size={1.5} />
            </label>
          </div>
          <div>
            <input
              type="radio"
              class="btn-check"
              name="options-icon"
              id="option28"
              autocomplete="off"
            />
            <label class="btn btn-icon" for="option28">
              <GIcon name="table" size={1.5} />
            </label>
          </div>
        </div>
      </div>

      <div class="hstack justify-content-center">
        <GBtn href="/game">Start Over</GBtn>
        <GBtn href="/" variant="base-2">New Game</GBtn>
      </div>
    </div>
  {/snippet}
</MainContent>
