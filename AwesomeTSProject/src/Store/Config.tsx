import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { createLogger } from 'redux-logger';

const logger = createLogger();

const rootReducer = combineReducers({
    
});

const initialState = {};

export const store = configureStore({
    reducer: rootReducer,
    middleware: ( getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false}).concat( logger),
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: initialState,
    enhancers: (defaultEnhancers) => [...defaultEnhancers]
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;