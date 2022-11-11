<script lang="ts">
	import { onMount } from 'svelte';
	import { navigating } from '$app/stores';
	import '../app.css';
	onMount(() => {
		const appHeight = () => {
			const doc = document.documentElement;
			doc.style.setProperty(` — app-height`, `${window.innerHeight}px`);
		};
		window.addEventListener(`resize`, appHeight);
		appHeight();
	});

	const myFunction = () => {
		var myDiv = document.getElementById('scroll-container');
		myDiv!.scrollTop = 0;
	};

	$: if ($navigating) myFunction();
</script>

<div class="h-screen flex">
	<div class="flex-1">
		<div class="h-full flex flex-col" id="scroll-container">
			<slot />
		</div>
	</div>
</div>

<style>
	#scroll-container {
		overflow-y: auto;
	}
</style>
