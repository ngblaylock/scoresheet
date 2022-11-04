<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import Button from '$lib/Button.svelte';
	import Title from '$lib/Title.svelte';
	import Card from '$lib/Card.svelte';
	import Input from '$lib/Input.svelte';
	import Checkbox from '$lib/Checkbox.svelte';
	import type { Player } from '$lib/types';
	import { getPlayers, setPlayers } from '$lib/functions';
	onMount(() => {
		focusInput();
		if ($page.url.searchParams.get('restart')) {
			let storedPlayers: Player[] = getPlayers();
			if (storedPlayers && storedPlayers.length) {
				storedPlayers.forEach((p) => (p.score = 0));
			}
			players = storedPlayers;
		} else {
			localStorage.removeItem('players');
		}
	});
	let players: Player[] = [];
	let newPlayer: string = '';
	const focusInput = () => {
		document.getElementById('new-player-name')?.focus();
	};
	const addPlayer = () => {
		if (newPlayer) {
			players.push({ name: newPlayer, score: 0, rounds: [] });
			players = players;			
			// newPlayer = '';
			let input: any = document.querySelector('#new-player-name');
			input.value = '';
			newPlayer = '';
			setPlayers(players);
			focusInput();
		}
	};
	const removePlayer = (index: number) => {
		players = players.filter((p, i) => i !== index);
		setPlayers(players);
	};
</script>

<Title>Players</Title>
<div>
	{#each players as player, index (player)}
		<div>
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
