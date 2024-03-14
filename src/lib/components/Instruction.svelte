<script>
  export let instruction;
  export let i;
  export let transitions_present;
  export let role;

  const styleForCurrentRole = () => {
    if(role === 'A') {
      return ' border-2 border-error-500 text-error-500';
    }
    if(role === 'B') {
      return ' border-2 border-warning-500 text-warning-500';
    }
    else {
      return '';
    }
  }
</script>

<p class={`text-2xl text-center mb-5
  border-${styleForCurrentRole()}
  ${transitions_present && i % 2 !== 0 ? 'text-blue-500 italic' : ''} 
  ${instruction === "Prepare for combat" ? '' : ' instruction'}`}>
  {#if role}<span>{role}:</span>{/if} {instruction}
</p>

<style>
    .instruction {
    border-radius: 5px;
    text-align: left;
    height: 3rem;
    display: flex;
    align-items: center;
    padding-left: 1rem;
    gap: 1rem;
  }
</style>