import React from 'react';

import { FaBtc } from 'react-icons/fa';
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
      <div className='home_box-text'>
        <TextArea />
        <div className='home_box-button'>
          <div className='button_container'>
            <ButtonPrimary text='Start' />
          </div>
          <div className='button_container'>
            <ButtonSecondary text='logout' />
          </div>

        </div>
      </div>
      <div className='home_box-info'>
        <BoxArea
          backgroundColor='#ac3'
          tittle='Automatic Payments'
          text='Payments wil be automatic to your btc address.'
        >
          <FaBtc />
        </BoxArea>
        <BoxArea
          backgroundColor='#bbb'
          tittle='Automatic Payments'
          text='Payments wil be automatic to your btc address.'
        >
          <FaBtc />
        </BoxArea>
        <BoxArea
          backgroundColor='#aff'
          tittle='Automatic Payments'
          text='Payments wil be automatic to your btc address.'
        >
          <FaBtc />
        </BoxArea>
        <BoxArea
          backgroundColor='#bab'
          tittle='Automatic Payments'
          text='Payments wil be automatic to your btc address.'
        >
          <FaBtc />
        </BoxArea>
      </div>
      <Payments title='Ultimos pagos ralizados' />
      <Faq />
    </HomeStyle>
  );
};

export default Home;
