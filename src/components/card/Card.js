import React from 'react'
import { CtCard, ImgCard } from './Card.styled'
import reverse from '../../assets/img/reverso.jpg';

function Card({ left, el, setSelectedCards, selectedCards}) {

  const getPast = () => {
    if (selectedCards.length < 3) {
      setSelectedCards([...selectedCards, el]);
    } else (alert('ya ha seleccionado 3 cartas'))
  };

  return (
    <>
      <CtCard left={left} onClick={getPast} selectedCards={selectedCards}>
          <ImgCard src={reverse} />
      </CtCard>
    </>
  )
}

export default Card