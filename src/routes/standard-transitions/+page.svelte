<script>
  import CombatSet from '$lib/components/combatSet.svelte';
  import { standard_combats } from '$lib/index.js'
</script>


<CombatSet items={standard_combats} minCount={2} maxCount={3} transitions_present={true} />