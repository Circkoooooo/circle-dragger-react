import { useRef, useState, useEffect } from 'react';
import { Ruler } from './Ruler';
import { viewControllerStyle } from './viewControllerStyle';

export const ViewController = () => {
	const viewController = useRef<HTMLDivElement>(null);
	const [controllerSize, setControllerSize] = useState({
		controllerWidth: 0,
		controllerHeight: 0,
	});

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
		<div
			className='view_controller'
			style={viewControllerStyle()}
			ref={viewController}
		>
			<Ruler direction='row' controllerSize={controllerSize} offset={20} />
			<Ruler direction='column' controllerSize={controllerSize} offset={20} />
		</div>
	);
};
