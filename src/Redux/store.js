import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
//slice reducers
import favoriteReducer from './FavoriteSlice/favoriteSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};
const rootReducer = combineReducers({
  favorite: favoriteReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
});
export const persistor = persistStore(store);
