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

	const elementClickEvent = (
		e: React.MouseEvent,
		rootStyle: React.CSSProperties,
		callBack: Function
	) => {
		e.stopPropagation();
		callBack();
	};

	return {
		mouseEnterElement,
		mouseLeaveElement,
		elementClickEvent,
	};
};

/**
 * 渲染元素的样式参数配置
 */
export const ElementStyleConfiguration: React.CSSProperties = {
	width: 0,
	height: 0,
};
