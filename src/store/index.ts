import { configureStore } from '@reduxjs/toolkit';
import elementReducer from '../store/features/element/elementSlice';
import elementDataReducer from './features/element/elementDataSlice';
import elementTreeReducer from './features/element/elementTree';

export const store = configureStore({
	reducer: {
		element: elementReducer,
		elementTree: elementTreeReducer,
		elementData: elementDataReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: ['element/renderElement'],
				ignoredPaths: ['element.renderedElements'],
			},
		}),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
