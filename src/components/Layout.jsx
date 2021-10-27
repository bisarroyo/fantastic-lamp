import React from 'react';
import Navbar from './Navbar/Navbar/Navbar';
import Footer from './Footer/Footer';
import GlobalStyle from '../styles/GlobalStyles';

const Layout = (props) => {
  const { children } = props;
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
