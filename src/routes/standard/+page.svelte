<script>
  let countdown = null;
  const standard_combats = [
    "Twos",
    "Threes",
    "First triangle",
    "Fours",
    "Fives",
  ]

  let currentSet = "Prepare for combat";
  let intervalId;

  function getRandomCombats() {
    let temp_combats = [...standard_combats, ...standard_combats]; // double the array to allow repeats
    let result = [];
    let count = Math.floor(Math.random() * 3) + 2; // random number between 2 and 4

    for(let i = 0; i < count; i++) {
      let index = Math.floor(Math.random() * temp_combats.length);
      result.push(temp_combats[index]);
      temp_combats.splice(index, 1); // remove the selected element to avoid more than two repeats
    }

    return result;
  }

  function updateAndSpeakSet() {
    let newSet = getRandomCombats().join(', ');
    currentSet = newSet;
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(newSet));
  }

  function startProcess() {
    updateAndSpeakSet();
    countdown = 30;
    intervalId = setInterval(() => {
      if (countdown > 0) countdown--;
      else {
        updateAndSpeakSet();
        countdown = 30;
      }
    }, 1000); // update every second
  }

  function stopProcess() {
    clearInterval(intervalId);
    currentSet = "Prepare for combat";
    countdown = null;
  }
</script>

<div class="container pt-5 h-full mx-auto">
  <h1 class="h1 text-center mb-5">Standard Combats</h1>

  <div class="container mx-auto flex flex-col mx-auto mt-20 md:mt-1/3">
  <p class="instruction text-2xl text-center mb-5">{currentSet}</p>
  <div class="flex justify-center items-center gap-x-2 mb-2">
    <button class="bg-primary-700 hover:bg-primary-800 text-white font-bold py-2 px-4 rounded-lg" on:click={startProcess}>Start</button>
    <button class="bg-primary-700 hover:bg-primary-800 text-white font-bold py-2 px-4 rounded-lg" on:click={stopProcess}>Stop</button>
  </div>
  {#if countdown !== null}
  <p class="countdown text-xl text-center mb-5">Time remaining: {countdown} seconds</p>
{/if}
  </div>

</div>