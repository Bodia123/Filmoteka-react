import { configureStore } from '@reduxjs/toolkit';
//slice reducers
import favoriteReducer from './FavoriteSlice/favoriteSlice';
export const store = configureStore({
  reducer: {
    favorite: favoriteReducer,
  },
});
