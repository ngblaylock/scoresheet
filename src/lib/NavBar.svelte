<script lang="ts">
	import { slide } from 'svelte/transition';
	import { navigating } from '$app/stores';
	import { getPlayers } from '$lib/functions';
	import type { Player } from '$lib/types';
	import IconButton from '$lib/IconButton.svelte';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	// Data
	let disableMenuItem: boolean = true;
	let showMenu: boolean = false;
	let players: Player[] = [];

	// Methods
	const goBack = (): void => {
		history.back();
	};
	
	// Computed/Watch
	$: menuLinks = [
		{
			name: 'Restart',
			url: '/setup?restart=true',
			disabled: false
		},
		{
			name: 'New Game',
			url: '/setup',
			disabled: false
		},
		{
			name: 'Add Player',
			url: '/game/add-player',
			disabled: disableMenuItem
		},
		{
			name: 'Scores',
			url: '/game/scores',
			disabled: disableMenuItem
		}
	];
	
	$: if ($navigating) {
		showMenu = false;
	}
	
	$: {
		showMenu;
		if (browser) {
			players = getPlayers();
		}
		if (players.length) {
			disableMenuItem = false;
		} else {
			disableMenuItem = true;
		}
	}

	// Mounted
	onMount(() => {
		players = getPlayers();
	});
</script>

<nav class="flex items-center justify-between border-b-2 border-red-100 p-1">
	<IconButton icon="chevron-left" alt="Previous Page" on:click={goBack} />
	<div>Scoresheet</div>
	<div class="relative">
		<IconButton
			icon="dots-vertical"
			alt="Menu"
			on:click={() => {
				showMenu = !showMenu;
			}}
			active={showMenu}
		/>
		{#if showMenu}
			<div class="absolute right-0 shadow py-1 bg-white" transition:slide={{ duration: 400 }}>
				<ul>
					{#each menuLinks as link}
						{#if !link.disabled}
							<!-- content here -->
							<li
								class=" whitespace-nowrap px-6 py-1 transition-colors duration-700 hover:bg-light active:bg-red-50"
							>
								<a href={link.url}>{link.name}</a>
							</li>
						{/if}
					{/each}
				</ul>
			</div>
		{/if}
	</div>
</nav>
