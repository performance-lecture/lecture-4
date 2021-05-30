import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import PhotoList from '../components/PhotoList';
import { fetchPhotos } from '../redux/photos';

function PhotoListContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  const { category, allPhotos, loading } = useSelector(
    state => ({
      category: state.category.category,
      allPhotos: state.photos.data,
      loading: state.photos.loading,
    }),
    shallowEqual
  );

  const photos =
    category === 'all'
      ? allPhotos
      : allPhotos.filter(photo => photo.category === category);

  if (loading === 'error') {
    return <span>Error!</span>;
  }

  if (loading !== 'done') {
    return <span>loading...</span>;
  }

  return <PhotoList photos={photos} />;
}

export default PhotoListContainer;
