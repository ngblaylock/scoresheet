<script lang="ts">
	import { compute_slots } from 'svelte/internal';

	export let type: string = 'text';
</script>

<div class="flex border border-dark rounded-lg overflow-hidden">
	<input {type} class="px-3 py-2 flex-auto" />
	<slot name="append" />
</div>
