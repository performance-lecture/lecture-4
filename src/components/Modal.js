import React from 'react';
import styled from 'styled-components';

const Modal = ({ modalVisible, closeModal, bgColor, children }) => {
  return (
    <>
      {modalVisible ? (
        <>
          <ModalWrap bgColor={bgColor}>
            <ModalContent>
              <CloseButton onClick={closeModal}>Close</CloseButton>
              <div>{children}</div>
            </ModalContent>
          </ModalWrap>
        </>
      ) : null}
    </>
  );
};

const ModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ bgColor }) =>
    `rgba(${bgColor.r}, ${bgColor.g}, ${bgColor.b}, 0.8)`};
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  z-index: 999;
  * {
    margin-left: 16px;
    margin-right: 16px;
  }
`;

const ModalContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-align: center;
  height: 100%;
`;

const CloseButton = styled.button`
  cursor: pointer;
  position: fixed;
  border: none;
  top: 20px;
  right: 20px;
  color: #fff;
  font-size: 28px;
  background-color: transparent;
`;

export default Modal;
