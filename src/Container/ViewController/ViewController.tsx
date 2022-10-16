import React, { useRef, useState, useEffect, ReactNode } from 'react';
import { RenderedElementType } from '../../types/ElementType';
import { Ruler } from './Ruler';
import { useViewControllerConfig } from './useViewController';
import {
	canvasParentContainerStyle,
	canvasStyle,
	viewControllerStyle,
} from './viewControllerStyle';

const renderedElements: ReactNode[] = [];
let renderRef: Function;

/**
 * 将元素渲染进 renderedElementContainer
 * @param element
 */
export const renderElement = (element: ReactNode) => {
	renderedElements.push(element);
	if (!renderRef) {
		console.error(
			`An error occurred during the rendering process that caused an error in the rendering function`
		);
		return;
	}
	renderRef();
};

const RenderedElement = React.memo((props: RenderedElementType) => {
	return <React.Fragment>{props.ele}</React.Fragment>;
});

export const ViewController = () => {
	const viewController = useRef<HTMLDivElement>(null);
	const canvasParentContainer = useRef<HTMLDivElement>(null);
	const [render, setRender] = useState(false);
	const [controllerSize, setControllerSize] = useState({
		controllerWidth: 0,
		controllerHeight: 0,
	});

	const { viewHeight, viewWidth } = useViewControllerConfig(
		canvasParentContainer.current?.clientWidth,
		canvasParentContainer.current?.clientHeight,
		1
	);

	renderRef = () => setRender(!render);

	useEffect(() => {
		setControllerSize({
			controllerWidth: viewController.current?.clientWidth as number,
			controllerHeight: viewController.current?.clientHeight as number,
		});
		window.addEventListener('resize', () => {
			const controllerWidth = viewController.current?.clientWidth as number;
			const controllerHeight = viewController.current?.clientHeight as number;

			setControllerSize({
				controllerWidth,
				controllerHeight,
			});
		});
	}, []);

	return (
		<div style={viewControllerStyle()} ref={viewController}>
			<Ruler
				direction='row'
				controllerSize={controllerSize}
				viewSize={{ viewWidth, viewHeight }}
				offset={20}
			/>
			<Ruler
				direction='column'
				viewSize={{ viewWidth, viewHeight }}
				controllerSize={controllerSize}
				offset={0}
			/>

			<div style={canvasParentContainerStyle()} ref={canvasParentContainer}>
				<div style={canvasStyle()} id='renderedElementContainer'>
					{renderedElements.map((ele, index) => {
						return <RenderedElement ele={ele} key={index}></RenderedElement>;
					})}
				</div>
			</div>
		</div>
	);
};
