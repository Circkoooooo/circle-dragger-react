import { useRef } from 'react';
import { Ruler } from './Ruler';
import { viewControllerStyle } from './viewControllerStyle';

export const ViewController = () => {
	const viewController = useRef<HTMLDivElement>(null);

	console.log(viewController);
	return (
		<div
			className='view_controller'
			style={viewControllerStyle()}
			ref={viewController}
		>
			<Ruler direction='row' />
			<Ruler direction='column' />
		</div>
	);
};
