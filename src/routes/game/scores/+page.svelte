<script lang="ts">
	import { onMount } from 'svelte';
	import sortBy from 'lodash/sortBy';
	import Button from '$lib/Button.svelte';
	import Title from '$lib/Title.svelte';
	import Card from '$lib/Card.svelte';
	import type { Player, Score } from '$lib/types';
	import {getTotal} from '$lib/functions';

	// Data
	let players: Player[] = [];
	let sortedPlayers: Player[] = [];
	let round: number = 0;

	// Computed/Watch
	$: if (players.length) {
		sortedPlayers = sortBy(players, [
			function (player) {
				return getTotal(player);
			}
		]);
	}

	// Mounted
	onMount(() => {
		players = JSON.parse(localStorage.getItem('players') || '[]');
		round = players[0].rounds.length;
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
