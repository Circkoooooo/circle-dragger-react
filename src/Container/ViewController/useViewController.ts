export const useViewControllerConfig = (
	width?: number,
	height?: number,
	scale: number = 1
) => {
	if (!width) width = 0;
	if (!height) height = 0;
	return {
		viewWidth: width * scale,
		viewHeight: height * scale,
	};
};
