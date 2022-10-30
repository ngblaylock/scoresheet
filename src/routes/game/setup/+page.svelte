<script lang="ts">
	import Button from '$lib/Button.svelte';
	import Title from '$lib/Title.svelte';
	import Card from '$lib/Card.svelte';
	import Input from '$lib/Input.svelte';
	import Checkbox from '$lib/Checkbox.svelte';
	let players = [{ name: 'Nathan' }, { name: 'Donna' }, { name: 'Jebby' }];
	let newPlayer: string = '';
	const addPlayer = () => {
		players.push({name: newPlayer});
		players = players;
		newPlayer = ''
	}
</script>

<Title>Players</Title>
<div>
	{#each players as player}
		<Card classList="mb-1">
			<div class="flex">
				<img src="/icons/drag-vertical.svg" alt="drag icon" />
				<div class="mx-2">{player.name}</div>
				<button class="ml-auto">
					<img src="/icons/close.svg" alt="remove player icon" />
				</button>
			</div>
		</Card>
	{/each}
	<Input bind:value={newPlayer}>
		<span slot="append">
			<Button on:click={addPlayer} classList="rounded-none px-4" variant="dark" inline>Add</Button></span
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
