import React, { useState } from 'react';
import {
	RenderedElementsType,
	RenderedElementType,
} from '../../../types/ElementType';
import { mouseElement } from './useRenderedElements';
import { canvasStyle } from '../viewControllerStyle';
import './RenderedStyle.css';

const RenderedElement = React.memo((props: RenderedElementType) => {
	const [elementStyle, setElementStyle] = useState<React.CSSProperties>(
		{} as React.CSSProperties
	);

	const { mouseLeaveElement, mouseEnterElement } =
		mouseElement(setElementStyle);

	return (
		<div
			className='draggerelement_container'
			onMouseEnter={(e) => mouseEnterElement(e)}
			onMouseLeave={(e) => mouseLeaveElement(e)}
		>
			<div className='draggerelement_mask' style={elementStyle}></div>
			{props.ele}
		</div>
	);
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
