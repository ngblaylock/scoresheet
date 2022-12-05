<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';
	import Button from '$lib/Button.svelte';
	import Title from '$lib/Title.svelte';
	import Card from '$lib/Card.svelte';
	import type { Player, Score } from '$lib/types';
	import { getTotal, redirectIfNoPlayers } from '$lib/functions';
	import orderBy from 'lodash/orderBy';
	import { after } from 'lodash';

	// Data
	let players: Player[] = [];
	let sortedPlayers: Player[] = [];
	let round: number = 0;
	let sortAsc: boolean = true;

	// Computed/Watch
	$: if (players.length) {
		let scoredPlayers: Player[] = [];
		let nonScoredPlayers: Player[] = [];
		players.forEach((player) => {
			if (typeof getTotal(player) == 'number') {
				scoredPlayers.push(player);
			} else {
				nonScoredPlayers.push(player);
			}
		});
		let orderedPlayers = orderBy(
			scoredPlayers,
			[
				(player) => {
					return getTotal(player);
				}
			],
			[sortAsc ? 'asc' : 'desc']
		);
		sortedPlayers = [...orderedPlayers, ...nonScoredPlayers];
	}

	// Mounted
	onMount(() => {
		players = JSON.parse(localStorage.getItem('players') || '[]');
		if (players.length) {
			round = players[0].rounds.length;
			sortAsc = JSON.parse(localStorage.getItem('lowestScoreWins') || 'true');
		} else {
			redirectIfNoPlayers();
		}
	});

	// After Update
	afterUpdate(() => {
		let count = 0;
		const interval = setInterval(() => {
			let myDivElement: any = document.querySelector('#score-scroll-container');
			count++;
			if (myDivElement) {
				myDivElement.scrollLeft = myDivElement.scrollWidth;
				clearInterval(interval);
			}
			if (count > 500) {
				clearInterval(interval);
			}
		}, 1);
	});
</script>

{#if round}
	<Title>Round {round}</Title>
{:else}
	<Title>Starting Score</Title>
{/if}

{#if players.length && players[0].rounds.length}
	<div
		class=" overflow-x-auto bg-white border border-dark text-center rounded-sm"
		id="score-scroll-container"
	>
		<table class="border-separate border-spacing-0 table-auto w-full">
			<thead class=" bg-dark text-white">
				<tr>
					<th class="text-left w-0 px-3 sticky left-0 bg-dark" />
					{#each players[0].rounds as rounds, index}
						<th class="px-2 text-center">{index + 1}</th>
					{/each}
					<th class="text-right w-0 px-2">Total</th>
				</tr>
			</thead>
			<tbody>
				{#each players as player}
					<tr>
						<th
							scope="row"
							class="text-left bg-white sticky left-0 border-r-2 border-r-dark border-b border-b-dark px-3"
							>{player.name}</th
						>
						{#each player.rounds as round, roundI}
							<td class="px-2 border-b border-b-dark text-center"
								><div class="flex flex-col">
									{round}
									<small class=" text-xs">{getTotal(player, roundI)}</small>
								</div></td
							>
						{/each}
						<td class="text-right border-l-dark border-l-2 px-2 border-b border-b-dark"
							>{getTotal(player)}</td
						>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{/if}

<!-- {#each sortedPlayers as player}
	<Card classList="mb-1">
		<div class="flex justify-between">
			{player.name}
			<span>{getTotal(player)}</span>
		</div>
	</Card>
{/each} -->

<Button href="/game/add-scores">Add Scores</Button>
