<script lang="ts">
	import Sortable from 'sortablejs';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import Button from '$lib/Button.svelte';
	import Title from '$lib/Title.svelte';
	import Card from '$lib/Card.svelte';
	import Input from '$lib/Input.svelte';
	import Checkbox from '$lib/Checkbox.svelte';
	import type { Player } from '$lib/types';
	import { getPlayers, setPlayers } from '$lib/functions';
	import { goto } from '$app/navigation';
	import NavBar from '$lib/NavBar.svelte';

	// Data
	let players: Player[] = [];
	let newPlayer: string = '';
	let lowestScoreWins: boolean = true;
	let isExistingName: boolean = false;
	let el: any;

	// Methods
	const focusInput = () => {
		document.getElementById('new-player-name')?.focus();
	};
	const addPlayer = () => {
		if (newPlayer) {
			players.push({ name: newPlayer, rounds: [] });
			players = players;
			let input: any = document.querySelector('#new-player-name');
			input.value = '';
			newPlayer = '';
			setPlayers(players);
			focusInput();
		}
	};
	const removePlayer = (index: number) => {
		players = players.filter((p, i) => i !== index);
		setPlayers(players);
	};
	const startGame = () => {
		addPlayer();
		goto('/game/add-scores/', { replaceState: true });
	};
	const move = (arr: Player[], from: number, to: number) => {
		let numberOfDeletedElm = 1;
		const elm = arr.splice(from, numberOfDeletedElm)[0];
		numberOfDeletedElm = 0;
		arr.splice(to, numberOfDeletedElm, elm);
	};

	// Computed/Watch
	$: if (typeof localStorage != 'undefined') {
		localStorage.setItem('lowestScoreWins', JSON.stringify(lowestScoreWins));
	}

	$: if (players.filter((e) => e.name.toLowerCase() === newPlayer.toLowerCase()).length > 0) {
		isExistingName = true;
	} else {
		isExistingName = false;
	}

	$: disabled = !players.length;

	// Mounted
	onMount(() => {
		focusInput();
		if ($page.url.searchParams.get('restart')) {
			let storedPlayers: Player[] = getPlayers();
			storedPlayers.forEach((p) => {
				p.rounds = [];
			});
			players = storedPlayers;
			setPlayers(players);
		} else {
			setPlayers([]);
		}
		Sortable.create(el, {
			handle: '.handle',
			animation: 200,
			ghostClass: 'bg-gray-100',
			onUpdate: async (evt) => {
				move(players, evt.oldIndex || 0, evt.newIndex || 0);
				players = players;
				setPlayers(players);
			}
		});
	});
</script>

<NavBar />

<div class="w-full max-w-lg mx-auto px-4 h-full flex flex-col mt-6">
	<Title>Players</Title>
	<div>
		<div bind:this={el}>
			{#each players as player, index (player)}
				<Card classList="mb-1">
					<div class="flex">
						<img src="/icons/drag-vertical.svg" alt="drag icon" class="handle cursor-move" />
						<div class="mx-2">{player.name}</div>
						<button class="ml-auto" on:click={() => removePlayer(index)}>
							<img src="/icons/close.svg" alt="remove player icon" />
						</button>
					</div>
				</Card>
			{/each}
		</div>
		<form on:submit|preventDefault={addPlayer}>
			<Input id="new-player-name" bind:value={newPlayer} autocapitalize="words">
				<span slot="append">
					<Button
						disabled={isExistingName}
						type="submit"
						classList="rounded-none px-4"
						variant="dark"
						inline>Add</Button
					></span
				>
			</Input>
		</form>
		{#if isExistingName}
			<div class=" text-red-500 text-center">The name entered already exists.</div>
		{/if}
	</div>

	<Button on:click={startGame} {disabled}>
		<span slot="prepend">
			<div>
				<Checkbox classList="mb-3" bind:checked={lowestScoreWins}>Lowest Score Wins</Checkbox>
			</div>
		</span>
		Start Game</Button
	>
</div>
