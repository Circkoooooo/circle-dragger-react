import React from 'react';
import {
	RenderedElementsType,
	RenderedElementType,
} from '../../types/ElementType';
import { canvasStyle } from './viewControllerStyle';

const RenderedElement = React.memo((props: RenderedElementType) => {
	return <React.Fragment>{props.ele}</React.Fragment>;
});

export const RenderedElements = ({
	renderedElements,
}: RenderedElementsType) => {
	return (
		<div style={canvasStyle()}>
			{renderedElements?.map((renderedElement, index) => {
				return (
					<RenderedElement
						ele={renderedElement.ele}
						key={index}
					></RenderedElement>
				);
			})}
		</div>
	);
};
