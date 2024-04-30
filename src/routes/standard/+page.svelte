<script>
  import CombatSet from '$lib/components/CombatSet.svelte';
  import SettingsModal from '$lib/components/SettingsModal.svelte';
  import { standard_combats } from '$lib/index.js'

  $: minCount = 2;
  $: maxCount = 4;
  $: intervalTime = 10;
  $: transitions_present = false;

  function updateSettings(event) {
    ({ minCount, maxCount, intervalTime, transitions_present } = event.detail);
  }
</script>

<SettingsModal {minCount} {maxCount} {intervalTime} {transitions_present} on:save={updateSettings} />
<CombatSet title="Standard Combat" items={standard_combats} {minCount} {maxCount} {intervalTime} {transitions_present} />