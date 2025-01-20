<script lang="ts">
  import 'nathanblaylock.com/dist/nathanblaylock.min.css';
  import Favicons from './Favicons.svelte';
  import Navbar from './Navbar.svelte';
</script>

<Favicons />


<div class="grid-bg"></div>
<Navbar />
<slot />

{#each Array(100) as x}
  <div>Lorem {x}</div>
{/each}

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
</style>
