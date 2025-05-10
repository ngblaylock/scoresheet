<script lang="ts">
  import type { getTotals } from '$lib';
  import { onMount } from 'svelte';

  let { gameTotals }: { gameTotals: ReturnType<typeof getTotals> } = $props();

  let topPlayers = $derived(gameTotals.slice(0, 3));

  function getOrder(position: number) {
    if (topPlayers.length < 3) return 1;
    else if (position === 0) return 2;
    else if (position === 1) return 1;
    else if (position === 2) return 3;
    else return 4;
  }
  function getHeight(position: number) {
    if (position === 0) return 'h-100';
    if (position === 1) return 'h-50';
    if (position === 2) return 'h-25';
    else return 'h-25';
  }

  let showPodium = $state([
    {
      delay: 3600,
      show: false,
    },
    {
      delay: 1800,
      show: false,
    },
    {
      delay: 0,
      show: false,
    },
  ]);

  onMount(() => {
    // Helps the animation in case there are less than 3 players
    showPodium.splice(0, 3 - topPlayers.length);
    
    showPodium.forEach((podium) => {
      setTimeout(() => {
        podium.show = true;
      }, podium.delay);
    });
  });
</script>

<div class="row justify-content-center flex-fill gx-3 my-5">
  {#each topPlayers as player, index}
    <div class="col-4 order-{getOrder(index)}">
      {#if showPodium[index].show}
        <div class="h-100 d-flex flex-column align-items-center text-center justify-content-end pb-7">
          <div class="font-cursive lead animate__animated animate__fadeIn animate__delay-1s">
            {player.name}
          </div>
          <div class="display-2 font-cursive animate__animated animate__fadeIn animate__delay-1s">
            {player.total}
          </div>
          <div
            class="bg-base-4 w-100 {getHeight(
              index,
            )} d-flex justify-content-center align-items-end animate-grow"
          >
            <div class="set-badge-below">
              <div class="animate__animated animate__fadeInDown animate__delay-1s">
                {#if index === 0}
                  <svg
                    width="98"
                    height="98"
                    viewBox="0 0 98 98"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="animate-spin"
                  >
                    <path
                      d="M49 0L55.1859 9.94384L64.1418 2.39823L66.9521 13.7669L77.8015 9.35817L76.9611 21.0389L88.6418 20.1985L84.2331 31.0479L95.6018 33.8582L88.0562 42.8141L98 49L88.0562 55.1859L95.6018 64.1418L84.2331 66.9521L88.6418 77.8015L76.9611 76.9611L77.8015 88.6418L66.9521 84.2331L64.1418 95.6018L55.1859 88.0562L49 98L42.8141 88.0562L33.8582 95.6018L31.0479 84.2331L20.1985 88.6418L21.0389 76.9611L9.35817 77.8015L13.7669 66.9521L2.39823 64.1418L9.94384 55.1859L0 49L9.94384 42.8141L2.39823 33.8582L13.7669 31.0479L9.35817 20.1985L21.0389 21.0389L20.1985 9.35817L31.0479 13.7669L33.8582 2.39823L42.8141 9.94384L49 0Z"
                      fill="#14297B"
                    />
                  </svg>
                {:else}
                  <svg
                    width="66"
                    height="66"
                    viewBox="0 0 66 66"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="33"
                      cy="33"
                      r="33"
                      fill="#14297B"
                    />
                  </svg>
                {/if}
                <span class="set-num-position display-{index === 0 ? '2' : '5'}">{index + 1}</span>
              </div>
            </div>
          </div>
        </div>
      {/if}
    </div>
  {/each}
</div>

<style lang="scss">
  .set-num-position {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
  }
  .set-badge-below {
    position: relative;
    transform: translateY(50%);
  }

  // Animations
  .animate-spin {
    animation: spin 45s linear infinite;
  }
  .animate-grow {
    animation: scale 1s ease;
    transform-origin: bottom;
  }

  @keyframes scale {
    0% {
      transform: scaleY(0);
    }
    100% {
      transform: scaleY(1);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
