import React from 'react'
import Cards from '../../components/cards/Cards';
import Header from '../../components/header/Header';
import UnselectedCard from '../../components/unselectedCard/UnselectedCard';
import { CtUnselectedCards } from './Home.styled';

function Home() {
  return (
    <>
      <Header />
      <CtUnselectedCards>
        <UnselectedCard text='PASADO' />
        <UnselectedCard text='PRESENTE'/>
        <UnselectedCard text='FUTURO'/>
      </CtUnselectedCards>
      
      <Cards/>
    </>
  )
}

export default Home