import { createSlice } from '@reduxjs/toolkit';

const initialState = [];
export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      console.log(state);
      state.push(action.payload);
    },
    deleteFromFavorite: (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { addToFavorite, deleteFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
