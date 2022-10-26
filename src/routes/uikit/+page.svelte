<script lang="ts">
	let theme = [
		{ color: 'dark', background: 'bg-dark', text: 'text-light' },
		{ color: 'primary', background: 'bg-primary', text: 'text-light' },
		{ color: 'light', background: 'bg-light', text: 'text-dark' }
	];
	let redTheme = [
		{ color: 'red-900', background: 'bg-red-900', text: 'text-light' },
		{ color: 'red-800', background: 'bg-red-800', text: 'text-light' },
		{ color: 'red-700', background: 'bg-red-700', text: 'text-light' },
		{ color: 'red-600', background: 'bg-red-600', text: 'text-light' },
		{ color: 'red-500', background: 'bg-red-500', text: 'text-light' },
		{ color: 'red-400', background: 'bg-red-400', text: 'text-light' },
		{ color: 'red-300', background: 'bg-red-300' },
		{ color: 'red-200', background: 'bg-red-200' },
		{ color: 'red-100', background: 'bg-red-100' },
		{ color: 'red-500', background: 'bg-red-50' }
	];
	let grayTheme = [
		{ color: 'gray-900', background: 'bg-gray-900', text: 'text-light' },
		{ color: 'gray-800', background: 'bg-gray-800', text: 'text-light' },
		{ color: 'gray-700', background: 'bg-gray-700', text: 'text-light' },
		{ color: 'gray-600', background: 'bg-gray-600', text: 'text-light' },
		{ color: 'gray-500', background: 'bg-gray-500',  text: 'text-light' },
		{ color: 'gray-400', background: 'bg-gray-400' },
		{ color: 'gray-300', background: 'bg-gray-300' },
		{ color: 'gray-200', background: 'bg-gray-200' },
		{ color: 'gray-100', background: 'bg-gray-100' },
		{ color: 'gray-50', background: 'bg-gray-50' }
	];
	const getColor = (hi : string):string => {
		return hi;
	}
</script>

<div class="container mx-auto">
	<h1 class="text-5xl">UI Kit</h1>
	<div class="grid grid-cols-3 gap-4 mt-4">
		{#each theme as color}
			<div class="{color.background} {color.text} p-2">{color.color} {getColor(color.background)}</div>
		{/each}
	</div>
	<div class="grid grid-cols-2 gap-4 mt-4">
		<div>
			{#each redTheme as red}
				<div class="{red.background} {red.text} p-2">{red.color}</div>
			{/each}
		</div>

		<div>
			{#each grayTheme as gray}
				<div class="{gray.background} {gray.text} p-2">{gray.color}</div>
			{/each}
		</div>
	</div>
</div>
