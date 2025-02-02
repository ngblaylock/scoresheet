<script lang="ts">
  import MainContent from '$components/MainContent.svelte';
</script>

<MainContent>
  <div class="container">
    <h1 class="font-cursive text-center">Edit Players</h1>
  </div>

  {#snippet actions()}
    <div class="container">
      <div class="hstack justify-content-center">
        <GBtn href="/game/">Update Players</GBtn>
      </div>
    </div>
  {/snippet}
</MainContent>
