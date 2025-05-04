<script>
	import Textcircle from '$lib/svelte-textcircle/textcircle.svelte';
</script>

<div class="container">
	<Textcircle
		text={['Svelte', 'Tailwind', 'Laravel', 'Typescript']}
		options={{ dividerColor: 'red' }}
	>
		<img src="/favicon.png" alt="Logo" width="100" height="100" />
	</Textcircle>
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		background-color: #181818;
		color: #ebebeb;
		font-family:
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			Roboto,
			Oxygen,
			Ubuntu,
			Cantarell,
			'Open Sans',
			'Helvetica Neue',
			sans-serif;
	}
</style>
