import React from 'react';
import BoxArea from './BoxArea';

const Menu = () => {
  return (
    <div>
      <BoxArea backgroundColor='#bab' size='40%' text='Mis depósitos' />
      <BoxArea backgroundColor='#ac3' size='40%' text='Hacer depósito' />
      <BoxArea backgroundColor='#ac3' size='40%' text='Mis pagos' />
      <BoxArea backgroundColor='#ac3' size='40%' text='Mis referidos' />
    </div>
  );
};

export default Menu;
