<script>
	import PictureQuestion from '$lib/components/PictureQuestion.svelte';
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
    <PictureQuestion imgSource={imgSource} imgAlt={imgAlt} correctAnswer={correctAnswer} buttonClick={buttonClick} />
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