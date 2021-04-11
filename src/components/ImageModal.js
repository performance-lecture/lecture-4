import React from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import { useDispatch } from 'react-redux';
import { hideModal, setBgColor } from '../redux/imageModal';
import { getAverageColorOfImage } from '../utils/getAverageColorOfImage';

function ImageModal({ modalVisible, src, alt, bgColor }) {
  const dispatch = useDispatch();
  const onLoadImage = e => {
    const averageColor = getAverageColorOfImage(e.target);
    dispatch(setBgColor(averageColor));
  };

  const closeModal = () => {
    dispatch(hideModal());
  };

  return (
    <Modal
      modalVisible={modalVisible}
      closeModal={closeModal}
      bgColor={bgColor}
    >
      <ImageWrap>
        <FullImage crossOrigin="*" src={src} alt={alt} onLoad={onLoadImage} />
      </ImageWrap>
    </Modal>
  );
}

const ImageWrap = styled.div`
  width: 100%;
  height: 100%;
`;
const FullImage = styled.img`
  max-width: 100vw;
  max-height: 75vh;
  box-shadow: 0px 0px 16px 4px rgba(0, 0, 0, 0.3);
`;

export default ImageModal;
