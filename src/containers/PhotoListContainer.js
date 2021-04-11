import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PhotoList from '../components/PhotoList';
import { fetchPhotos } from '../redux/photos';

function PhotoListContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  const { photos, loading } = useSelector(state => ({
    photos:
      state.category.category === 'all'
        ? state.photos.data
        : state.photos.data.filter(
            photo => photo.category === state.category.category
          ),
    loading: state.photos.loading,
  }));

  if (loading === 'error') {
    return <span>Error!</span>;
  }

  if (loading !== 'done') {
    return <span>loading...</span>;
  }

  return <PhotoList photos={photos} />;
}

export default PhotoListContainer;
