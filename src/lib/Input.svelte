<script lang="ts">
	export let value = "defaultHeader";
</script>

<div class="flex border border-dark rounded-lg overflow-hidden">
	<input type="text" class="py-2 px-2 flex-1 text-center" bind:value />
	<slot name="append" />
</div>
