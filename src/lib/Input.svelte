<script lang="ts">
	// Props
	export let value: number | string = '';
	export let id: string;
	export let type: string = 'text';
	export let required: boolean = false;
	export let autocapitalize: string = 'none';

	// Methods
	const handleInput = (e: any) => {
		if (type.match(/^(number|range)$/)) {
			if (!!e.target.value) {
				// if any valid number
				value = +e.target.value;
			} else {
				// empty field or a '-'
				value = '-';
			}
		} else {
			value = e.target.value;
		}
	};
</script>

<div class="flex border border-dark rounded-lg overflow-hidden">
	<input
		autocomplete="off"
		class="py-2 px-2 flex-1 text-center w-full"
		on:input={handleInput}
		{autocapitalize}
		{id}
		{required}
		{type}
	/>
	<slot name="append" />
</div>
