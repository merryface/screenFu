<script>
  import { onMount } from 'svelte';
  import PictureQuestion from '$lib/components/PictureQuestion.svelte';
  import questions from '$lib/questions';

  // State Variables
  let quizRunning = false;
  let showNextButton = false;
  let isAnswerCorrect = true;

  // Question related
  let currentQuestionIndex = 0;
  let currentAnswer = null;
  let imgSource = questions[currentQuestionIndex].imgSource;
  let imgAlt = questions[currentQuestionIndex].imgAlt;
  let correctAnswer = questions[currentQuestionIndex].correctAnswer;

  // Timer related
  $:countdown = 5;
  let timerId = null;

  const checkAnswer = () => currentAnswer === correctAnswer;

  function buttonClick(number) {
    currentAnswer = number;
    isAnswerCorrect = checkAnswer();
    if (isAnswerCorrect) {
      nextQuestion();
    }
  }

  function nextQuestion() {
    currentQuestionIndex += 1;
    imgSource = questions[currentQuestionIndex].imgSource;
    imgAlt = questions[currentQuestionIndex].imgAlt;
    correctAnswer = questions[currentQuestionIndex].correctAnswer;
    startCountdown();
  }

  function startCountdown() {
    countdown = 4;
    clearInterval(timerId);
    timerId = setInterval(() => {
      countdown -= 1;
      if (countdown === 0) {
        clearInterval(timerId);
        nextQuestion();
      }
    }, 1000);
  }

  $: if (quizRunning) {
    startCountdown();
  }
</script>


<div class="container pt-5 h-full mx-auto">
  <h1 class="h1 text-center mb-5">Numbers Quiz</h1>

  <div class="container flex flex-col mx-auto md:mt-1/3">
    {#if quizRunning}
      <PictureQuestion {imgSource} {imgAlt} {buttonClick} {isAnswerCorrect}/>
    {:else}
      <button type="button" class="btn variant-filled" on:click={() => quizRunning = true}>Start Quiz</button>
    {/if}
  </div>


  <!-- timer -->
  <div class="timer mx-auto flex flex-col mx-auto md:mt-1/3">
    <div class="instructions text-2xl mb-5 w-5/6 text-right">
    {#if quizRunning}
    <p class="countdown text-xl mb-5">{countdown} seconds</p>
    {/if}
    </div>
  </div>
</div>

<style>
  .container {
    justify-content: center;
    align-items: center;
    max-width: 280px;
  }

  .timer {
    position: fixed;
    right: 0;
    bottom: 0%;
    width: 10rem;
  }
</style>