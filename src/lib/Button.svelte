<script lang="ts">
	export let href: string = '';
	export let variant: string = 'primary';
	export let inline: boolean = false;
	export let classList: string = '';
	export let type: string = 'button';
</script>

<div class=" text-center {inline ? '' : 'mt-auto p-4'}">
	<slot name="prepend" />
	{#if href}
		<a
			{href}
			class=" bg-{variant} text-light px-8 py-2 inline-block rounded-lg hover:brightness-105 active:brightness-110 {classList}"
		>
			<slot />
		</a>
	{:else}
		<button
			on:click
			{type}
			class=" bg-{variant} text-light px-8 py-2 inline-block rounded-lg hover:brightness-105 active:brightness-110 {classList}"
		>
			<slot />
		</button>
	{/if}
</div>
