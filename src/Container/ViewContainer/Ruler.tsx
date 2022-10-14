import { useRef, useMemo, useEffect } from 'react';
import { rulerStyle } from './viewControllerStyle';

type RulerProps = {
	direction: 'row' | 'column';
	controllerSize: {
		controllerWidth: number;
		controllerHeight: number;
	};
	offset: number;
};

/**
 * 绘制刻度
 */
const renderMark = (state: RulerProps, canvas: HTMLCanvasElement | null) => {
	const { controllerSize, direction } = state;
	const { controllerHeight, controllerWidth } = controllerSize;
	let shortMark = 8;
	let longMark = 14;

	if (!canvas) return;
	const context = canvas.getContext('2d') as CanvasRenderingContext2D;
	context.clearRect(0, 0, controllerWidth, controllerHeight);
	context.strokeStyle = 'white';
	context.lineWidth = 2;

	if (direction === 'row') {
		for (let i = 0; i < controllerWidth; i += 10) {
			context.beginPath();
			context.moveTo(i, 0);
			context.lineTo(i, i % 100 === 0 ? longMark : shortMark);
			context.stroke();
			context.closePath();
		}
		for (let i = 0; i < controllerWidth; i += 10) {
			context.fillStyle = 'white';
			if (i % 100 === 0) {
				context.save();
				context.translate(5, 0);
				context.fillText(i.toString(), i, 18);
				context.stroke();
				context.restore();
			}
		}
	} else {
		for (let i = 0; i < controllerHeight; i += 10) {
			context.beginPath();
			context.moveTo(0, i);
			context.lineTo(i % 100 === 0 ? longMark : shortMark, i);
			context.stroke();
			context.closePath();
		}
		for (let i = 0; i < controllerHeight; i += 10) {
			context.fillStyle = 'white';
			if (i % 100 === 0) {
				context.save();
				context.translate(10, 5);
				context.rotate((90 * Math.PI) / 180);
				context.fillText(i.toString(), i, 0);
				context.restore();
			}
		}
		context.stroke();
	}
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
