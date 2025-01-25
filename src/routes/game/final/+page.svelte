<script lang="ts">
  import MainContent from '$components/MainContent.svelte';
  import { Btn, IconBtn, Icon } from 'nathanblaylock.com';
</script>

<MainContent>
  <div class="container">
    <h1 class="font-cursive text-center">Final Scores</h1>
    ...podium
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
              <Icon name="chartLine" size={1.5} />
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
              <Icon name="poll" size={1.5} />
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
              <Icon name="table" size={1.5} />
            </label>
          </div>
        </div>
      </div>

      <div class="hstack justify-content-center">
        <Btn href="/game">Start Over</Btn>
        <Btn href="/" variant="base-2">New Game</Btn>
      </div>
    </div>
  {/snippet}
</MainContent>
