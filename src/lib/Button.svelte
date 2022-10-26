<script lang="ts">
	export let href: string = '';
</script>

<div class=" text-center mt-auto p-4">
	<a {href} class=" bg-primary text-light px-8 py-3 inline-block rounded-xl">
		<slot />
	</a>
</div>
