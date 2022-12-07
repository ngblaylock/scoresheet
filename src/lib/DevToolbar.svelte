<script lang="ts">
	import { dev } from '$app/environment';
	import { goto } from '$app/navigation';
	const populate = (): void => {
		const content = [
			{ name: 'John', rounds: [15, 23, 12, 34, 23, 4, 34, 23] },
			{ name: 'Sam', rounds: [16, 3, 2, 5, 5, 34, 34, 3] },
			{ name: 'Derrik', rounds: [26, 44, '-', 34, 54, 34, 9, 43] }
		];
		localStorage.setItem('players', JSON.stringify(content));
		localStorage.setItem('lowestScoreWins', 'true');
    goto('/game/scores', { replaceState: false });
	};
</script>

{#if dev}
	<div class="devbar flex justify-between items-center px-3 py-1 text-xs text-white h-4">
		Dev
		<button on:click={populate} class="px-1">Populate</button>
		<a href="/" class="px-1">Start Over</a>
		<a href="/uikit" class="px-1">UI Kit</a>
	</div>
{/if}

<style lang="scss">
	.devbar {
		background: #ca332e;
		position: absolute;
		right: 0;
		left: 0;
		top: 0;
		transition: 0.2s;
		z-index: 100;
	}
</style>
