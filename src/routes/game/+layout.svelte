<script lang="ts">
	import NavBar from '$lib/NavBar.svelte'
</script>

<NavBar />
<main class="w-screen max-w-lg mx-auto px-4 h-full flex flex-col">
	<slot />
</main>
