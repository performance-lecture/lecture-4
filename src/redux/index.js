import { combineReducers } from 'redux';
import photosReducer from './photos';
import categoryReducer from './category';

const rootReducer = combineReducers({
  photos: photosReducer,
  category: categoryReducer,
});

export default rootReducer;
