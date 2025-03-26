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
        borderWidth: 2.5,
        pointRadius: 2,
      };
    });
    let chart: undefined | Chart;
    if (canvas) {
      Chart.defaults.font.family = 'Urbanist';
      Chart.defaults.font.size = 14;
      chart = new Chart(canvas, {
        type: 'line',
        data: {
          labels: [...Array(getCompletedRoundsCount()).keys()].map((i) => i + 1),
          datasets,
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                font: {
                  family: '"Patrick Hand", "Urbanist"',
                  size: 18,
                },
                color: '#4e4e51',
                boxWidth: 4,
                boxHeight: 6,
                padding: 24,
                usePointStyle: true,
              },
            },
            tooltip:{
              usePointStyle: true,
              boxPadding: 4,
              callbacks: {
                title: function(context) {
                  return `Round ${context[0].label}`;
                }
              }
            }
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
