
<script>
	import '../app.postcss';
	import { AppShell, AppBar, AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';
	import { fade } from 'svelte/transition';
	export let data;

	let currentTile = 0;
</script>

<AppShell>
	<!-- HEADER -->
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">Screen Fu Masters</svelte:fragment>
			<svelte:fragment slot="trail">
				<AppRailAnchor href="/">
					<i class="fa-solid fa-house home"></i>
				</AppRailAnchor>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<!-- SIDEBAR -->
	<svelte:fragment slot="sidebarLeft">
		<AppRail height='h-full'>
			<!-- Home link -->
			<AppRailTile bind:group={currentTile} name="tile-1" value={0} title="tile-1">
				<AppRailAnchor href="/" >
					<svelte:fragment slot="lead">
						<i class="fa-solid fa-house icon"></i>
					</svelte:fragment>
					<span>Home</span>
				</AppRailAnchor>
			</AppRailTile>

			<!-- Standard Combats link -->
			<AppRailTile bind:group={currentTile} name="tile-2" value={1} title="tile-2">
				<AppRailAnchor href="/standard" >
					<svelte:fragment slot="lead">
						<i class="icon swords">⚔️</i>
					</svelte:fragment>
					<span>Standard Combats</span>
				</AppRailAnchor>
			</AppRailTile>
			

			<!-- Unarmed Combats link -->
			<AppRailTile bind:group={currentTile} name="tile-3" value={2} title="tile-3">
				<AppRailAnchor href="/unarmed" >
					<svelte:fragment slot="lead">
						<i class="fa-solid fa-hand-fist icon"></i>
					</svelte:fragment>
					<span>Unarmed Combat</span>
				</AppRailAnchor>
			</AppRailTile>

			<!-- Number system quiz -->
			<AppRailTile bind:group={currentTile} name="tile-3" value={2} title="tile-3">
				<AppRailAnchor href="/number-system-quiz" >
					<svelte:fragment slot="lead">
						?
					</svelte:fragment>
					<span>Defense Number Quiz</span>
				</AppRailAnchor>
			</AppRailTile>


			<svelte:fragment slot="trail">
				<AppRailAnchor href="https://www.stagefight.co.uk/" target="_blank" title="StageFight">Stage Fight</AppRailAnchor>
			</svelte:fragment>
		</AppRail>
	</svelte:fragment>
	{#key data.pathname}
	<main in:fade={{ duration: 300, delay: 400 }} out:fade={{ duration: 300 }}>
		<slot />
	</main>
	{/key}
</AppShell>


<style>
	.icon {
		color: white;
		font-size: 1.2rem;
	}

	.swords {
		font-size: 1.5rem;
	}
</style>