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
			state.renderedElements.push(action.payload);
		},
	},
});
export const { renderElement } = elementSlice.actions;
export const selectRenderedElements = (state: RootState) =>
	state.element.renderedElements;

export default elementSlice.reducer;
