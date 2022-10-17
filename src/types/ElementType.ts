import { ReactNode } from 'react';

export type ElementType = {
	alias: string;
	realComponent: ReactNode;
	type: 'layout' | 'element';
};

export type RenderedElementsType = {
	renderedElements: ElementType[];
};
