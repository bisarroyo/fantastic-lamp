import React from "react";
import TextArea from "../components/TextArea";
import ButtonPrimary from "../components/ButtonPrimary";
import ButtonSecondary from "../components/ButtonSecondary";
import BoxArea from "../components/BoxArea";
import Payments from "../components/Payments";
import Faq from "../components/Faq";

import HomeStyle from '../styles/HomeStyle';

const Home = () => {
  return (
    <div>
      <TextArea />
      <ButtonPrimary text="Start" />
      <ButtonSecondary text="logout" />
      <BoxArea backgroundColor="#ac3" text="hola, esto es una prueba" />
      <BoxArea backgroundColor="#acf" text="hola, esto es una prueba" />
      <BoxArea backgroundColor="#fca" text="hola, esto es una prueba" />
      <BoxArea backgroundColor="#aaa" text="hola, esto es una prueba" />
      <Payments title="Ultimos pagos ralizados" />
      <Faq />
    </div>
  );
};

export default Home;

export default Home;
