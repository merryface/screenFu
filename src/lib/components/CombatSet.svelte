<script>
  export let items = [];
  export let itemCount = 2;

  let isRunning = false;
  let countdown = null;
  let currentSet = "Prepare for combat";
  let intervalId;

  function getRandomItems() {
    let temp_items = [...items, ...items]; // double the array to allow repeats
    let result = [];
    let count = Math.floor(Math.random() * (itemCount + 1 - 2)) + 2; // random number between 2 and itemCount

    for(let i = 0; i < count; i++) {
      let index = Math.floor(Math.random() * temp_items.length);
      result.push(temp_items[index]);
      temp_items.splice(index, 1); // remove the selected element to avoid more than two repeats
    }

    return result;
  }

  function updateAndSpeakSet() {
    let newSet = getRandomItems().join(', ');
    currentSet = newSet;
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(newSet));
  }

  function startProcess() {
    if (isRunning) return
    isRunning = true
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
    if (!isRunning) return
    isRunning = false
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
    <button class={`${!isRunning ? '' : 'bg-tertiary-800 hover:bg-tertiary-800'} bg-primary-700 hover:bg-primary-800 text-white font-bold py-2 px-4 rounded-lg`} on:click={startProcess} disabled={isRunning}>Start</button>
    <button class={`${isRunning ? '' : 'bg-tertiary-800 hover:bg-tertiary-800'} bg-primary-700 hover:bg-primary-800 text-white font-bold py-2 px-4 rounded-lg`}  on:click={stopProcess} disabled={!isRunning}>Stop</button>
  </div>
  {#if countdown !== null}
  <p class="countdown text-xl text-center mb-5">Time remaining: {countdown} seconds</p>
{/if}
  </div>

</div>