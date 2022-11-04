<script lang="ts">
	import { onMount } from 'svelte';
	import sortBy from 'lodash/sortBy';
	import Button from '$lib/Button.svelte';
	import Title from '$lib/Title.svelte';
	import Card from '$lib/Card.svelte';
	import type { Player } from '$lib/types';
	let players: Player[] = [];
	let round:number = 0;
	onMount(() => {
		players = JSON.parse(localStorage.getItem('players') || '[]');
		players = sortBy(players, ['score']);
		round = players[0].rounds.length;
	});
</script>

{#if round}
	 <Title>Round {round}</Title>
{:else}
	<Title>Starting Score</Title>
{/if}

{#each players as player}
	<Card classList="mb-1">
		<div class="flex justify-between">
			{player.name}
			<span>{player.score}</span>
		</div>
	</Card>
{/each}

<Button href="/game/add-scores">Add Scores</Button>
