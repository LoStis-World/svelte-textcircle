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
	circlesize?: '250px' | '300px' | string;
	textTransform?: 'uppercase' | 'lowercase' | 'none';
	fontSize?: '1em' | '1.5em' | '1rem' | string;
	fontWeight?: 'lighter' | 'normal' | 'bold' | 'bolder' | number;
	divider?: string;
	dividerColor?: string;
	rotate?: number;
};

type TextcircleAnimation = {
	duration?: string;
	timing?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear' | string;
	delay?: string;
	direction?: 'normal' | 'reverse';
	count?: 'infinite' | number;
	animateOnHover?: boolean;
	stopAnimateOnHover?: boolean;
};

export { Textcircle, type TextcircleProps, type TextcircleAnimation, type TextcircleOptions };
