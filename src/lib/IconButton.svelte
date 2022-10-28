<script lang="ts">
  export let icon :string;
  export let alt :string;
  export let active :boolean = false;
</script>

<button on:click class="flex items-center justify-center w-8 h-8 rounded-full {active ? 'bg-red-100' : ''} hover:bg-red-50 transition-colors duration-500">
  <img src="/icons/{icon}.svg" alt="{alt}" />
</button>