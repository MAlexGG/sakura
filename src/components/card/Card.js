import React from 'react'
import { CtCard, ImgCard } from './Card.styled'
import reverse from '../../assets/img/reverso.jpg';

function Card({left}) {
  return (
      <>
        <CtCard left={left}>
          <ImgCard src={reverse} />
        </CtCard>
      </>
  )
}

export default Card