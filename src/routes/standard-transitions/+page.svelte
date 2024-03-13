<script>
  import CombatSet from '$lib/components/CombatSet.svelte';
  import SettingsModal from '$lib/components/SettingsModal.svelte';
  import { standard_combats } from '$lib/index.js'

  $: minCount = 2;
  $: maxCount = 4;
  $: intervalTime = 30;

  function updateSettings(event) {
    ({ minCount, maxCount, intervalTime } = event.detail);
  }
</script>

<SettingsModal {minCount} {maxCount} {intervalTime} on:save={updateSettings} />
<CombatSet items={standard_combats} {minCount} {maxCount} {intervalTime} transitions_present={true} />