import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../..';
import { ElementType } from '../../../types/ElementType';

interface ElementSlice {
	renderedElements: ElementType[];
}

// 使用该类型定义初始 state
const initialState: ElementSlice = {
	renderedElements: [],
};
export const elementSlice = createSlice({
	name: 'element',
	initialState,
	reducers: {
		renderElement: (state, action: PayloadAction<ElementType>) => {
			const item = state.renderedElements.find(
				(item) => item.type === 'layout'
			);
			if (item && item.renderedElements && action.payload.type !== 'layout') {
				item.renderedElements.push(action.payload);
			} else {
				state.renderedElements.push(action.payload);
			}
		},
	},
});
export const { renderElement } = elementSlice.actions;
export const selectRenderedElements = (state: RootState) =>
	state.element.renderedElements;

export default elementSlice.reducer;
