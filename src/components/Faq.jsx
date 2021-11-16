import React from 'react';
import styled from 'styled-components';
import SimpleAccordion from './SimpleAccordion';

const FaqStyle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .faq__container {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Faq = () => {
  return (
    <FaqStyle>
      <div className='faq__container'>
        <h2>Frequently Asked Questions</h2>
        <SimpleAccordion />
      </div>
    </FaqStyle>
  );
};

export default Faq;
