import * as photosApi from '../api/photos';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

/** Actions **/
export const FETCH_PHOTOS = 'FETCH_PHOTOS';

export const fetchPhotos = createAsyncThunk(
  FETCH_PHOTOS,
  photosApi.fetchPhotos
);

/** Reducer **/
const { reducer: photosReducer } = createSlice({
  name: 'photos',
  initialState: {
    loading: 'init',
    data: [],
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchPhotos.pending]: (state, action) => {
      state.loading = 'pending';
    },
    [fetchPhotos.fulfilled]: (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'done';
        state.data = action.payload;
      }
    },
    [fetchPhotos.rejected]: (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'rejected';
        state.error = action.error;
      }
    },
  },
});

export default photosReducer;
