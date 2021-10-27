import React from 'react';

import Ul from './Styles';

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li><a href="#">Home</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#contact">Contact me</a></li>
    </Ul>
  );
};

export default RightNav;
