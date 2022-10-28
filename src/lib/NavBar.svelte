<script lang="ts">
	import { slide } from 'svelte/transition';
	import { navigating } from '$app/stores';
	import IconButton from '$lib/IconButton.svelte';
	const goBack = (): void => {
		history.back();
	};
	const menuLinks = [
		{
			name: 'Restart',
			url: '/game/setup'
		},
		{
			name: 'New Game',
			url: '/'
		},
		{
			name: 'Add Player',
			url: '/game/add-player'
		},
		{
			name: 'Scores',
			url: '/game/scores'
		}
	];
	let showMenu: boolean = false;
	$: if ($navigating) {
		showMenu = false;
	}
</script>

<div class="flex items-center justify-between border-b-2 border-red-100 p-1">
	<IconButton icon="chevron-left" alt="Previous Page" on:click={goBack} />
	<div>Scoresheet</div>
	<div class="relative">
		<IconButton
			icon="dots-vertical"
			alt="Menu"
			on:click={() => {
				showMenu = !showMenu;
			}}
      active="{showMenu}"
		/>
		{#if showMenu}
			<div class="absolute right-0 shadow py-1 bg-white" transition:slide={{ duration: 400 }}>
				<ul>
					{#each menuLinks as link}
						<li
							class=" whitespace-nowrap px-6 py-1 transition-colors duration-700 hover:bg-light active:bg-red-50"
						>
							<a href={link.url}>{link.name}</a>
						</li>
					{/each}
				</ul>
			</div>
		{/if}
	</div>
</div>
