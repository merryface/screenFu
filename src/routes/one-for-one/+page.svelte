<script>
  import { RangeSlider, Accordion, AccordionItem } from '@skeletonlabs/skeleton';

  let minMoves = 4
  let maxMoves = 12;
  let moves = []

  const generateMove = () => Math.floor(Math.random() * 7) + 1;
  const generateRoutine = () => {
    moves = [];
    for (let i = 0; i < Math.floor(Math.random() * (maxMoves - minMoves) + minMoves); i+=1) {
      moves.push(generateMove());
    }
  }
</script>


<div class="container pt-5 mx-auto">
  <h1 class="h1 text-center">Pinking</h1>

  <div class="container mx-auto flex flex-col mx-auto mt-20 md:mt-1/3">
    <div class="sliders">
      <Accordion>
        <AccordionItem open>
          <svelte:fragment slot="lead">⚙️</svelte:fragment>
          <svelte:fragment slot="summary">Settings</svelte:fragment>
          <svelte:fragment slot="content">
            <RangeSlider name="range-slider" bind:value={minMoves} max={8} step={1} ticked>
              <div class="flex justify-between items-center">
                <div class="font-bold">Min Moves</div>
                <div class="text-xs">{minMoves} / 8</div>
              </div>
            </RangeSlider>
            
            <RangeSlider name="range-slider" bind:value={maxMoves} max={16} min={4} step={1} ticked>
              <div class="flex justify-between items-center">
                <div class="font-bold">Max Moves</div>
                <div class="text-xs">{maxMoves} / 16</div>
              </div>
            </RangeSlider>
          </svelte:fragment>
        </AccordionItem>
        <!-- ... -->
      </Accordion>
    </div>
      
    <button class="bg-secondary-800 hover:bg-tertiary-700 font-bold py-2 px-4 rounded-lg" on:click={generateRoutine}>Generate Choreography</button>
    <div class="moves text-2xl text-center mb-5 w-5/6">
      {#each moves as move, i}
        <div class={"move " + (i % 2 === 0 ? 'B' : 'A')}>
          {(i % 2 === 0 ? 'B' : 'A') + ": " + move}
        </div>
      {/each}
    </div>
  </div>


</div>


<style>
  button {
    margin-top: 1rem;
  }
  .container {
    justify-content: center;
    align-items: center;
  }

  .moves {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 90%;
    margin: auto;
    margin-top: 3rem;
    margin-bottom: 5rem;
  }

  .move {
    border: solid 1px;
    border-radius: 5px;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .A {
    background-color: rgb(183, 15, 15);
  }

  .B {
    background-color: rgb(29, 119, 29);
  }

  .sliders {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 90%;
    max-width: 800px;
  }

</style>