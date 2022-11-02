<script lang="ts">
	import { onMount } from 'svelte';
  import sortBy from 'lodash/sortBy';
	import Button from '$lib/Button.svelte';
	import Title from '$lib/Title.svelte';
	import Card from '$lib/Card.svelte';
	let players: { name: string; score: number }[] = [];
	onMount(() => {
		players = JSON.parse(localStorage.getItem('players') || '{}');
    players = sortBy(players, ['score'])
	});
</script>

<Title>Round 3</Title>

{#each players as player}
	<Card classList="mb-1">
		<div class="flex justify-between">
			{player.name}
			<span>{player.score}</span>
		</div>
	</Card>
{/each}

<Button href="/game/add-scores">Add Scores</Button>
