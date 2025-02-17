<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import ScoresheetSvg from './ScoresheetSvg.svelte';

  onMount(() => {
    setTimeout(() => {
      goto('/setup', { replaceState: true });
    }, 1500);
  });
</script>

<div class="splashscreen pb-6 z-3">
  <ScoresheetSvg />
</div>

<style lang="scss">
  .splashscreen {
    background: var(--bs-red-800);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
</style>
