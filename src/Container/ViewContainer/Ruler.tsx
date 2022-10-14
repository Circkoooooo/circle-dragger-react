import { useRef } from 'react';
import { rulerStyle } from './viewControllerStyle';
type RulerProps = {
	direction: 'row' | 'column';
};

export const Ruler = (props: RulerProps) => {
	const canvas = useRef<HTMLCanvasElement>(null);

	return (
		<div className='ruler' style={rulerStyle(props.direction)}>
			<canvas ref={canvas}></canvas>
		</div>
	);
};
