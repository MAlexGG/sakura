import React from 'react'
import Cards from '../components/cards/Cards';
import Header from '../components/header/Header';
import UnselectedCard from '../components/unselectedCard/UnselectedCard';

function Home() {
  return (
    <>
      <Header />
      <UnselectedCard/>
      <Cards/>
    </>
  )
}

export default Home