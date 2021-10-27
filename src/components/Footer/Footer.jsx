import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  padding: 20px;
  margin-top: 20px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>
        Made with <span role="img" aria-label="heart">❤️</span> by{' '}Bismark{' '}
        <a href="
        
        ">
          <span role="img" aria-label="heart">💖</span>
        </a>
      </p>
    </FooterContainer>
  );
};

export default Footer;
