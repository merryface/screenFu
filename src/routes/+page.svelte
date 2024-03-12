<script>
	const combat_trainers = [
		{name: 'Standard Combats', route: '/standard'},
		{name: 'SCs with Transitions', route: '/standard-transitions'},
		{name: 'Unarmed Combat', route: '/unarmed'}
	]
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<h1 class="h1">Screen Fu Masters</h1>
	</div>
</div>


<!-- css tailwaind container for a nav section and its title -->
<div class="container flex flex-col justify-center items-center w-full mx-auto py-3 md:max-w-sm border-solid border-white border-2 rounded-lg">
	<h2 class="h2">Combat Trainers</h2>
	<nav class="w-5/6 mx-auto flex flex-col justify-center items-center bg-primary-900 p-4 rounded-lg">
		<ul class="flex-col mx-auto text-center">
			<!-- loop through combat_trainers data to create anchors-->
			{#each combat_trainers as trainer}
			<li class="hover:text-warning-700"><a href={trainer.route}>{trainer.name}</a></li>
			{/each}
			</ul>
	</nav>
</div>
