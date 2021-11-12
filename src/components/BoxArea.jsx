import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  width: ${props => props.size};
  min-height: 100px;
  height: auto;
  text-align: center;
  background-color: ${props => props.backgroundColor};
  border-radius: 5px;
`;

const BoxArea = (props) => {
  const { backgroundColor, size, text } = props;
  return (
    <Box backgroundColor={backgroundColor} size={size}>{text}</Box>
  );
};

export default BoxArea;
