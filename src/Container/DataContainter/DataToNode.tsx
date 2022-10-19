import React, { Fragment } from 'react';
import { Size } from './DataElements/Size/Size';

export const DataToNode = (styles: React.CSSProperties | null) => {
	if (styles === null) return;
	const { width, height } = styles;
	const nodes = [];

	nodes.push(
		Size({
			width: width?.toString(),
			height: height?.toString(),
		})
	);

	return nodes.map((item, index) => <Fragment key={index}>{item}</Fragment>);
};
