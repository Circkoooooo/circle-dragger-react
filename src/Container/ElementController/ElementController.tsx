import { ElementType } from '../../types/ElementType';
import { renderElement } from '../ViewController/ViewController';
import './ElementControllerStyle.css';

type ElementControllerType = {
	elementList?: ElementType[];
};

export const ElementController = (props: ElementControllerType) => {
	const Element = props.elementList!.map((item, index) => (
		<div
			className='element'
			key={index}
			onClick={() => renderElement(item.realComponent)}
		>
			<div>{item.alias}</div>
		</div>
	));

	return <div className='element_controller'>{Element}</div>;
};
