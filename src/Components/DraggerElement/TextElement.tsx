import React from 'react';
import { ElementType } from '../../types/ElementType';

const textElementStyle: React.CSSProperties = {
	width: '200px',
	height: '40px',
	fontSize: '18px',
	fontWeight: 'normal',
	backgroundColor: '#fff',
	zIndex: '2',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
};

export const TextElement = (): ElementType => {
	return {
		alias: '普通文本',
		type: 'element',
		realComponent: <div>普通文本</div>,
		style: textElementStyle,
	};
};
