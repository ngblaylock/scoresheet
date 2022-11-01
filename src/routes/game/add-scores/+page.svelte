<script lang="ts">
	import Button from '$lib/Button.svelte';
	import Card from '$lib/Card.svelte';
  import Input from '$lib/Input.svelte';
</script>

<Card classList="mt-4">
  <div class="text-center text-2xl mb-2">Nathan</div>
  <div class="text-center text-3xl">89</div>
  <table class="table-auto w-full mt-4">
    <thead>
      <tr>
        <th>Score</th>
        <th>Points</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="text-center">1</td>
        <td class="text-center">16</td>
        <td class="text-center">16</td>
      </tr>
      <tr>
        <td class="text-center">2</td>
        <td class="text-center">36</td>
        <td class="text-center">52</td>
      </tr>
      <tr>
        <td class="text-center">3</td>
        <td class="text-center">37</td>
        <td class="text-center">89</td>
      </tr>
    </tbody>
  </table>
  <label for="round-points" class="block text-center mt-5">Round 4 Points</label>
  <div class="w-36 mx-auto"><Input id='round-points' /></div>
</Card>

<Button href="/game/scores">Done</Button>
