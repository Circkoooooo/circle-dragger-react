import { ReactNode } from 'react';

export type ElementType = {
	alias: string;
	realComponent: ReactNode;
	type: 'layout' | 'element';
	renderedElements?: ElementType[];
};

export type RenderedElementsType = {
	renderedElements: ElementType[];
};
