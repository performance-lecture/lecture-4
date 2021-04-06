import React from 'react';
import PhotoItem from './PhotoItem';
import styled from 'styled-components';

function PhotoList({ photos }) {
  return (
    <PhotoListWrap>
      {photos.map((photo, i) => {
        return <PhotoItem key={i} photo={photo} />;
      })}
    </PhotoListWrap>
  );
}

const PhotoListWrap = styled.div`
  margin: 20px auto;
  width: 70%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
`;

export default PhotoList;
