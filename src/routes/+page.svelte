<script>
	const combat_trainers = [
		{name: 'Standard Combats', route: '/standard'},
		{name: 'SCs with Transitions', route: '/standard-transitions'},
		{name: 'Unarmed Combat', route: '/unarmed'}
	]
</script>

<div class="container pt-5 h-full mx-auto">
	<h1 class="h1 text-center mb-5">Screen Fu Masters</h1>
	
	
	<!-- css tailwaind container for a nav section and its title -->
	<div class="container flex flex-col justify-center items-center w-full mx-auto py-3 md:max-w-sm border-solid border-white border-2 rounded-lg">
		<h2 class="h2 mb-3">Combat Trainers</h2>
		<nav class="w-5/6 mx-auto flex flex-col justify-center items-center bg-primary-900 p-4 rounded-lg">
			<ul class="flex-col mx-auto text-center">
				<!-- loop through combat_trainers data to create anchors-->
				{#each combat_trainers as trainer}
				<li class="hover:text-warning-700"><a href={trainer.route}>{trainer.name}</a></li>
				{/each}
			</ul>
		</nav>
	</div>
	
</div>