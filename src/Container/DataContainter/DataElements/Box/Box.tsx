import { DataMap } from '../../../../types/DataMap';
import './BoxStyle.css';

//TODO: 实现padding的四个值独立
export const Box = (props: DataMap.Box) => {
	const { padding, margin } = props;
	return (
		<div className='dataelement dataelement_size'>
			<div className='element_item'>
				<div className='item_name'>内边距</div>
				<div className='item_value'>{padding ? padding : '自动'}</div>
			</div>

			<div className='element_item'>
				<div className='item_name'>外边距</div>
				<div className='item_value'>{margin ? margin : '自动'}</div>
			</div>
		</div>
	);
};
