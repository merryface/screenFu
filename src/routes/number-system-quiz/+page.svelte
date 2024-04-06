<script>
  let countdown = null;
</script>

<div class="container pt-5 h-full mx-auto">
  <h1 class="h1 text-center mb-5">Numbers Quiz</h1>

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