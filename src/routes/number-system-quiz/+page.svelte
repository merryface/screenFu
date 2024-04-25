<script>
  import PictureQuestion from '$lib/components/PictureQuestion.svelte';
  import questions from '$lib/questions';

  // State Variables
  let quizRunning = false;
  let showNextButton = false;
  let isAnswerCorrect = true;

  // Question related
  let currentQuestionIndex = 0;
  let currentAnswer = null;
  let shuffledQuestions = shuffle(questions)
  let imgSource = shuffledQuestions[currentQuestionIndex].imgSource;
  let imgAlt = shuffledQuestions[currentQuestionIndex].imgAlt;
  let correctAnswer = shuffledQuestions[currentQuestionIndex].correctAnswer;

  // Timer related
  $:countdown = 10;
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
    imgSource = shuffledQuestions[currentQuestionIndex].imgSource;
    imgAlt = shuffledQuestions[currentQuestionIndex].imgAlt;
    correctAnswer = shuffledQuestions[currentQuestionIndex].correctAnswer;
    startCountdown();
  }

  function startCountdown() {
    countdown = 10;
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

  function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
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