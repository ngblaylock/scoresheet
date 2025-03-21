<script lang="ts">
  import { tick } from 'svelte';

  let { players = $bindable(), addPlayerForm = $bindable() } = $props();

  async function addPlayer() {
    players.push({ name: '' });
    await tick;
    const x = document.getElementById(`new-player-${players.length - 1}`);
    x?.focus();
  }

  function updateValidation() {
    const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('.player-input input');
    const playerNames = [...inputs].map((input) => input.value);
    [...inputs].forEach((input) => {
      const filteredNames = playerNames.filter((pn) => pn.trim() === input.value.trim());
      const validationText = filteredNames.length > 1 ? 'Names must be unique' : '';
      input.setCustomValidity(validationText);
    });
  }
</script>

<div class="container">
  <h1 class="text-center font-cursive">Add Players</h1>
  <form
    autocomplete="off"
    bind:this={addPlayerForm}
  >
    <GSortableCards bind:items={players}>
      {#snippet children(player, index)}
        <div class="hstack align-items-end py-1 px-2 flex-fill">
          <GTextInput
            class="flex-fill player-input"
            label="Player"
            bind:value={player.name}
            hideLabel
            id="new-player-{index}"
            required
            oninput={updateValidation}
          />
          <GIconBtn
            icon="close"
            variant="base-i4"
            title="Remove"
            type="button"
            onclick={async () => {
              players.splice(index, 1);
              await tick;
              updateValidation();
            }}
          />
        </div>
      {/snippet}
    </GSortableCards>
  </form>
  <div class="text-center">
    <GBtn
      class="mt-3"
      variant="base-1"
      iconLeft="plus"
      onclick={addPlayer}
    >
      Add Player
    </GBtn>
  </div>
</div>
