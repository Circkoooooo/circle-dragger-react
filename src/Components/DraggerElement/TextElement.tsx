import React from 'react';
import { ElementType } from '../../types/ElementType';

const textElementStyle = (): { [type: string]: React.CSSProperties } => {
	return {
		root: {
			height: '20px',
			width: '200px',
			backgroundColor: '#fff',
		},
	};
};

export const TextElement = (): ElementType => {
	return {
		alias: '普通文本',
		realComponent: <input style={textElementStyle().root} />,
	};
};
