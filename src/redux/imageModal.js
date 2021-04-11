import { createSlice } from '@reduxjs/toolkit';

/** Actions **/
export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';
export const SET_BG_COLOR = 'SET_BG_COLOR';

export const showModal = ({ src, alt }) => ({
  type: SHOW_MODAL,
  src,
  alt,
});
export const hideModal = () => ({ type: HIDE_MODAL });
export const setBgColor = bgColor => ({ type: SET_BG_COLOR, bgColor });

/** Reducer **/
const { reducer: imageModalReducer } = createSlice({
  name: 'imageModal',
  initialState: {
    modalVisible: false,
    bgColor: { r: 0, g: 0, b: 0 },
    src: '',
    alt: '',
  },
  reducers: {},
  extraReducers: {
    SHOW_MODAL: (state, action) => {
      state.modalVisible = true;
      state.src = action.src;
      state.alt = action.alt;
      state.bgColor = { r: 0, g: 0, b: 0 };
    },
    HIDE_MODAL: state => {
      state.modalVisible = false;
    },
    SET_BG_COLOR: (state, action) => {
      state.bgColor = action.bgColor;
    },
  },
});

export default imageModalReducer;
