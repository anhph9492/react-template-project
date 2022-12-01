// /**
//  * Copyright HMS. 2022. All Rights Reserved.
//  */
import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import rootReducer from './rootReducer';
import { useDispatch } from 'react-redux'

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false
		})
})

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store

