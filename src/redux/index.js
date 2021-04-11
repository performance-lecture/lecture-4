import { combineReducers } from 'redux';
import photosReducer from './photos';
import categoryReducer from './category';
import imageModalReducer from './imageModal';

const rootReducer = combineReducers({
  photos: photosReducer,
  category: categoryReducer,
  imageModal: imageModalReducer,
});

export default rootReducer;
