<script>
  import { createEventDispatcher } from 'svelte';
  import { SlideToggle } from '@skeletonlabs/skeleton';
  const dispatch = createEventDispatcher();

  export let minCount = 2;
  export let maxCount = 4;
  export let intervalTime = 10;
  export let allowTransitions = true;
  export let transitions_present = false;
  export let currentStage = 1;
  let showModal = false;

  function saveSettings() {
    dispatch('save', { minCount, maxCount, intervalTime, transitions_present, currentStage });
    showModal = false;
  }
</script>

<div class={`fixed inset-0 flex items-center justify-center z-50 mb-10 ${showModal ? '' : 'hidden'}`}>
  <div class="modal-container bg-primary-500 p-5 rounded shadow-lg w-5/6 h-5/6">
    <h2 class="mb-4 text-xl">Settings</h2>
    <form on:submit|preventDefault={saveSettings} class="space-y-4">
      <div class="form-group">
        <label for="currentStage" class="block text-sm font-medium ">Current StageFight Level: {currentStage}</label>
        <input id="currentStage" type="range" min="1" max="4" bind:value={currentStage} class="slider w-full" />
      </div>
      <div class="form-group">
        <label for="minCount" class="block text-sm font-medium ">Min SCs: {minCount}</label>
        <input id="minCount" type="range" min="3" max="6" bind:value={minCount} class="slider w-full" />
      </div>
      <div class="form-group">
        <label for="maxCount" class="block text-sm font-medium ">Max SCs: {maxCount}</label>
        <input id="maxCount" type="range" min={minCount} max="12" bind:value={maxCount} class="slider w-full" />
      </div>
      <div class="form-group">
        <label for="intervalTime" class="block text-sm font-medium ">Interval Time: {intervalTime} minutes</label>
        <input id="intervalTime" type="range" min="5" max="60" bind:value={intervalTime} class="slider w-full" />
      </div>
      <div class="form-group">
        {#if allowTransitions}
          <label for="transitions_present" class="block text-sm font-medium ">Transitions: {transitions_present ? 'ON' : 'OFF'}</label>
          <SlideToggle id="transitions_present" name="slide" bind:checked={transitions_present} />
        {/if}
      </div>
      <button type="submit" class="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-surface-600 hover:bg-success-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
      <button on:click={() => showModal = false} class="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-warning-600 hover:bg-success-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Close</button>
    </form>
  </div>
</div>

<button on:click={() => showModal = !showModal} class="fixed bottom-5 right-5 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 z-100">Settings</button>


<style>
  .modal-container {
    border: 2px solid #fff
  }
</style>