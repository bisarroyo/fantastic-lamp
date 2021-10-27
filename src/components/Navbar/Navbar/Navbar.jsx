import React from 'react';
import { BiCode } from 'react-icons/bi';

import Nav from './Styles';
import Burger from '../Burger/Burger';

const Navbar = () => {
  return (
    <Nav>
      <div className='main-header'>
        <div className='logo'>
          <BiCode />
        </div>
      </div>
      <Burger />
    </Nav>
  );
};

export default Navbar;

