import type { Snippet } from 'svelte';
import Textcircle from './textcircle.svelte';

type TextcircleProps = {
	class?: string;
	text: string[];
	options?: TextcircleOptions;
	animation?: TextcircleAnimation;
	children?: Snippet;
};

type TextcircleOptions = {
	circlesize?: '250px' | '300px' | string | null | undefined;
	textTransform?: 'uppercase' | 'lowercase' | 'none' | null | undefined;
	fontSize?: '1em' | '1.5em' | '1rem' | string | null | undefined;
	fontWeight?: 'lighter' | 'normal' | 'bold' | 'bolder' | null | undefined;
	divider?: string | null | undefined;
	dividerColor?: string | null | undefined;
	rotate?: number | null | undefined;
};

type TextcircleAnimation = {
	duration?: string | null | undefined;
	easing?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear' | string | null | undefined;
	delay?: string | null | undefined;
	direction?: 'normal' | 'reverse' | null | undefined;
	count?: 'infinite' | number | null | undefined;
	animateOnHover?: boolean | null | undefined;
	stopAnimateOnHover?: boolean | null | undefined;
	animateInView?: boolean | null | undefined;
};

export { Textcircle, type TextcircleProps, type TextcircleAnimation, type TextcircleOptions };
