<script lang="ts">
	import Button from '$lib/Button.svelte';
	import { Body } from 'svelte-body';
</script>

<Body class="bg-dark" />

<img src="/logo.svg" alt="" class="max-w-[100px] mx-auto mt-12 mb-4" />

<h1 class="text-4xl text-light text-center">Scoresheet</h1>
<img src="/underline.svg" alt="" class="max-w-[300px] mx-auto mt-2" />

<Button href="/game/setup" variant="dark">New Game</Button>
