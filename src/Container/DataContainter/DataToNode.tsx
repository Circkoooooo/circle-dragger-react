import React, { Fragment } from 'react';
import { Box } from './DataElements/Box/Box';
import { Size } from './DataElements/Size/Size';

export const DataToNode = (styles: React.CSSProperties | null) => {
	if (styles === null) return;
	const { width, height, margin, padding } = styles;
	const nodes = [];

	nodes.push(
		Size({
			width: width?.toString(),
			height: height?.toString(),
		}),
		Box({
			margin: margin?.toString(),
			padding: padding?.toString(),
		})
	);

	return nodes.map((item, index) => <Fragment key={index}>{item}</Fragment>);
};
