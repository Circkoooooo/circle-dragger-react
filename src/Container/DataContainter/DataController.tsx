import { selectCurrentStyleConfiguration } from '../../store/features/element/elementDataSlice';
import { useAppSelector } from '../../store/hooks';
import './DataControllerStyle.css';
import './DataElements/DataElementStyle.css';

import { DataToNode } from './DataToNode';

export const DataController = () => {
	const currentStyleConfiguration = useAppSelector(
		selectCurrentStyleConfiguration
	);

	const formatStyle = (style: React.CSSProperties) => {
		const lines = [];
		for (const [key, value] of Object.entries(style)) {
			lines.push(`${key}-${value}`);
		}
		return lines.join('\n');
	};
	return (
		<div className='data_controller'>
			{DataToNode(currentStyleConfiguration)}
			{/* {formatStyle(currentStyleConfiguration)} */}
		</div>
	);
};
