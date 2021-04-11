import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { showModal } from '../redux/imageModal';

function PhotoItem({ photo: { urls, alt } }) {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(showModal({ src: urls.full, alt }));
  };

  return (
    <ImageWrap>
      <Image src={urls.small} alt={alt} onClick={openModal} />
    </ImageWrap>
  );
}

const ImageWrap = styled.div``;

const Image = styled.img`
  cursor: pointer;
  width: 100%;
`;

export default PhotoItem;
