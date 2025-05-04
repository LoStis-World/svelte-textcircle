<script>
	import Textcircle from '$lib/svelte-textcircle/textcircle.svelte';
</script>

<div class="container"></div>

<div class="container">
	<Textcircle
		text={['Svelte', 'Textcircle', 'is-just', 'awesome']}
		options={{ dividerColor: '#f96743' }}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="80"
			height="80"
			viewBox="0 0 24 24"
			fill="none"
			stroke="#f96743"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
				d="M15 8l-5 3l.821 -.495c1.86 -1.15 4.412 -.49 5.574 1.352a3.91 3.91 0 0 1 -1.264 5.42l-5.053 3.126c-1.86 1.151 -4.312 .591 -5.474 -1.251a3.91 3.91 0 0 1 1.263 -5.42l.26 -.16"
			/><path
				d="M8 17l5 -3l-.822 .496c-1.86 1.151 -4.411 .491 -5.574 -1.351a3.91 3.91 0 0 1 1.264 -5.42l5.054 -3.127c1.86 -1.15 4.311 -.59 5.474 1.252a3.91 3.91 0 0 1 -1.264 5.42l-.26 .16"
			/></svg
		>
	</Textcircle>
</div>

<div class="container"></div>

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
