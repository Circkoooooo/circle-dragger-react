import React, { useState } from 'react';
import { ElementType, RenderedElementsType } from '../../../types/ElementType';
import { mouseElement } from './useRenderedElements';
import { canvasStyle } from '../viewControllerStyle';
import './RenderedStyle.css';
import { setCurrentStyleConfiguration } from '../../../store/features/element/elementDataSlice';
import { useAppDispatch } from '../../../store/hooks';

/**
 * 渲染元素
 */
const RenderedElement = React.memo(
	({ type, realComponent, renderedElements, style }: ElementType): any => {
		const [renderedElementStyle] = useState<React.CSSProperties>(
			style as React.CSSProperties
		);
		const [elementMaskStyle, setElementMaskStyle] =
			useState<React.CSSProperties>({} as React.CSSProperties);

		const dispatch = useAppDispatch();
		const { mouseLeaveElement, mouseEnterElement, elementClickEvent } =
			mouseElement(setElementMaskStyle);

		if (type === 'element') {
			return (
				<div
					className='draggerelement_container'
					onMouseEnter={(e) => mouseEnterElement(e)}
					onMouseLeave={(e) => mouseLeaveElement(e)}
					onClick={(e) =>
						elementClickEvent(e, renderedElementStyle, () =>
							dispatch(setCurrentStyleConfiguration(renderedElementStyle))
						)
					}
					style={renderedElementStyle}
				>
					<div className='draggerelement_mask' style={elementMaskStyle}></div>
					{realComponent}
				</div>
			);
		} else {
			return (
				<div
					className='draggerlayout'
					onMouseEnter={(e) => mouseEnterElement(e)}
					onMouseLeave={(e) => mouseLeaveElement(e)}
					onClick={(e) =>
						elementClickEvent(e, renderedElementStyle, () =>
							dispatch(setCurrentStyleConfiguration(renderedElementStyle))
						)
					}
					style={renderedElementStyle}
				>
					<div className='draggerlayout_mask' style={elementMaskStyle}></div>
					{renderedElements?.map((renderedElement, index) => {
						return (
							<RenderedElement
								{...renderedElement}
								key={index}
							></RenderedElement>
						);
					})}
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
