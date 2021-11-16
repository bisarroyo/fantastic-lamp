import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  width: 90%;
  min-height: 100px;
  height: auto;
  text-align: center;
  background-color: ${props => props.backgroundColor};
  border-radius: 5px;
  margin: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  .box_text {
    width: 80%;
  }

  .icon {
    width: 20%;
  }

  @media (min-width: 768px) {
    width: 345px;
  }
`;

const BoxArea = (props) => {
  const { backgroundColor, tittle, text, children } = props;
  return (
    <Box backgroundColor={backgroundColor}>
      <div className='box_text'>
        <h3>{tittle}</h3>
        <p>{text}</p>
      </div>
      <div className='box_icon'>
        {children}
      </div>
    </Box>
  );
};

export default BoxArea;
