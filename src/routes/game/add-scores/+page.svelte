<script lang="ts">
	import Button from '$lib/Button.svelte';
	import Card from '$lib/Card.svelte';
	import Input from '$lib/Input.svelte';
	import { onMount } from 'svelte';
	import type { Player } from '$lib/types';
	import { getPlayers } from '$lib/functions';
	onMount(() => {
		players = getPlayers();
		players.forEach((p) => {
			p.rounds.push(0);
		});
		players = players;
		currentRound = players[0].rounds.length;
	});
	const getTotal = (rounds: number[], index: number): number => {
		let total = 0;
		console.log(rounds, index);
		for(let x = 0; x <= index; x++){
			total = total + rounds[x];
		}
		console.log(total);
		
		return total;
	};
	const setScores = () => {
		console.log(players);
		
	}
	let players: Player[] = [];
	let currentRound: number = 0;
</script>

{#each players as player}
	<Card classList="mt-4">
		<div class="text-center text-2xl mb-2">{player.name}</div>
		<div class="text-center text-3xl">{getTotal(player.rounds, player.rounds.length - 1)}</div>
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
						<td class="text-center">{getTotal(player.rounds, index)}</td>
					</tr>
				{/each}
			</tbody>
		</table>
		<label for="round-points" class="block text-center mt-5">Round {currentRound} Points</label>
		<div class="w-36 mx-auto">
			<Input type="number" id="round-points" bind:value={player.rounds[player.rounds.length - 1]} />
		</div>
	</Card>
{/each}

<Button on:click="{setScores}">Done</Button>
