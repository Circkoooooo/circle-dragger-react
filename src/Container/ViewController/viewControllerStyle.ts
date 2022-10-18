import React from 'react';

export const viewControllerStyle = (): React.CSSProperties => {
	return {
		flex: 1,
		backgroundColor: '#ffffff',
		position: 'relative',
		overflow: 'auto',
		zIndex: '1',
	};
};

/**
 * 尺子的样式
 * @param direction
 * @param offset
 * @param width
 * @param height
 * @returns
 */
export const rulerStyle = (
	direction: 'row' | 'column',
	offset: number,
	width: number,
	height: number
): React.CSSProperties => {
	let mainSideSize: string = '0';
	let secondarySideSize: string = '0';
	let translate = '';

	const stickyConfig: React.CSSProperties = {
		position: 'sticky',
	};

	if (direction === 'row') {
		mainSideSize = width + 'px';
		secondarySideSize = '20px';
		translate = `translateX(${offset}px)`;
		stickyConfig.top = '0';
	} else {
		mainSideSize = '20px';
		secondarySideSize = height + 'px';
		translate = `translateY(${offset}px)`;
		stickyConfig.left = '0';
	}
	return {
		...stickyConfig,
		width: mainSideSize,
		height: secondarySideSize,
		backgroundColor: '#eeeeee',
		transform: translate,
		zIndex: '3',
	};
};

/**
 * canvas元素父元素的样式，被子元素撑开，用来设置canvas外圈边距和定位canvas
 * @returns
 */
export const canvasParentContainerStyle = (): React.CSSProperties => {
	return {
		width: 'auto',
		display: 'inline-block',
		margin: '20px',
		padding: '100px',
		position: 'absolute',
		top: '0',
		left: '0',
	};
};
/**
 * 屏幕 画布的样式 1920*1080 default size
 * @returns
 */
export const canvasStyle = (): React.CSSProperties => {
	return {
		position: 'relative',
		minHeight: 1080 / 2,
		width: 1920 / 2,
		backgroundColor: 'rgba(0,0,0,0.08)',
		zIndex: '2',
		border: '2px dashed blue',
	};
};

export const elementStyle = (): React.CSSProperties => {
	const top = Math.random() * 50;
	const left = Math.random() * 50;
	return {
		position: 'absolute',
		top,
		left,
	};
};
