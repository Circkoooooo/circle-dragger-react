import { ElementType } from '../../types/ElementType';

export const TextElement = (): ElementType => {
	return {
		alias: '普通文本',
		realComponent: <div>文本</div>,
	};
};
