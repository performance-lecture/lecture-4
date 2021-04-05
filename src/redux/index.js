import { combineReducers } from 'redux';
import photosReducer from './photos';

const rootReducer = combineReducers({ photos: photosReducer });

export default rootReducer;