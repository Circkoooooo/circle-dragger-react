import React from 'react';
import { ElementType } from '../../types/ElementType';

const textElementStyle = (): { [type: string]: React.CSSProperties } => {
	return {
		root: {
			height: 'fit-content',
			width: '200px',
			userSelect: 'none',
			backgroundColor: '#fff',
		},
	};
};

export const TextElement = (): ElementType => {
	return {
		alias: '普通文本',
		type: 'element',
		realComponent: <div style={textElementStyle().root}>普通文本</div>,
	};
};
