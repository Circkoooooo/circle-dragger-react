import { useRef, useState, useEffect } from 'react';
import { Ruler } from './Ruler';
import { useViewControllerConfig } from './useViewController';
import {
	canvasParentContainerStyle,
	canvasStyle,
	viewControllerStyle,
} from './viewControllerStyle';

export const ViewController = () => {
	const viewController = useRef<HTMLDivElement>(null);
	const canvasParentContainer = useRef<HTMLDivElement>(null);
	const [controllerSize, setControllerSize] = useState({
		controllerWidth: 0,
		controllerHeight: 0,
	});

	const { viewHeight, viewWidth } = useViewControllerConfig(
		canvasParentContainer.current?.clientWidth,
		canvasParentContainer.current?.clientHeight,
		1
	);
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
				<div style={canvasStyle()}></div>
			</div>
		</div>
	);
};
