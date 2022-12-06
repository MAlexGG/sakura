import React from 'react'
import { CtCard, ImgCard } from './Card.styled'
import reverse from '../../assets/img/reverso.jpg';
import { useState } from 'react';

function Card({ left, el, setSelectedCards, selectedCards}) {

  const [picked, setPicked] = useState(false);

  const getCard = () => {
    if (selectedCards.length < 3) {
      setSelectedCards([...selectedCards, el]);
    } else (alert('ya has seleccionado 3 cartas'));
    setPicked(true);
  };

  return (
    <>
      <CtCard left={left} onClick={getCard} selectedCards={selectedCards} picked={picked}>
          <ImgCard src={reverse} />
      </CtCard>
    </>
  )
}

export default Card