<script>
  import PictureQuestion from '$lib/components/PictureQuestion.svelte';
  import questions from '$lib/questions';

  // State Variables
  let quizRunning = false;
  let quizFinished = false;
  let isAnswerCorrect = true;
  let correctAnswers = 0;

  // Question related
  let currentQuestionIndex = 0;
  let currentAnswer = null;
  let shuffledQuestions = shuffle(questions)
  let imgSource = shuffledQuestions[currentQuestionIndex].imgSource;
  let imgAlt = shuffledQuestions[currentQuestionIndex].imgAlt;
  let correctAnswer = shuffledQuestions[currentQuestionIndex].correctAnswer;

  // Timer related
  $:countdown = 15;
  let timerId = null;

  const checkAnswer = () => currentAnswer === correctAnswer;

  function buttonClick(number) {
    currentAnswer = number;
    isAnswerCorrect = checkAnswer();
    if (isAnswerCorrect) {
      correctAnswers += 1;
      nextQuestion();
    }
  }

  function nextQuestion() {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      currentQuestionIndex += 1;
      imgSource = shuffledQuestions[currentQuestionIndex].imgSource;
      imgAlt = shuffledQuestions[currentQuestionIndex].imgAlt;
      correctAnswer = shuffledQuestions[currentQuestionIndex].correctAnswer;
      startCountdown();
    } else {
      quizFinished = true;
    }
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

  function startQuiz() {
    quizRunning = true;
    quizFinished = false;
    correctAnswers = 0;
    currentQuestionIndex = 0;
    startCountdown();
  }
</script>


<div class="container pt-5 mx-auto">
  <h1 class="h1 text-center mb-5">Numbers Quiz</h1>

  <div class="container flex flex-col mx-auto md:mt-1/3">
    {#if quizRunning}
      {#if quizFinished}
      <div class="summary">
        <p class="final-score">Your score: {correctAnswers}/{shuffledQuestions.length}</p>
        <button class="btn variant-filled" on:click={startQuiz}>Start Again</button>
      </div>
      {:else}
        <PictureQuestion {imgSource} {imgAlt} {buttonClick} {isAnswerCorrect}/>
      {/if}
    {:else}
      <button type="button" class="btn variant-filled" on:click={startQuiz}>Start Quiz</button>
    {/if}
  </div>


  <!-- timer -->
  <div class="timer mx-auto flex flex-col mx-auto md:mt-1/3">
    <div class="data text-2xl mb-5 w-5/6 text-right">
    {#if quizRunning}
    <p class="countdown text-xl mb-5">{countdown} seconds</p>
    <p class="score text-xl mb-5">{correctAnswers}/{currentQuestionIndex + 1}</p>
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

  .summary {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
  }

  .final-score {
    border: 2px solid;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    font-size: 1.5rem;
  }

  .timer {
    position: fixed;
    right: 0;
    bottom: -5%;
    width: 10rem;
  }
</style>