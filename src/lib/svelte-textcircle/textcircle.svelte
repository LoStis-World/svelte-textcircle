<script lang="ts">
	import type { TextcircleProps, TextcircleAnimation, TextcircleOptions } from './index.js';

	let { class: classes, text, children, options, animation }: TextcircleProps = $props();

	// Destructor options props
	const {
		circlesize = '250px',
		textTransform = 'uppercase', // Replace 'tt' with a default value or variable
		fontSize = '1rem', // Replace 'fsir' with a default value or variable
		fontWeight = 'normal', // Replace 'fw' with a default value or variable
		divider = '&diams;', // Corrected syntax
		dividerColor = 'currentColor', // Corrected syntax
		rotate = 0 // Provide a default value for 'rotate'
	}: TextcircleOptions = options || {};

	// Destructor animation props
	const {
		duration = '1s', // Provide a default value for 'duration'
		timing = 'linear', // Corrected syntax
		delay = '0s', // Corrected syntax
		direction = 'normal', // Corrected syntax
		count = 'infinite', // Corrected syntax
		animateOnHover = false, // Corrected syntax
		stopAnimateOnHover = false // Corrected syntax
	}: TextcircleAnimation = animation || {};

	const textArray =
		divider?.trim() !== '' && divider !== undefined
			? text
					.flatMap((word, idx) => [word, ' ', divider.trim(), ' '])
					.flatMap((item) => (item === divider.trim() ? [item] : [...item]))
			: [...text.join('')].map((char) => char);
</script>

<div class={['textcircle', animateOnHover && 'textcircle-animate', classes]}>
	<p
		class="textcircle-container"
		style="--fs: {fontSize}; --fw: {fontWeight}; --tt: {textTransform}; --ro: {rotate}; --du: {duration}; --ti: {timing}; --de: {delay}; --di: {direction}; --c: {count}; --dc: {dividerColor}; --s: {circlesize};"
	>
		{#each textArray as char, idx}
			{#if char === ' '}
				<span style="--a: {(1 / textArray.length) * idx}turn" class="textcircle-char">
					&nbsp;
				</span>
			{:else if char === divider?.trim()}
				<span
					style="--a: {(1 / textArray.length) * idx}turn"
					class="textcircle-char textcircle-char-divider"
				>
					{@html char}
				</span>
			{:else}
				<span style="--a: {(1 / textArray.length) * idx}turn" class="textcircle-char">
					{char}
				</span>
			{/if}
		{/each}
	</p>

	{#if children}
		<div class="textcircle-children">{@render children()}</div>
	{/if}
</div>

<style>
	.textcircle,
	.textcircle-children {
		overflow: hidden;
		display: grid;
		place-content: center;
	}

	.textcircle-container {
		position: relative;
		user-select: none;
		pointer-events: none;
		padding: 0;
		margin: 0;
		font-size: var(--fs);
		width: var(--s);
		height: var(--s);
		text-transform: var(--tt);
	}

	.textcircle-char {
		width: 1em;
		height: 100%;
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%) rotate(var(--a, 0deg));
		text-align: center;
	}

	.textcircle-children {
		z-index: 1;
		max-width: calc(100% - var(--fs) * 4) !important;
		max-height: calc(100% - var(--fs) * 4) !important;
	}

	.textcircle-char-divider {
		color: var(--dc);
	}

	.textcircle-container,
	.textcircle-children {
		grid-area: 1 / 1;
		border-radius: 100%;
	}
</style>
