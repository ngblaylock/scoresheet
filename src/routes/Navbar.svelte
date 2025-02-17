<script lang="ts">
  import { dev } from '$app/environment';
  import { themeSwitcher } from '@ngblaylock/bootstrap-extensions';
  import { onMount } from 'svelte';
  import type { IconName } from 'nathanblaylock.com/icons';
  import NavbarDevOffcanvas from './NavbarDevOffcanvas.svelte';

  if (import.meta.hot) {
    import.meta.hot.accept(() => {
      setTimeout(() => {
        themeSwitcher.initTheme();
        currentTheme = themeSwitcher.getStoredTheme() || 'system';
      }, 10);
    });
  }

  let currentTheme = $state('');

  onMount(() => {
    currentTheme = themeSwitcher.getStoredTheme() || 'system';
  });

  function toggleMobileTheme(e: MouseEvent) {
    e.stopPropagation();
    themeSwitcher.toggleTheme();
    currentTheme = themeSwitcher.getStoredTheme() || 'system';
  }

  function goBack() {
    return () => history.back();
  }
</script>

{#if dev}
  <div class="d-none d-sm-block dev-mq-helper"></div>
{/if}

{#snippet links(ulClass: string, linkClass: string, showThemeSwitch: boolean = false)}
  <ul class={ulClass} style="--bs-dropdown-min-width: 13rem;">
    <li><a class={linkClass} href="/">New Game</a></li>
    <li><a class={linkClass} href="/setup">Restart</a></li>
    <li><a class={linkClass} href="/about">About</a></li>
    {#if showThemeSwitch}
      <li><hr class="dropdown-divider" /></li>
      <li>
        <GBtn
          class="w-100 justify-content-start"
          variant="base-1"
          aria-label="Switch Theme"
          onclick={toggleMobileTheme}
          iconLeft={`${currentTheme}Mode` as IconName}
        >
          <span class="text-capitalize text-nowrap">{currentTheme} Theme</span>
        </GBtn>
      </li>
    {/if}
  </ul>
{/snippet}

<nav class="scoresheet-navbar p-2 z-1">
  <GIconBtn icon="arrowLeft" title="Back" variant="base-i4" onclick={goBack()} />
  <div class="flex-fill px-4">
    {#if dev}
      <NavbarDevOffcanvas />
    {:else}
      <div class="fs-4 font-cursive text-center text-sm-start">Scoresheet</div>
    {/if}
  </div>
  <!-- sm+ menu -->
  <div class="d-none d-sm-flex align-items-center gap-3">
    {@render links('scoresheet-nav', 'btn btn-sm btn-base-1', false)}
    <input
      type="checkbox"
      aria-label="Switch Theme"
      class="theme-switch"
      data-bse-theme-switch
      onclick={toggleMobileTheme}
    />
  </div>
  <!-- xs menu -->
  <div class="d-sm-none dropdown">
    <GIconBtn
      icon="menu"
      title="Menu"
      variant="base-i4"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    />
    {@render links('dropdown-menu', 'dropdown-item', true)}
  </div>
</nav>

<style lang="scss">
  .scoresheet-navbar {
    display: flex;
    align-items: center;
    width: 100%;
    border-bottom: 2px solid var(--bs-red-200);
    position: sticky;
    top: 0;
    background-color: white;
    background-image: url('/img/grid.svg');
    .scoresheet-nav {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-left: auto;
      margin-bottom: 0;
      li {
        list-style: none;
      }
    }
  }
</style>
