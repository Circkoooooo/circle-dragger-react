import { RenderedElementStyle } from './RenderedStyle';

const { defaultStyle, hoverStyle } = RenderedElementStyle();

export const mouseElement = (
	setStyle: React.Dispatch<React.SetStateAction<React.CSSProperties>>
) => {
	const mouseEnterElement = (e: React.MouseEvent) => {
		setStyle(hoverStyle);
	};
	const mouseLeaveElement = (e: React.MouseEvent) => {
		setStyle(defaultStyle);
	};

	return {
		mouseEnterElement,
		mouseLeaveElement,
	};
};
