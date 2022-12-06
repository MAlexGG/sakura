import React from 'react'
import { useState } from 'react';
import Cards from '../../components/cards/Cards';
import Header from '../../components/header/Header';
import UnselectedCard from '../../components/unselectedCard/UnselectedCard';
import { BtReadCards, CtUnselectedCards, ImgArrow, TxtButton } from './Home.styled';
import arrow from '../../assets/img/arrow.svg';
import { Link } from 'react-router-dom';

function Home() {

  const [selectedCards, setSelectedCards] = useState([]);

  const past = selectedCards[0];
  const present = selectedCards[1];
  const future = selectedCards[2];

  return (
    <>
      <Header />
      <CtUnselectedCards>
        <UnselectedCard selectedCard={past} text='PASADO' />
        <UnselectedCard selectedCard={present} text='PRESENTE'/>
        <UnselectedCard selectedCard={future} text='FUTURO' />
        <Link to='/'>
          <BtReadCards>
            <ImgArrow src={arrow} alt='arrow button' />
            <TxtButton>LECTURA</TxtButton>
          </BtReadCards>
        </Link>
      </CtUnselectedCards>
      <Cards selectedCards={selectedCards} setSelectedCards={setSelectedCards} />
    </>
  )
}

export default Home