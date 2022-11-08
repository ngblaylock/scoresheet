<script lang="ts">
	export let href: string = '';
	export let variant: string = 'primary';
	export let inline: boolean = false;
	export let classList: string = '';
	export let disabled: boolean = false;
	export let type: string = 'button';

	let btnClass = `text-light px-8 py-2 inline-block rounded-lg`;
	let disabledClass = '';
	$: disabledClass = disabled
		? 'bg-gray-300'
		: `bg-${variant} hover:brightness-105 active:brightness-110`;

</script>

<div class=" text-center {inline ? '' : 'mt-auto p-4'}">
	<slot name="prepend" />
	{#if href}
		<a {href} class="{btnClass} {classList} {disabledClass}">
			<slot />
		</a>
	{:else}
		<button on:click {disabled} {type} class="{btnClass} {classList} {disabledClass}">
			<slot />
		</button>
	{/if}
</div>
