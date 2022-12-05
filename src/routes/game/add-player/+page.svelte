<script lang="ts">
	import Title from '$lib/Title.svelte';
	import Input from '$lib/Input.svelte';
	import Button from '$lib/Button.svelte';
	import { getPlayers, getTotal, setPlayers, redirectIfNoPlayers } from '$lib/functions';
	import type { Player, Score } from '$lib/types';
	import { onMount } from 'svelte';
	import { min, max } from 'lodash';
	import { goto } from '$app/navigation';

	// Data
	let players: Player[] = [];
	let scores: number[] = [];
	let minScore: any = 0;
	let maxScore: any = 0;
	let avgScore: any = 0;
	let newPlayer: Player = {
		name: '',
		rounds: []
	};

	// Methods
	const addPlayer = () => {
		players.push(newPlayer);
		players = players;
		setPlayers(players);
		goto('/game/scores');
	};

	// Mounted
	onMount(() => {
		players = getPlayers();
		if (players.length) {
			players.forEach((player) => {
				let playerTotal = getTotal(player);
				if (typeof playerTotal == 'number') {
					scores.push(+playerTotal);
				}
			});
			minScore = min(scores);
			maxScore = max(scores);
			avgScore = (
				scores.reduce((prev: number, curr: number) => {
					return prev + curr;
				}, 0) / scores.length
			).toFixed(1);
			newPlayer.rounds = players[0].rounds.map((r) => {
				return '-';
			});
		} else {
			redirectIfNoPlayers();
		}
	});
</script>

<Title>Add Player</Title>
<form on:submit|preventDefault={addPlayer}>
	<label for="new-player-name" class="block">Player Name</label>
	<Input id="new-player-name" autocapitalize="words" required bind:value={newPlayer.name} />

	<label for="new-player-score" class="block mt-2">Starting Score</label>
	<Input
		type="number"
		id="new-player-score"
		required
		bind:value={newPlayer.rounds[newPlayer.rounds.length - 1]}
	/>

	<div class="text-center font-sans text-sm text-gray-500 mt-4">
		<div>MIN &mdash; {JSON.stringify(minScore)}</div>
		<div>AVG &mdash; {avgScore}</div>
		<div>MAX &mdash; {maxScore}</div>
	</div>

	<Button classList="mt-auto" type="submit">Done</Button>
</form>
