<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		setTimeout(() => {
			goto('/setup', { replaceState: false });
		}, 2000);
	});
</script>

<div class="h-full bg-dark">
	<img src="/logo.svg" alt="" class="max-w-[100px] mx-auto mt-24 mb-4" />
	
	<h1 class="text-4xl text-light text-center">Scoresheet</h1>
	<img src="/underline.svg" alt="" class="max-w-[300px] mx-auto mt-2" />
	
	<div class="loader" />
</div>

<style lang="scss">
	.loader {
		background: white;
		height: 4px;
		width: 50%;
		margin: 0 auto;
		margin-top: 48px;
		border-radius: 4px;
		position: relative;
		&:after {
			content: '';
			background: #af8c8c;
			height: 4px;
			display: block;
			animation-name: load;
			animation-duration: 2s;
			animation-timing-function: ease-in-out;
		}
	}
	@keyframes load {
		from {
			width: 0%;
		}
		to {
			width: 100%;
		}
	}
</style>
