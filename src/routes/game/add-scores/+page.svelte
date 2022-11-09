<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/Button.svelte';
	import Card from '$lib/Card.svelte';
	import Input from '$lib/Input.svelte';
	import { onMount } from 'svelte';
	import type { Player, Score } from '$lib/types';
	import { getPlayers, setPlayers, getTotal, redirectIfNoPlayers } from '$lib/functions';

	// Data
	let players: Player[] = [];
	let currentRound: number = 0;

	// Methods

	const setScores = () => {
		setPlayers(players);
		goto(`/game/scores`);
	};

	// Computed/Watch
	$: {
		players = players.map((player: Player) => {
			return {
				name: player.name,
				score: getTotal(player),
				rounds: player.rounds
			};
		});
	}

	// Mounted
	onMount(() => {
		players = getPlayers();
		if (players.length) {
			players.forEach((p) => {
				p.rounds.push('-');
			});
			players = players;
			currentRound = players[0].rounds.length;
		} else {
			redirectIfNoPlayers();
		}
	});
</script>

{#each players as player, playerId}
	<Card classList="mt-4">
		<div class="text-center text-2xl mb-2">{player.name}</div>
		<div class="text-center text-3xl">{getTotal(player)}</div>
		<label for="round-points" class="block text-center">Round {currentRound} Points</label>
		<div class="w-36 mx-auto">
			<Input
				type="number"
				id="round-points-{player.name.toLowerCase()}-{playerId}"
				bind:value={player.rounds[player.rounds.length - 1]}
			/>
		</div>
		<table class="table-auto w-full mt-4">
			<thead>
				<tr>
					<th class="border-b pb-1">Round</th>
					<th class="border-b pb-1">Points</th>
					<th class="border-b pb-1">Total</th>
				</tr>
			</thead>
			<tbody>
				{#each player.rounds as round, index}
					<tr>
						<td class="text-center">{index + 1}</td>
						<td class="text-center">{round}</td>
						<td class="text-center">{getTotal(player, index)}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</Card>
{/each}

<Button on:click={setScores}>Done</Button>
