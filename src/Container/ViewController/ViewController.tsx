import { useRef, useState, useEffect } from 'react';
import { RenderedElements } from './RenderedElements/RenderedElements';
import { useAppSelector } from '../../store/hooks';
import { selectRenderedElements } from '../../store/features/element/elementSlice';
import { setCurrentStyleConfiguration } from '../../store/features/element/elementDataSlice';
import { Ruler } from './Ruler';
import { useViewControllerConfig } from './useViewController';
import {
	canvasParentContainerStyle,
	viewControllerStyle,
} from './viewControllerStyle';
import { useDispatch } from 'react-redux';

export const ViewController = () => {
	const viewController = useRef<HTMLDivElement>(null);
	const canvasParentContainer = useRef<HTMLDivElement>(null);
	const renderedElements = useAppSelector(selectRenderedElements);
	const dispatch = useDispatch();

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
		window.addEventListener('click', (e) => {
			dispatch(setCurrentStyleConfiguration(null));
		});
	}, [dispatch]);

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
				<RenderedElements
					renderedElements={renderedElements}
				></RenderedElements>
			</div>
		</div>
	);
};
