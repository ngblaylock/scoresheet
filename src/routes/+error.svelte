<script lang="ts">
	import { page } from '$app/stores';
  $: error = $page.error as Error;
</script>

<div class="h-full bg-red-100 flex items-center justify-center text-center text-dark">
	<div>
		<h1 class="text-8xl">{$page.status}</h1>
		<p class="text-2xl">{error.message}</p>
		{#if $page.status == 404}
			<p class=" text-red-400 mt-12">How did you even get here?</p>
			<p class="mt-3">
				<a
					href="/setup"
					class="inline-block text-dark border border-dark rounded-lg px-5 py-2 hover:bg-red-50 transition-all"
					>New Game</a
				>
			</p>
		{/if}
	</div>
</div>
