<script lang="ts">
	export let value = "";
	export let id: string;
</script>

<div class="flex border border-dark rounded-lg overflow-hidden">
	<input type="text" class="py-2 px-2 flex-1 text-center w-full" bind:value {id} />
	<slot name="append" />
</div>
