import { RulerProps } from './Ruler';

/**
 * 绘制刻度
 */
export const renderMark = (
	state: RulerProps,
	canvas: HTMLCanvasElement | null
) => {
	const { viewSize, direction } = state;
	const { viewHeight, viewWidth } = viewSize;
	const sideOffset = 100;
	const shortMark = 8;
	const longMark = 14;

	if (!canvas) return;
	const context = canvas.getContext('2d') as CanvasRenderingContext2D;
	context.clearRect(0, 0, viewWidth, viewHeight);
	context.strokeStyle = '#858585';
	context.fillStyle = '#858585';
	context.lineWidth = 2;

	if (direction === 'row') {
		for (let i = -sideOffset; i < viewWidth; i += 10) {
			context.beginPath();
			context.moveTo(i, 0);
			context.lineTo(i, (i - sideOffset) % 100 === 0 ? longMark : shortMark);
			context.stroke();
			context.closePath();
		}
		for (let i = -sideOffset; i < viewWidth; i += 10) {
			if (i - sideOffset >= 0 && (i - sideOffset) % 100 === 0) {
				context.save();
				context.translate(5, 0);
				context.fillText((i - sideOffset).toString(), i, 18);
				context.stroke();
				context.restore();
			}
		}
	} else {
		for (let i = -sideOffset; i < viewHeight; i += 10) {
			context.beginPath();
			context.moveTo(0, i);
			context.lineTo((i - sideOffset) % 100 === 0 ? longMark : shortMark, i);
			context.stroke();
			context.closePath();
		}
		for (let i = -sideOffset; i < viewHeight; i += 10) {
			if (i - sideOffset >= 0 && (i - sideOffset) % 100 === 0) {
				context.save();
				context.translate(10, 5);
				context.rotate((90 * Math.PI) / 180);
				context.fillText((i - sideOffset).toString(), i, 0);
				context.restore();
			}
		}
		context.stroke();
	}
};
