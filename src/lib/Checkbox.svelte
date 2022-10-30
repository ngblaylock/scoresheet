<script lang="ts">
	let uid: string = 'u' + Math.random().toString(26).slice(2);
	export let checked: boolean = false;
	export let classList: string = '';
</script>

<div class={classList}>
	<input type="checkbox" id={uid} class="invisible" bind:checked />
	<label for={uid} class="text-xl flex items-center justify-center">
		{#if checked}
			<img src="/icons/checkbox.svg" class="w-4" alt="" />
		{:else}
			<img src="/icons/square.svg" class="w-4" alt="" />
		{/if}
		<span class="ml-3">
			<slot />
		</span>
	</label>
</div>
