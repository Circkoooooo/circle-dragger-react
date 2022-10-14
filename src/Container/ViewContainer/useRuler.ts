import { RulerProps } from './Ruler';

/**
 * 绘制刻度
 */
export const renderMark = (
	state: RulerProps,
	canvas: HTMLCanvasElement | null
) => {
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
