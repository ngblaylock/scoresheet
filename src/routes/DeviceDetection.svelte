<script lang="ts">
  import { onMount } from 'svelte';

  function isIosPwa() {
    const ua = navigator.userAgent;

    // Detect iOS devices (iPhone/iPad) & filter out Macs
    const isIOS = /iPhone|iPad|Mac/i.test(ua) && navigator.maxTouchPoints > 1;

    if (!isIOS) return false;

    // Check if running as a PWA (installed shortcut)
    const isPWA =
      window.matchMedia('(display-mode: standalone)').matches || (navigator as any).standalone;

    if (!isPWA) return false; // Exit if it's not a PWA

    // List of known iPhone models with a home indicator
    const homeIndicatorModels = [
      780, // iPhone 12/13 Mini
      812, // iPhone X, XS, 11 Pro, 14 Pro
      844, // iPhone 12/13/14/15
      896, // iPhone XR, 11, 11 Pro Max
      926, // iPhone 12/13/14 Pro Max
      852, // iPhone 15 Pro
      932, // iPhone 15 Pro Max
    ];

    const screenHeight = Math.max(window.screen.width, window.screen.height); // Handles landscape mode

    return homeIndicatorModels.includes(screenHeight);
  }

  onMount(() => {
    if (isIosPwa()) {
      const container = document.querySelector('.inner-flex-container');
      if (container) (container as HTMLDivElement).style.paddingBottom = '24px';
    }
  });
</script>
