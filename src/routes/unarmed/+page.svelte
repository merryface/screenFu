<script>
  import CombatSet from '$lib/components/CombatSet.svelte';
  import SettingsModal from '$lib/components/SettingsModal.svelte';
  import { unarmed_standards } from '$lib/index.js'

  $: minCount = 2;
  $: maxCount = 4;
  $: intervalTime = 30;
  $: transitions_present = false;

  function updateSettings(event) {
    ({ minCount, maxCount, intervalTime, transitions_present } = event.detail);
  }
</script>

<SettingsModal allowTransitions={false} {minCount} {maxCount} {intervalTime} {transitions_present} on:save={updateSettings} />
<CombatSet title="Unarmed Combat" items={unarmed_standards} {minCount} {maxCount} {intervalTime} {transitions_present} />