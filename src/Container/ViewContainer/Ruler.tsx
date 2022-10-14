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
	viewSize: {
		viewWidth: number;
		viewHeight: number;
	};
};

export const Ruler = (props: RulerProps) => {
	const canvas = useRef<HTMLCanvasElement>(null);
	const { direction, controllerSize, offset, viewSize } = props;

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
		<div
			style={rulerStyle(
				direction,
				offset,
				viewSize.viewWidth,
				viewSize.viewHeight
			)}
		>
			<canvas
				ref={canvas}
				width={direction === 'column' ? 20 : viewSize.viewWidth}
				height={direction === 'row' ? 20 : viewSize.viewHeight}
			></canvas>
		</div>
	);
};
