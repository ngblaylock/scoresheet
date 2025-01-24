<script lang="ts">
  import { dev } from '$app/environment';
  import { IconBtn } from 'nathanblaylock.com';
  import { themeSwitcher } from '@ngblaylock/bootstrap-extensions';
  if (import.meta.hot) {
    import.meta.hot.accept(() => {
      setTimeout(() => {
        themeSwitcher.initTheme();
      }, 10);
    });
  }
</script>

{#if dev}
  <div class="d-none d-sm-block dev-mq-helper"></div>
{/if}

{#snippet links(ulClass: string, linkClass: string)}
  <ul class="{ulClass}">
    <li><a class={linkClass} href="/">New Game</a></li>
    <li><a class={linkClass} href="/setup">Restart</a></li>
    <li><a class={linkClass} href="/about">About</a></li>
  </ul>
{/snippet}

<nav class="scoresheet-navbar p-2">
  <IconBtn icon="arrowLeft" title="Back" variant="base-i4" />
  <div class="flex-fill text-center text-sm-start fs-4 px-4">Scoresheet</div>
  <div class="d-none d-sm-flex gap-4">
    {@render links('scoresheet-nav', 'scoresheet-nav-link')}
    <input type="checkbox" aria-label="Switch Theme" class="theme-switch" data-bse-theme-switch />
  </div>
  <div class="d-sm-none dropdown">
    <IconBtn
      icon="menu"
      title="Menu"
      variant="base-i4"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    />
    {@render links('dropdown-menu', 'dropdown-item')}
  </div>
</nav>

<style lang="scss">
  .scoresheet-navbar {
    display: flex;
    align-items: center;
    width: 100%;
    border-bottom: 2px solid var(--bs-red-200);
    .scoresheet-nav{
      display: flex;
      align-items: center;
      gap: 8px;
      margin-left: auto;
      margin-bottom: 0;
      li{
        list-style: none;
        .scoresheet-nav-link{
          text-decoration: none;
        }
      }
    }
  }
</style>
