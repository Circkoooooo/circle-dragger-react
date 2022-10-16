import { ReactNode } from 'react';

export type ElementType = {
	alias: string;
	realComponent: JSX.Element;
};

export type RenderedElementType = {
	ele: ReactNode;
};

export type RenderedElementsType = {
	renderedElements?: RenderedElementType[];
};
