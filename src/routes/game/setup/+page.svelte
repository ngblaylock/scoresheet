<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import Button from '$lib/Button.svelte';
	import Title from '$lib/Title.svelte';
	import Card from '$lib/Card.svelte';
	import Input from '$lib/Input.svelte';
	import Checkbox from '$lib/Checkbox.svelte';
	onMount(() => {
		focusInput();
		if ($page.url.searchParams.get('restart')) {
			localStorage.removeItem('players');
		} else {
			let storedPlayers: { name: string; score: number }[] = JSON.parse(
				localStorage.getItem('players') || '{}'
			);
			console.log(storedPlayers);
			storedPlayers.forEach((p) => (p.score = 0));
			players = storedPlayers;
		}
	});
	let players: { name: string; score: number }[] = [];
	let newPlayer: string = '';
	const focusInput = () => {
		document.getElementById('new-player-name')?.focus();
	};
	const addPlayer = () => {
		players.push({ name: newPlayer, score: 0 });
		players = players;
		newPlayer = '';
		localStorage.setItem('players', JSON.stringify(players));
		focusInput();
	};
	const removePlayer = (index: number) => {
		players = players.filter((p, i) => i !== index);
		localStorage.setItem('players', JSON.stringify(players));
	};
</script>

<Title>Players</Title>
<div>
	{#each players as player, index (player)}
		<!--TODO: I don't like the way this animates  -->
		<div animate:flip in:scale out:fade={{ duration: 100 }}>
			<Card classList="mb-1">
				<div class="flex">
					<img src="/icons/drag-vertical.svg" alt="drag icon" />
					<div class="mx-2">{player.name}</div>
					<button class="ml-auto" on:click={() => removePlayer(index)}>
						<img src="/icons/close.svg" alt="remove player icon" />
					</button>
				</div>
			</Card>
		</div>
	{/each}
	<Input id="new-player-name" bind:value={newPlayer}>
		<span slot="append">
			<Button on:click={addPlayer} classList="rounded-none px-4" variant="dark" inline>Add</Button
			></span
		>
	</Input>
	<!-- TODO: Redo above to use "Enter to submit the form" -->
</div>

<Button href="/game/scores">
	<span slot="prepend">
		<div>
			<Checkbox classList="mb-3" checked>Lowest Score Wins</Checkbox>
		</div>
	</span>
	Start Game</Button
>
