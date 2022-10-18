import { ReactNode } from 'react';

export type ElementType = {
	alias: string;
	type: 'layout' | 'element';
	realComponent?: ReactNode;
	renderedElements?: ElementType[];
	style?: React.CSSProperties;
};

export type RenderedElementsType = {
	renderedElements: ElementType[];
};
