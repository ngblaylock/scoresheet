<script lang="ts">
  import { nanoid } from 'nanoid';

  let { label, score = $bindable() }: { label: string; score: number | null } = $props();
  const uid = nanoid();
</script>

<div class="card text-bg-base-2 shadow-sm px-4 py-2 hstack">
  <label
    class="font-cursive flex-fill"
    for="score-add-{uid}"
  >
    {label}
  </label>
  <input
    class="form-control"
    style="width: 50%;"
    bind:value={score}
    type="number"
    id="score-add-{uid}"
    step="any"
  />
</div>

<style lang="scss">
  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type='number'] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
</style>
