import React from 'react';

export const RenderedElementStyle = () => {
	const defaultStyle: React.CSSProperties = {};

	const hoverStyle: React.CSSProperties = {
		border: '2px solid skyblue',
	};

	const leaveStyle: React.CSSProperties = {};

	return {
		defaultStyle,
		hoverStyle,
		leaveStyle,
	};
};

export type RenderedELementStyleType = ReturnType<typeof RenderedElementStyle>;
