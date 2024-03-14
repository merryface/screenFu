<script>
  import {transitions} from '$lib/index.js'

  // Props
  export let title = "Combat Set";
  export let items = [];
  export let maxCount = 2;
  export let minCount = 2;
  export let transitions_present = false;
  export let intervalTime = 30;

  let isRunning = false;
  let countdown = null;
  let currentSet = ["Prepare for combat"];
  let intervalId;

  const combatantRoleNeeded = (instruction, i) => instruction !== "Prepare for combat" && (!transitions_present || (transitions_present && i % 2 === 0))


  function getRandomItems() {
    let temp_items = [...items, ...items]; // double the array to allow repeats
    let result = [];
    let count = Math.floor(Math.random() * (maxCount + 1 - 2)) + minCount; // random number between minCount and maxCount

    for(let i = 0; i < count; i++) {
      let index = Math.floor(Math.random() * temp_items.length);
      result.push(temp_items[index]);
      temp_items.splice(index, 1); // remove the selected element to avoid more than two repeats
    }
    
    if (transitions_present) {
    // Add a random transition between combats within the results array
    let resultWithTransitions = [];
    for(let i = 0; i < result.length - 1; i++) {
      resultWithTransitions.push(result[i]);
      let transitionIndex = Math.floor(Math.random() * transitions.length);
      resultWithTransitions.push(transitions[transitionIndex]);
    }
    resultWithTransitions.push(result[result.length - 1]); // add the last combat without a following transition
    result = resultWithTransitions;
  }

    return result;
  }

  function updateAndSpeakSet() {
    const set = getRandomItems();
    let spokenSet = set.join(',');
    currentSet = set;
    let utterance = new SpeechSynthesisUtterance(spokenSet);
    utterance.onend = () => {
      if (!isRunning) return; // if isRunning is false, return immediately
      clearInterval(intervalId); // clear the existing interval
      countdown = intervalTime;
      intervalId = setInterval(() => { // start a new interval
        if (countdown > 0) countdown--;
        else {
          clearInterval(intervalId); // clear the interval before updating and speaking the next set
          updateAndSpeakSet();
        }
      }, 1000); // update every second
    };
    window.speechSynthesis.speak(utterance);
  }

function startProcess() {
  if (isRunning) return;
  isRunning = true;
  updateAndSpeakSet();
}

function stopProcess() {
  if (!isRunning) return;
  isRunning = false;
  clearInterval(intervalId);
  window.speechSynthesis.cancel(); // stop the speech synthesis
  currentSet = ["Prepare for combat"];
  countdown = null;
}
</script>

<div class="container pt-5 h-full mx-auto">
  <h1 class="h1 text-center mb-5">{title}</h1>

  <div class="container mx-auto flex flex-col mx-auto mt-20 md:mt-1/3">
  <div class="instructions text-2xl text-center mb-5 w-5/6">
{#each currentSet as instruction, i}
  {#if combatantRoleNeeded(instruction, i)}
    {#if Math.random() < 0.5}
      <p class={`text-2xl text-center mb-5 border-2 border-error-500 text-error-500
      ${transitions_present && i % 2 !== 0 ? 'text-blue-500 italic' : ''} 
      ${instruction === "Prepare for combat" ? '' : ' instruction'}`}>
        <span>A:</span> {instruction}
      </p>
    {:else}
      <p class={`text-2xl text-center mb-5 border-2 border-warning-500 text-warning-500
      ${transitions_present && i % 2 !== 0 ? 'text-blue-500 italic' : ''} 
      ${instruction === "Prepare for combat" ? '' : ' instruction'}`}>
        <span>B:</span> {instruction}
      </p>
    {/if}
  {:else}
    <p class={`text-2xl text-center mb-5
    ${transitions_present && i % 2 !== 0 ? 'text-blue-500 italic' : ''} 
    ${instruction === "Prepare for combat" ? '' : ' instruction'}`}>
      {instruction}
    </p>
  {/if}
{/each} 
  </div>
  <div class="flex justify-center items-center gap-x-2 mb-2">
    <button class={`${!isRunning ? '' : 'bg-tertiary-800 hover:bg-tertiary-800'} bg-primary-700 hover:bg-primary-800 text-white font-bold py-2 px-4 rounded-lg`} on:click={startProcess} disabled={isRunning}>Start</button>
    <button class={`${isRunning ? '' : 'bg-tertiary-800 hover:bg-tertiary-800'} bg-primary-700 hover:bg-primary-800 text-white font-bold py-2 px-4 rounded-lg`}  on:click={stopProcess} disabled={!isRunning}>Stop</button>
  </div>
  {#if countdown !== null}
  <p class="countdown text-xl text-center mb-5">Time remaining: {countdown} seconds</p>
{/if}
  </div>
</div>

<style>
  .container {
    justify-content: center;
    align-items: center;
  }

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