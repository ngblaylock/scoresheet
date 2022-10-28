<script lang="ts">
	import Button from '$lib/Button.svelte';
  import { Body } from 'svelte-body';
</script>

<Body class="bg-dark" />

<div class="bg-light w-24 h-24 mx-auto mb-6" />

<h1 class="text-3xl text-light text-center">Scoresheet</h1>

<Button href="/game/setup">New Game</Button>
