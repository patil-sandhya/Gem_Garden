// Alert.js
import React from 'react';
import styled from 'styled-components';

const AlertContainer = styled.div`
  background-color: ${props => props.type === 'error' ? 'red' : 'green'};
  color: white;
  padding: 10px;
  border-radius: 5px;
  font-weight: bold;
`;

const Alert = ({ type, message }) => {
  return (
    <AlertContainer type={type}>
      {message}
    </AlertContainer>
  );
};

export default Alert;
