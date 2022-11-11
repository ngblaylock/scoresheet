<script lang="ts">
	import { onMount } from 'svelte';
	import Button from '$lib/Button.svelte';
	import Title from '$lib/Title.svelte';
	import Card from '$lib/Card.svelte';
	import type { Player, Score } from '$lib/types';
	import { getTotal, redirectIfNoPlayers } from '$lib/functions';
	import orderBy from 'lodash/orderBy';

	// Data
	let players: Player[] = [];
	let sortedPlayers: Player[] = [];
	let round: number = 0;
	let sortAsc: boolean = true;

	// Computed/Watch
	$: if (players.length) {		
		let scoredPlayers: Player[] = [];
		let nonScoredPlayers: Player[] = [];
		players.forEach(player => {
			if(typeof(getTotal(player)) == 'number'){
				scoredPlayers.push(player);
			} else{
				nonScoredPlayers.push(player);
			}
		})
		let orderedPlayers = orderBy(
			scoredPlayers,
			[
				(player) => {
					return getTotal(player);
				}
			],
			[sortAsc ? 'asc' : 'desc']
		);
		sortedPlayers = [...orderedPlayers, ...nonScoredPlayers]
	}

	// Mounted
	onMount(() => {
		players = JSON.parse(localStorage.getItem('players') || '[]');
		if(players.length){
			round = players[0].rounds.length;
			sortAsc = JSON.parse(localStorage.getItem('lowestScoreWins') || 'true');
		}else{
			redirectIfNoPlayers()
		}
	});
</script>

{#if round}
	<Title>Round {round}</Title>
{:else}
	<Title>Starting Score</Title>
{/if}

{#each sortedPlayers as player}
	<Card classList="mb-1">
		<div class="flex justify-between">
			{player.name}
			<span>{getTotal(player)}</span>
		</div>
	</Card>
{/each}

<Button href="/game/add-scores">Add Scores</Button>
