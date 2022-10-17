import { ElementType } from '../../types/ElementType';
import { defaultLayoutStyle } from './LayoutStyle';

export const DefaultLayout = (): ElementType => {
	return {
		alias: '默认布局',
		realComponent: <div style={defaultLayoutStyle()}>DefaultLayout</div>,
		type: 'layout',
	};
};
