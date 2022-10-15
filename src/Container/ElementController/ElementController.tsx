import { ElementType } from '../../types/ElementType';
import './ElementControllerStyle.css';

type ElementControllerType = {
	elementList?: ElementType[];
};

export const ElementController = (props: ElementControllerType) => {
	const Element = props.elementList!.map((item, index) => (
		<div className='element' key={index}>
			<div>{item.alias}</div>
		</div>
	));

	return <div className='element_controller'>{Element}</div>;
};
