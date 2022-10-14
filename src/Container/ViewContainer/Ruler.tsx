import { useRef, useMemo, useEffect } from 'react';
import { renderMark } from './useRuler';
import { rulerStyle } from './viewControllerStyle';

export type RulerProps = {
	direction: 'row' | 'column';
	controllerSize: {
		controllerWidth: number;
		controllerHeight: number;
	};
	offset: number;
};

export const Ruler = (props: RulerProps) => {
	const canvas = useRef<HTMLCanvasElement>(null);
	const { direction, controllerSize, offset } = props;

	useMemo(() => {
		renderMark(props, canvas.current);
		return {
			controllerSize,
		};
	}, [controllerSize, props]);

	useEffect(() => {
		renderMark(props, canvas.current);
	});

	return (
		<div className='ruler' style={rulerStyle(direction, offset)}>
			<canvas
				ref={canvas}
				width={direction === 'column' ? 20 : controllerSize.controllerWidth}
				height={direction === 'row' ? 20 : controllerSize.controllerHeight}
			></canvas>
		</div>
	);
};
