import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';

function ImageModal({ modalVisible, closeModal, fullImageUrl, alt }) {
  const [bgColor, setBgColor] = useState('rgb(255, 255, 255)');
  const getAverageColor = async e => {
    console.time();
    const imgElement = e.target;
    const blockSize = 5;
    const initialRGB = {
      r: 0,
      g: 0,
      b: 0,
    };
    const canvas = document.createElement('canvas');
    const context = canvas.getContext && canvas.getContext('2d');
    let data;
    let i = -4;
    let rgb = {
      r: 0,
      g: 0,
      b: 0,
    };
    let count = 0;

    if (!context) {
      return initialRGB;
    }

    const width = (canvas.width =
      imgElement.naturalWidth || imgElement.offsetWidth || imgElement.width);
    const height = (canvas.height =
      imgElement.naturalHeight || imgElement.offsetHeight || imgElement.height);

    context.drawImage(imgElement, 0, 0);
    try {
      data = context.getImageData(0, 0, width, height);
    } catch (e) {
      /* security error, img on diff domain */
      alert('diff domain err');
      return initialRGB;
    }

    const length = data.data.length;

    while ((i += blockSize * 4) < length) {
      ++count;
      rgb.r += data.data[i];
      rgb.g += data.data[i + 1];
      rgb.b += data.data[i + 2];
    }

    rgb.r = ~~(rgb.r / count);
    rgb.g = ~~(rgb.g / count);
    rgb.b = ~~(rgb.b / count);

    setBgColor(`rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.9)`);
    console.timeEnd();
  };
  return (
    <Modal
      modalVisible={modalVisible}
      closeModal={closeModal}
      bgColor={bgColor}
    >
      {/* crossOrigin은 src보다 먼저 선언되야 한다 */}
      <ImageWrap>
        <FullImage
          crossOrigin="*"
          src={fullImageUrl}
          alt={alt}
          onLoad={getAverageColor}
        />
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
