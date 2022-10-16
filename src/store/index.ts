import { configureStore } from '@reduxjs/toolkit';
import elementReducer from '../store/features/element/elementSlice';

export const store = configureStore({
	reducer: {
		element: elementReducer,
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
