<script lang="ts">
	import { onMount } from 'svelte';
	import { navigating } from '$app/stores';
	import { dev } from '$app/environment';
	import DevToolbar from '$lib/DevToolbar.svelte';

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

<div class="h-screen flex {dev ? 'pt-4' : null}">
	<DevToolbar />
	<div class="flex-1">
		<div class="h-full flex flex-col" id="scroll-container">
			<slot />
		</div>
	</div>
</div>

<svelte:head>
	{#if dev}
		<link rel="shortcut icon" href="/favicon-dev.ico" />
		<link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon-dev.png" />
		<link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32-dev.png" />
		<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16-dev.png" />
	{:else}
		<link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
		<link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
		<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
	{/if}
	<link rel="manifest" href="/favicons/site.webmanifest" />
	<link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#210201" />
	<meta name="apple-mobile-web-app-title" content="Scoresheet" />
	<meta name="application-name" content="Scoresheet" />
	<meta name="msapplication-TileColor" content="#ffffff" />
	<meta name="theme-color" content="#ffffff" />
	<meta name="viewport" content="width=device-width" />
</svelte:head>

<style lang="scss">
	#scroll-container {
		overflow-y: auto;
	}
</style>
