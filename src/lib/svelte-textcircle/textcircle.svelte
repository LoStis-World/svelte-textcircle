<script lang="ts">
	import type { TextcircleProps, TextcircleAnimation, TextcircleOptions } from './index.js';

	let { class: classes, text, children, options, animation }: TextcircleProps = $props();

	// Destructor options props
	const {
		circlesize,
		textTransform, // Replace 'tt' with a default value or variable
		fontSize, // Replace 'fsir' with a default value or variable
		fontWeight, // Replace 'fw' with a default value or variable
		divider = '&diams;', // Corrected syntax
		dividerColor, // Corrected syntax
		rotate // Provide a default value for 'rotate'
	}: TextcircleOptions = options || {};

	// Destructor animation props
	const {
		duration, // Provide a default value for 'duration'
		easing, // Corrected syntax
		delay, // Corrected syntax
		direction, // Corrected syntax
		count, // Corrected syntax
		animateInView = true,
		animateOnHover = false, // Corrected syntax
		stopAnimateOnHover = false // Corrected syntax
	}: TextcircleAnimation = animation || {};

	const textArray =
		divider?.trim() !== '' && divider !== undefined
			? text
					.flatMap((word) => [word, ' ', divider?.trim(), ' '])
					.flatMap((letter) => (letter === divider?.trim() ? [letter] : [...(letter || '')]))
			: [...text.join('')].map((char) => char);

	// check with intersectionobser if textcircle is in view if animateInView is true

	function observeTextcircle(node: HTMLElement) {
		let observer: IntersectionObserver | null = null;

		if (animateInView) {
			observer = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					(entry.target as HTMLElement).style.setProperty(
						'--aoh',
						entry.isIntersecting ? 'running' : 'paused'
					);
				});
			});

			observer.observe(node);
		}

		return {
			destroy() {
				if (observer) {
					observer.disconnect();
				}
			}
		};
	}
</script>

<div
	style:--s={circlesize}
	style:--aoh={animateOnHover ? 'paused' : 'running'}
	class={[
		'textcircle',
		animateOnHover && 'textcircle-animate-hover',
		animateInView && !animateOnHover && 'textcircle-animate-inview',
		stopAnimateOnHover && !animateOnHover && 'textcircle-animate-stop',
		classes
	]}
	use:observeTextcircle
>
	<p
		class="textcircle-container"
		style:--fs={fontSize}
		style:--fw={fontWeight}
		style:--tt={textTransform}
		style:--ro={rotate}
		style:--du={duration}
		style:--ti={easing}
		style:--de={delay}
		style:--di={direction}
		style:--c={count}
		style:--dc={dividerColor}
		aria-label={text.join(' ')}
	>
		{#each textArray as char, idx}
			{#if char === ' '}
				<span
					style="--a: {(1 / textArray.length) * idx}turn"
					class="textcircle-char"
					aria-hidden="true"
				>
					&nbsp;
				</span>
			{:else if char === divider?.trim()}
				<span
					style="--a: {(1 / textArray.length) * idx}turn"
					class="textcircle-char textcircle-char-divider"
					aria-hidden="true"
				>
					{@html char}
				</span>
			{:else}
				<span
					style="--a: {(1 / textArray.length) * idx}turn"
					class="textcircle-char"
					aria-hidden="true"
				>
					{char}
				</span>
			{/if}
		{/each}
	</p>

	{#if children}
		<div style:--fs={fontSize} class="textcircle-children">
			{@render children()}
		</div>
	{/if}
</div>

<style>
	.textcircle {
		width: var(--s, 250px);
		height: var(--s, 250px);
	}

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
		font-size: var(--fs, 1em);
		font-weight: var(--fw, normal);
		width: var(--s, 250px);
		height: var(--s, 250px);
		text-transform: var(--tt, uppercase);
	}

	.textcircle-char {
		width: 1em;
		height: 100%;
		line-height: 1;
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%) rotate(var(--a, 0deg));
		text-align: center;
	}

	.textcircle-children {
		z-index: 1;
		height: 100%;
		width: 100%;
		max-width: calc(var(--s, 250px) - var(--fs, 1em) * 2.5);
		max-height: calc(var(--s, 250px) - var(--fs, 1em) * 2.5);
		margin: auto;
	}

	.textcircle-char-divider {
		color: var(--dc, currentColor);
	}

	.textcircle-container,
	.textcircle-children {
		grid-area: 1 / 1;
		border-radius: 100%;
	}

	@media (prefers-reduced-motion: no-preference) {
		@keyframes circleSpin {
			to {
				transform: rotate3D(0, 0, 1, -1turn);
			}
		}

		.textcircle-animate-inview .textcircle-container,
		.textcircle-animate-hover .textcircle-container {
			animation: circleSpin var(--du, 30s) var(--ti, linear) var(--de, 0s) var(--di, normal)
				var(--c, infinite) var(--aoh, running) forwards;
		}
		.textcircle-animate-stop:hover .textcircle-container {
			animation-play-state: paused !important;
		}

		.textcircle-animate-hover:hover .textcircle-container {
			animation-play-state: running !important;
		}
	}
</style>
