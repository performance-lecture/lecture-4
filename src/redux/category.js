import { createSlice } from '@reduxjs/toolkit';

/** Actions **/
export const SET_CATEGORY = 'SET_CATEGORY';

export const setCategory = category => ({ type: SET_CATEGORY, category });

/** Reducer **/
const { reducer: categoryReducer } = createSlice({
  name: 'category',
  initialState: {
    category: 'all', // 'random', 'animals', 'food', 'fashion', 'travel'
  },
  reducers: {},
  extraReducers: {
    SET_CATEGORY: (state, action) => {
      state.category = action.category;
    },
  },
});

export default categoryReducer;
