<script>
  import CombatSet from '$lib/components/CombatSet.svelte';
  import SettingsModal from '$lib/components/SettingsModal.svelte';
  import { all_standard_combats } from '$lib/index.js'

  $: minCount = 2;
  $: maxCount = 4;
  $: intervalTime = 10;
  $: transitions_present = false;
  $: currentStage = 1;

  function updateSettings(event) {
    ({ minCount, maxCount, intervalTime, transitions_present, currentStage } = event.detail);
  }
</script>

<SettingsModal {minCount} {maxCount} {intervalTime} {transitions_present} {currentStage} on:save={updateSettings} />
<CombatSet title="Standard Combat" items={all_standard_combats[currentStage-1]} {minCount} {maxCount} {intervalTime} {transitions_present} />