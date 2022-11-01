<script lang="ts">
	import Button from '$lib/Button.svelte';
	import Title from '$lib/Title.svelte';
  import Card from '$lib/Card.svelte';
  let players = [{ name: 'Nathan', score: 89 }, { name: 'Donna', score: 210 }, { name: 'Jebby', score: 112 }];
</script>

<Title>Round 3</Title>

{#each players as player}
  <Card classList="mb-1">
    <div class="flex justify-between">
      {player.name}
      <span>{player.score}</span>
    </div>
  </Card>
{/each}

<Button href="/game/add-scores">Add Scores</Button>
