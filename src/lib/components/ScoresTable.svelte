<script lang="ts">
  import { getTotals } from '$lib';
  import { onMount } from 'svelte';

  let { gameTotals }: { gameTotals: ReturnType<typeof getTotals> } = $props();
  let rounds = $derived.by(() => {
    return gameTotals[0]?.rounds.map((_round, index) => index + 1);
  });
  let tableContainer: HTMLDivElement | undefined = $state();

  onMount(() => {
    if (tableContainer) tableContainer.scrollLeft = tableContainer.scrollWidth;
  });
</script>

{#if gameTotals?.length}
  <div
    class="table-responsive"
    bind:this={tableContainer}
  >
    <table class="table table-striped font-cursive">
      <thead>
        <tr>
          <th class="sticky-col">Player</th>
          {#each rounds as round}
            <th class="text-center">{round}</th>
          {/each}
          <th class="text-center">Total</th>
        </tr>
      </thead>
      <tbody>
        {#each gameTotals as player}
          <tr style="vertical-align: middle;">
            <td class="sticky-col">{player.name}</td>
            {#each player.rounds as round, index}
              <td class="text-center">
                <div>{round === null ? '-' : round}</div>
                <small class="text-base-i4">{player.totalByRound[index]}</small>
              </td>
            {/each}
            <td class="text-center"><strong>{player.total ?? '-'}</strong></td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
{/if}

<style lang="scss">
  .table-responsive {
    .table {
      border-collapse: separate;
      border-spacing: 0;
    }
  }
  .sticky-col {
    position: sticky;
    left: 0;
    border-right-width: 2px !important;
    background-clip: padding-box;
  }
</style>
