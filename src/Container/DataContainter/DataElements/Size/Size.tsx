import { DataMap } from '../../../../types/DataMap';
import './SizeStyle.css';

export const Size = (props: DataMap.Size) => {
	const { width, height } = props;
	return (
		<div className='dataelement dataelement_size'>
			<div className='element_item'>
				<div className='item_name'>长度</div>
				<div className='item_value'>{width ? width : '自动'}</div>
			</div>

			<div className='element_item'>
				<div className='item_name'>宽度</div>
				<div className='item_value'>{height ? height : '自动'}</div>
			</div>
		</div>
	);
};
