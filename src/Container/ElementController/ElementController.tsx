import { renderElement } from '../../store/features/element/elementSlice';
import { useAppDispatch } from '../../store/hooks';
import { ElementType } from '../../types/ElementType';
import './ElementControllerStyle.css';

type ElementControllerType = {
	elementList?: ElementType[];
};

export const ElementController = (props: ElementControllerType) => {
	const dispatch = useAppDispatch();
	const Element = props.elementList!.map((item, index) => (
		<div
			className='element'
			key={index}
			onClick={() => dispatch(renderElement(item.realComponent))}
		>
			<div>{item.alias}</div>
		</div>
	));

	return <div className='element_controller'>{Element}</div>;
};
