<script lang="ts">
	import Title from '$lib/Title.svelte';
	import Input from '$lib/Input.svelte';
  import Button from '$lib/Button.svelte';
</script>

<Title>Add Player</Title>

<label for="new-player-name">Player Name</label>
<Input id="new-player-name" />

<label for="new-player-score" class="mt-3">Starting Score</label>
<Input id="new-player-score" />

<div class="text-center font-sans text-sm text-gray-500 mt-4">
  <div>MIN &mdash; 54</div>
  <div>AVG &mdash; 145</div>
  <div>MAX &mdash; 210</div>
</div>

<Button classList="mt-auto">Done</Button>