<script lang="ts">
  import { dev } from '$app/environment';
  const beta = false; // set to true if you are working on a new major version
</script>

<svelte:head>
  {#if dev}
    <link
      rel="icon"
      type="image/png"
      href="/favicon-dev/favicon-96x96.png"
      sizes="96x96"
    />
    <link
      rel="icon"
      type="image/svg+xml"
      href="/favicon-dev/favicon.svg"
    />
    <link
      rel="shortcut icon"
      href="/favicon-dev/favicon.ico"
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/favicon-dev/apple-touch-icon.png"
    />
    <meta
      name="apple-mobile-web-app-title"
      content="Scoresheet"
    />
    <link
      rel="manifest"
      href="/favicon-dev/site.webmanifest"
    />
  {:else if beta}
    <link
      rel="icon"
      type="image/png"
      href="/favicon-beta/favicon-96x96.png"
      sizes="96x96"
    />
    <link
      rel="icon"
      type="image/svg+xml"
      href="/favicon-beta/favicon.svg"
    />
    <link
      rel="shortcut icon"
      href="/favicon-beta/favicon.ico"
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/favicon-beta/apple-touch-icon.png"
    />
    <meta
      name="apple-mobile-web-app-title"
      content="Scoresheet"
    />
    <link
      rel="manifest"
      href="/favicon-beta/site.webmanifest"
    />
  {:else}
    <link
      rel="icon"
      type="image/png"
      href="/favicon-96x96.png"
      sizes="96x96"
    />
    <link
      rel="icon"
      type="image/svg+xml"
      href="/favicon.svg"
    />
    <link
      rel="shortcut icon"
      href="/favicon.ico"
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/apple-touch-icon.png"
    />
    <meta
      name="apple-mobile-web-app-title"
      content="Scoresheet"
    />
    <link
      rel="manifest"
      href="/site.webmanifest"
    />
  {/if}
</svelte:head>
