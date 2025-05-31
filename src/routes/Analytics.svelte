<script>
  // @ts-nocheck
  import { dev } from '$app/environment';
  import { afterNavigate } from '$app/navigation';

  afterNavigate(() => {
    if (!dev) {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-SVRZDR3MH4');
    }
  });
</script>

<svelte:head>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
</svelte:head>