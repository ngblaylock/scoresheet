<script lang="ts">
  import { onNavigate } from '$app/navigation';
  import 'nathanblaylock.com/styles';
  import 'animate.css';

  import Favicons from './Favicons.svelte';
  import SeoMeta from './SeoMeta.svelte';
  import Navbar from './Navbar.svelte';
  import { getDeviceInfo } from '$lib';

  let { children } = $props();

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });

  let deviceInfo = $state(getDeviceInfo());
</script>

<Favicons />
<SeoMeta />

<div class="grid-bg"></div>
<div class="outer-flex-container">
  <div
    class="inner-flex-container"
    class:pb-5={deviceInfo?.isIOSSafari && deviceInfo?.isPWA}
  >
    <Navbar />
    {@render children()}
  </div>
</div>

<style lang="scss">
  .grid-bg {
    background-color: white;
    background-image: url('/img/grid.svg');
    height: 100vh;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -100;
    &:after {
      content: '';
      background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
  :global([data-bs-theme='dark']) .grid-bg {
    background-color: var(--bs-dark);
    background-image: url('/img/grid-dot.svg');
    &:after {
      background: linear-gradient(180deg, rgba(20, 21, 24, 0) 0%, rgba(20, 21, 24, 1) 100%);
    }
  }

  .outer-flex-container {
    display: flex;
  }

  .inner-flex-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
  }
</style>
