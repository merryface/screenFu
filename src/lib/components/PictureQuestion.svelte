<script>
  export let imgSource;
  export let imgAlt;
  export let correctAnswer;
  export let buttonClick;
</script>

<img src={imgSource} alt={imgAlt} class="question-img"> 
<div class="answerGrid grid grid-cols-3 gap-4 justify-items-center items-start">
  {#each [1, 2, 3, 4, 5, 6, 7] as number}
    <button type="button" class="btn variant-filled" on:click={() => buttonClick(number)}>{number}</button>
  {/each}
</div>