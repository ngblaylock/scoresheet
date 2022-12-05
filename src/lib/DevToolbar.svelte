<script lang="ts">
	import { dev } from '$app/environment';
</script>

{#if dev}
	<div class="devbar flex justify-between px-3 py-1 text-xs text-white">
		Development Mode
		<div class="flex">
			<a href="/" class="px-1">Start Over</a>
			<a href="/uikit" class="px-1">UI Kit</a>
		</div>
	</div>
{/if}

<style lang="scss">
	.devbar {
		background: #ca332e;
		position: absolute;
		top: -1.7em;
		right: 0;
		left: 0;
		transition: 0.2s;
		&:hover {
			top: 0;
		}
	}
</style>
