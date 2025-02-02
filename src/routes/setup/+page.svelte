<script lang="ts">
  import MainContent from '$components/MainContent.svelte';
</script>

<MainContent>
  <div class="container">
    <h1 class="text-center font-cursive">Add Players</h1>
    <GDevNote>Add Setup Here</GDevNote>
    <div class="text-center pt-2">
      <GBtn variant="base-1" iconLeft="plus">Add Player</GBtn>
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
        <GBtn href="/game/">Start Game</GBtn>
      </div>
    </div>
  {/snippet}
</MainContent>
