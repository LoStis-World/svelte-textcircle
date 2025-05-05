<script>
	import { Textcircle } from '$lib/svelte-textcircle/index.js';
</script>

<!-- Basic Usage -->
<section>
	<h2>Basic Usage</h2>
	<p>Display an array of words in a simple circular layout with default settings.</p>
	<Textcircle text={['Svelte', 'is just', 'awesome']} />
</section>

<!-- Custom Options -->
<section>
	<h2>Custom Options</h2>
	<p>Adjust size, typography, divider, and initial rotation for unique styles.</p>
	<Textcircle
		text={['Svelte', 'is just', 'awesome']}
		options={{
			circlesize: '300px',
			textTransform: 'lowercase',
			fontSize: '1.4em',
			fontWeight: 'lighter',
			divider: '•',
			dividerColor: 'var(--sv)',
			rotate: 30
		}}
	/>
</section>

<!-- Custom Animation -->
<section>
	<h2>Animation on hover</h2>
	<p>Fine-tune animation duration, easing, delay, direction, and iteration count.</p>
	<Textcircle
		text={['Svelte', 'is just', 'awesome']}
		animation={{
			duration: '10s',
			easing: 'ease-in-out',
			delay: '2s',
			direction: 'reverse',
			count: 3,
			animateOnHover: true
		}}
	/>
</section>

<!-- Stop Animation on Hover -->
<section>
	<h2>Stop Animation on Hover</h2>
	<p>Pause the ongoing animation when the user hovers over the component.</p>
	<Textcircle
		text={['Svelte', 'is just', 'awesome']}
		animation={{
			duration: '15s',
			stopAnimateOnHover: true
		}}
	/>
</section>

<!-- Central Content -->
<section>
	<h2>Central Content</h2>
	<p>Embed custom content like images or icons in the circle’s center.</p>
	<Textcircle text={['Svelte', 'is just', 'awesome']}>
		<img
			src="https://images.unsplash.com/photo-1728577740843-5f29c7586afe?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			alt=""
			style="height:120px;border-radius:50%"
		/>
	</Textcircle>
</section>

<style>
	:global {
		:root {
			--bg: #111;
			--title: #eee;
			--sv: #f96743;
			--p: #555;
		}
		body {
			display: grid;
			padding: 0;
			margin: 0;
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
			color: var(--title);
		}
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 100dvh;
		background-color: var(--bg);
		padding-block: 5rem;
		box-shadow: border-box;
		text-align: center;
	}

	h2 {
		margin: 0;
		color: var(--title);
	}

	p {
		margin-bottom: 2rem;
		max-width: 40rem;
		margin-bottom: 2rem;
		color: var(--p);
	}
</style>
