import { ElementType } from '../../types/ElementType';
import { defaultLayoutStyle } from './LayoutStyle';

export const DefaultLayout = (): ElementType => {
	return {
		alias: '默认布局',
		renderedElements: [],
		style: defaultLayoutStyle(),
		type: 'layout',
	};
};
