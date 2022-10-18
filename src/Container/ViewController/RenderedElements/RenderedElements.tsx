import React, { Fragment, useState } from 'react';
import { ElementType, RenderedElementsType } from '../../../types/ElementType';
import { mouseElement } from './useRenderedElements';
import { canvasStyle } from '../viewControllerStyle';
import './RenderedStyle.css';

/**
 * 渲染元素
 */
const RenderedElement = React.memo(
	({ type, realComponent, renderedElements }: ElementType): any => {
		const [elementStyle, setElementStyle] = useState<React.CSSProperties>(
			{} as React.CSSProperties
		);

		const { mouseLeaveElement, mouseEnterElement } =
			mouseElement(setElementStyle);

		if (type === 'element') {
			return (
				<div
					className='draggerelement_container'
					onMouseEnter={(e) => mouseEnterElement(e)}
					onMouseLeave={(e) => mouseLeaveElement(e)}
				>
					<div className='draggerelement_mask' style={elementStyle}></div>
					{renderedElements?.length}
					{realComponent}
				</div>
			);
		} else {
			return (
				<div
					className='draggerlayout'
					onMouseEnter={(e) => mouseEnterElement(e)}
					onMouseLeave={(e) => mouseLeaveElement(e)}
				>
					<div className='draggerlayout_mask' style={elementStyle}></div>
					{renderedElements?.map((item, index) => (
						<Fragment key={index}>{item.realComponent}</Fragment>
					))}
					{realComponent}
				</div>
			);
		}
	}
);

export const RenderedElements = ({
	renderedElements,
}: RenderedElementsType) => {
	return (
		<div style={canvasStyle()}>
			{renderedElements.map((renderedElement, index) => {
				return (
					<RenderedElement {...renderedElement} key={index}></RenderedElement>
				);
			})}
		</div>
	);
};
