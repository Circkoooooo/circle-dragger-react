import { useRef } from 'react';
import { selectCurrentStyleConfiguration } from '../../store/features/element/elementDataSlice';
import { useAppSelector } from '../../store/hooks';
import './DataControllerStyle.css';
import './DataElements/DataElementStyle.css';

import { DataToNode } from './DataToNode';

export const DataController = () => {
	const dataController = useRef<HTMLDivElement>(null);
	const currentStyleConfiguration = useAppSelector(
		selectCurrentStyleConfiguration
	);

	const dataControllerClassName = () => {
		if (currentStyleConfiguration === null) return 'data_controller_close';
		return '';
	};
	return (
		<div
			className={`${dataControllerClassName()} data_controller`}
			ref={dataController}
		>
			{DataToNode(currentStyleConfiguration)}
		</div>
	);
};
