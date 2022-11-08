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

	// Data
	let players: Player[] = [];
	let newPlayer: string = '';
	let lowestScoreWins: boolean = true;

	// Methods
	const focusInput = () => {
		document.getElementById('new-player-name')?.focus();
	};
	const addPlayer = () => {
		if (newPlayer) {
			players.push({ name: newPlayer, score: "-", rounds: [] });
			players = players;
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

	// Watch/Computed
	$: 	if (typeof(localStorage) != 'undefined') {
			localStorage.setItem('lowestScoreWins', JSON.stringify(lowestScoreWins));
	}

	// Mounted
	onMount(() => {
		focusInput();
		if ($page.url.searchParams.get('restart')) {
			let storedPlayers: Player[] = getPlayers();
			storedPlayers.forEach((p) => {
				p.rounds = [];
				p.score = '-';
			});
			players = storedPlayers;
			setPlayers(players);
		} else {
			localStorage.removeItem('players');
		}
	});
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

<Button href="/game/add-scores/">
	<span slot="prepend">
		<div>
			<Checkbox classList="mb-3" bind:checked={lowestScoreWins}>Lowest Score Wins</Checkbox>
		</div>
	</span>
	Start Game</Button
>
