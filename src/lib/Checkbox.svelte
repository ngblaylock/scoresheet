<script lang="ts">
	let uid: string = 'u' + Math.random().toString(26).slice(2);
	export let checked: boolean = false;
	export let classList: string = '';
</script>

<div class={classList}>
	<input type="checkbox" id={uid} class="invisible" bind:checked />
	<label for={uid} class="text-xl flex items-center justify-center">
		{#if checked}
			<svg
				width="20"
				height="20"
				viewBox="0 0 15 15"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect x="1" y="1" width="13" height="13" rx="1" stroke="#210201" stroke-width="2" />
				<path
					d="M7 11.5L6.3415 12.2526C6.56561 12.4487 6.86546 12.5347 7.15944 12.4872C7.45342 12.4397 7.71095 12.2637 7.86193 12.007L7 11.5ZM2.3415 8.75258L6.3415 12.2526L7.6585 10.7474L3.6585 7.24742L2.3415 8.75258ZM7.86193 12.007L12.8619 3.50702L11.1381 2.49298L6.13807 10.993L7.86193 12.007Z"
					fill="#5E2727"
				/>
			</svg>
		{:else}
			<svg
				width="20"
				height="20"
				viewBox="0 0 15 15"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect x="1" y="1" width="13" height="13" rx="1" stroke="#210201" stroke-width="2" />
			</svg>
		{/if}
		<span class="ml-3">
			<slot />
		</span>
	</label>
</div>
