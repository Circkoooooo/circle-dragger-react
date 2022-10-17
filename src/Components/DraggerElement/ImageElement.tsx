import { ElementType } from '../../types/ElementType';

export const ImageElement = (): ElementType => {
	return {
		alias: '图片组件',
		type: 'element',
		realComponent: <div>图片组件</div>,
	};
};
