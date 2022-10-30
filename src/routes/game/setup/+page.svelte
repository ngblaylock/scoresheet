<script lang="ts">
	import Button from '$lib/Button.svelte';
	import Title from '$lib/Title.svelte';
	import Card from '$lib/Card.svelte';
	import Input from '$lib/Input.svelte';
	let players = [{ name: 'Nathan' }, { name: 'Donna' }, { name: 'Jebby' }];
</script>

<Title>Players</Title>
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
<Input>
<span slot="append"> <Button classList="rounded-none px-4" variant="dark" inline>Add</Button></span>
</Input>

<Button href="/game/scores">Start Game</Button>
