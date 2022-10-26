<script lang="ts">
	import { goto } from '$app/navigation';

	function goBack() {
		console.log(document.referrer);

		goto(document.referrer ? document.referrer : '/');
	}
</script>

<div class="flex justify-between border-b-2 p-3">
	<button on:click={goBack}>&lt;</button>
	<div>Scoresheet</div>
	<button>...</button>
</div>
