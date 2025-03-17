<script lang="ts">
  import type { Snippet } from 'svelte';

  type Props = {
    children: Snippet;
    actions?: Snippet;
  };
  let { actions, children }: Props = $props();
</script>

<div class="main-section py-4">
  {@render children()}
</div>
<div class="actions-section">
  {@render actions?.()}
</div>
<div class="py-2"></div>

<style lang="scss">
  .main-section {
    flex: 1 0 auto;
  }
</style>
