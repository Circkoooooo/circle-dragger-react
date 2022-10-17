import { createSlice } from '@reduxjs/toolkit';
import { ElementType } from 'react';

interface ElementTreeSlice {
	elementTree: ElementType[];
}

// 使用该类型定义初始 state
const initialState: ElementTreeSlice = {
	elementTree: [],
};
export const elementSlice = createSlice({
	name: 'elementTree',
	initialState,
	reducers: {},
});

export default elementSlice.reducer;
