import React, { useState } from 'react';
import styled from 'styled-components';
import ImageModal from './ImageModal';

function PhotoItem({ photo: { urls, alt } }) {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <ImageWrap>
      <Image src={urls.small} alt={alt} onClick={openModal} />
      <ImageModal
        fullImageUrl={urls.full}
        alt={alt}
        modalVisible={modalVisible}
        closeModal={closeModal}
      />
    </ImageWrap>
  );
}

const ImageWrap = styled.div``;

const Image = styled.img`
  cursor: pointer;
  width: 100%;
`;

export default PhotoItem;
