<script lang="ts">
  import { dev } from '$app/environment';
</script>

<div>Navbar</div>

{#if dev}
  <div class="d-none d-sm-block dev-mq-helper"></div>
{/if}
