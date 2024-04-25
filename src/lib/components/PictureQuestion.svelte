<script>

  export let imgSource;
  export let imgAlt;
  export let buttonClick;
  export let isAnswerCorrect;
  $:shake = false;


  function shakeIt() {
    // timeout to stop the animation
    shake = isAnswerCorrect
    setTimeout(() => {
      shake = !isAnswerCorrect
    }, 5)
    
  }

  function handleClick(number) {
    buttonClick(number)
    shakeIt()
  }
</script>

<div>
  <img src={imgSource} alt={imgAlt} class:incorrect={shake} class="question-img"> 
  <div class="answerGrid grid grid-cols-3 gap-4 justify-items-center items-start">
    {#each [1, 2, 3, 4, 5, 6, 7] as number}
      <button type="button" class="btn variant-filled" on:click={() => {handleClick(number)}}>{number}</button>
    {/each}
  </div>
</div>

<style>

  img {
    width: 95%;
    max-width: 450px;
    height: auto;
    margin: auto;
    margin-bottom: 2rem;
  }

  .incorrect {
    animation: shake 0.5s;
    border: 2px solid red;
    border-radius: 10px;
  }

  .unshakeIt {
    animation: none;
  }

  @keyframes shake {
    0% { transform: translate(1px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -2px) rotate(-1deg); }
    20% { transform: translate(-3px, 0px) rotate(1deg); }
    30% { transform: translate(3px, 2px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 2px) rotate(-1deg); }
    60% { transform: translate(-3px, 1px) rotate(0deg); }
    70% { transform: translate(3px, 1px) rotate(-1deg); }
    80% { transform: translate(-1px, -1px) rotate(1deg); }
    90% { transform: translate(1px, 2px) rotate(0deg); }
    100% { transform: translate(1px, -2px) rotate(-1deg); }
  }
</style>