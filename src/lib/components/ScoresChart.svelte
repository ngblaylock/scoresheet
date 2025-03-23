<script lang="ts">
  import Chart from 'chart.js/auto';
  import { onMount } from 'svelte';
  import { getCompletedRoundsCount, getTotals } from '$lib';

  let { gameTotals }: { gameTotals: ReturnType<typeof getTotals> } = $props();

  let canvas: HTMLCanvasElement | undefined = $state();

  onMount(() => {});

  $effect(() => {
    const datasets = gameTotals.map((playerData) => {
      return {
        label: playerData.name,
        data: $state.snapshot(playerData.totalByRound),
        borderColor: playerData.chartColor,
        backgroundColor: playerData.chartColor,
      };
    });
    let chart: undefined | Chart;
    if (canvas) {
      chart = new Chart(canvas, {
        type: 'line',
        data: {
          labels: [...Array(getCompletedRoundsCount()).keys()].map((i) => i + 1),
          datasets,
        },
        options: {
          responsive: true, // for auto sizing
          maintainAspectRatio: false, // allows custom height
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                color: '#333',
                font: {
                  size: 16,
                  family: 'Helvetica',
                  style: 'italic',
                },
                boxWidth: 20,
                boxHeight: 0,
                padding: 20,
              },
            },
          },
        },
      });
    }
    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  });
</script>

<div class="card bg-white border-base-4">
  <div class="card-body">
    <canvas
      bind:this={canvas}
      height="380"
    ></canvas>
  </div>
</div>
