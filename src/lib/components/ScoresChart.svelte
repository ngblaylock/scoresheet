<script lang="ts">
  import Chart from 'chart.js/auto';
  import { onMount } from 'svelte';
  import { getCompletedRoundsCount, getTotals } from '$lib';

  let { gameTotals }: { gameTotals: ReturnType<typeof getTotals> } = $props();

  let canvas: HTMLCanvasElement | undefined = $state();

  let theme = $state('light');

  onMount(() => {
    // This is a way to WATCH the theme in the DOM to update the chart style
    const targetNode = document.documentElement;

    function handleThemeChange() {
      const newTheme = targetNode.getAttribute('data-bs-theme') || 'light';
      theme = newTheme;
    }

    const observer = new MutationObserver(() => {
      handleThemeChange();
    });

    observer.observe(targetNode, {
      attributes: true,
      attributeFilter: ['data-bs-theme'],
    });

    handleThemeChange();

    return () => {
      observer.disconnect();
    };
  });

  $effect(() => {
    const colors =
      theme === 'light'
        ? {
            border: 'rgba(0, 0, 0, 0.1)',
            labelText: 'rgba(0, 0, 0, 0.8)',
            legendText: 'rgba(0, 0, 0, 1',
          }
        : {
            border: 'rgba(255, 255, 255, 0.1)',
            labelText: 'rgba(255, 255, 255, 0.8)',
            legendText: 'rgba(255, 255, 255, 1)',
          };

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
                color: colors.legendText,
                boxWidth: 4,
                boxHeight: 6,
                padding: 24,
                usePointStyle: true,
              },
            },
            tooltip: {
              usePointStyle: true,
              boxPadding: 4,
              callbacks: {
                title: function (context) {
                  return `Round ${context[0].label}`;
                },
              },
            },
          },
          scales: {
            x: {
              grid: {
                color: colors.border,
              },
              ticks: {
                color: colors.labelText,
              },
            },
            y: {
              grid: {
                color: colors.border,
              },
              ticks: {
                color: colors.labelText,
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
  <div class="card-body bg-base-1">
    <canvas
      bind:this={canvas}
      height="380"
    ></canvas>
  </div>
</div>
