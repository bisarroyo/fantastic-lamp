import React from 'react';
import TextArea from '../components/TextArea';
import ButtonPrimary from '../components/ButtonPrimary';
import ButtonSecondary from '../components/ButtonSecondary';
import BoxArea from '../components/BoxArea';
import Payments from '../components/Payments';
import Faq from '../components/Faq';

import HomeStyle from '../styles/HomeStyle';

const Home = () => {
  return (
    <HomeStyle>
      <div className='home-container'>
        <TextArea />
        <div className='home-button'>
          <ButtonPrimary className='button' text='Start' />
          <ButtonSecondary className='button' text='logout' />
        </div>
        <div className='home-box'>
          <div className='home-box-item'>
            <BoxArea backgroundColor='#ac3' text='hola, esto es una prueba' size='100px' />
          </div>
          <div className='home-box-item'>
            <BoxArea backgroundColor='#ac3' text='hola, esto es una prueba' size='100px' />
          </div>
          <div className='home-box-item'>
            <BoxArea backgroundColor='#ac3' text='hola, esto es una prueba' size='100px' />
          </div>
          <div className='home-box-item'>
            <BoxArea backgroundColor='#ac3' text='hola, esto es una prueba' size='100px' />
          </div>
        </div>
        <Payments title='Ultimos pagos ralizados' />
        <Faq />
      </div>
    </HomeStyle>
  );
};

export default Home;
