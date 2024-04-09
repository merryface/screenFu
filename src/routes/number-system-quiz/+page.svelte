<script>
  let countdown = null;
  let quizRunning = false;
  let imgSource =''
  let imgAlt = ''
  let currentAnswer = null;
  let correctAnswer = 2

  const checkAnswer = () => currentAnswer === correctAnswer ? "Correct!" : "Incorrect. Try again"

  function buttonClick(number, optionalFunction) {
    currentAnswer = number;
    if (optionalFunction) {
      optionalFunction();
    }
    checkAnswer();
    console.log(checkAnswer())
  }
</script>

<div class="container pt-5 h-full mx-auto">
  <h1 class="h1 text-center mb-5">Numbers Quiz</h1>

  <div class="container flex flex-col mx-auto mt-20 md:mt-1/3">
    <img src={imgSource} alt={imgAlt} class="question-img">
    <div class="answerGrid grid grid-cols-3 gap-4 justify-items-center items-start">
      {#each [1, 2, 3, 4, 5, 6, 7] as number}
        <button type="button" class="btn variant-filled"on:click={() => buttonClick(number)}>{number}</button>
      {/each}
    </div>
  </div>


  <!-- timer -->
  <div class="container mx-auto flex flex-col mx-auto mt-20 md:mt-1/3">

    <div class="instructions text-2xl text-center mb-5 w-5/6">
    {#if countdown !== null}
    <p class="countdown text-xl text-center mb-5">Time remaining: {countdown} seconds</p>
    {/if}
    </div>
  </div>
</div>

<style>
  .container {
    justify-content: center;
    align-items: center;
  }
</style>