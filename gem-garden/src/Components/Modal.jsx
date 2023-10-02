// Modal.js
import React from 'react';
import styled from 'styled-components';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        {children}
        <OrderBtn onClick={onClose}>Submit</OrderBtn>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const OrderBtn= styled.button`
   background-color: black;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 20px 0;
  border-radius: 5px;
  cursor: pointer;
  width: 200px;
 `;