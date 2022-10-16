import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import { RootState } from '../..';
import { RenderedElementType } from '../../../types/ElementType';

interface ElementSlice {
	renderedElements: RenderedElementType[];
}

// 使用该类型定义初始 state
const initialState: ElementSlice = {
	renderedElements: [],
};
export const elementSlice = createSlice({
	name: 'element',
	initialState,
	reducers: {
		renderElement: (state, action: PayloadAction<ReactNode>) => {
			state.renderedElements.push({
				ele: action.payload,
			});
		},
	},
});
export const { renderElement } = elementSlice.actions;
export const selectRenderedElements = (state: RootState) =>
	state.element.renderedElements;

export default elementSlice.reducer;
