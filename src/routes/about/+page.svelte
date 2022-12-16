<script lang="ts">
	import { getPlayers } from '$lib/functions';
	import { onMount } from 'svelte';
	import type { Player } from '$lib/types';
	import Button from '$lib/Button.svelte';
	import NavBar from '$lib/NavBar.svelte';

	let players: Player[];

	// @ts-ignore
	const version = __APP_VERSION__;

	onMount(() => {
		players = getPlayers();
	});
</script>

<NavBar />

<main class="w-screen max-w-lg mx-auto px-4 mt-6 h-full flex flex-col">
	<h1 class=" text-3xl">About</h1>
	<p>
		Scoresheet is designed and maintained by Nathan Blaylock. It's primary
		purpose was primarily to learn Svelte/SvelteKit and Tailwind while creating
		an app that would actually be used by friends and family.
	</p>

	<p class="mt-3">
		The purpose of this app is to do the math for each scoring round during a
		card game. It is designed to be as general purpose as possible. The app is
		designed for mobile devices and can be "installed" by creating a shortcut on
		your device home screen.
	</p>

	<p class="mt-3">
		Any bug fixes or suggestions can be submitted by creating an issue on
		<a
			class="text-primary underline"
			href="https://github.com/ngblaylock/scoresheet/issues"
			target="_blank">GitHub</a
		>.
	</p>

	{#if players && players.length}
		<Button href="/game/scores/">Scores</Button>
	{:else}
		<Button href="/setup">New Game</Button>
	{/if}

	<div class="flex flex-col justify-between items-center py-2 border-t">
		<div class="flex items-center">
			<div class="mx-4">
				<a href="https://nathanblaylock.com" target="_blank"
					><img
						src="/icons/nb-mark.svg"
						alt="Nathan Blaylock Media logo"
						class=" w-8 max-w-none"
					/></a
				>
			</div>
			<div class="mx-4">
				<a href="https://github.com/ngblaylock/scoresheet" target="_blank"
					><img
						src="/icons/github-mark.svg"
						alt="GitHub"
						class=" w-8 max-w-none"
					/></a
				>
			</div>
		</div>
		<div class="flex flex-wrap mt-3">
			<div class="mx-4 text-center flex-grow">
				&copy; Nathan Blaylock {new Date().getFullYear()}
			</div>
			<div class="mx-4 text-center flex-grow">Version {version}</div>
			<div class="mx-4 text-center flex-grow ">
				<a
					class="text-primary underline"
					href="https://nathanblaylock.com/privacy/"
					target="_blank">Privacy Policy</a
				>
			</div>
		</div>
	</div>
</main>
