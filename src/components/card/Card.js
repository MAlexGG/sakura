import React from 'react'
import { CtCard, ImgCard } from './Card.styled'
import reverse from '../../assets/img/reverso.jpg';

function Card({top}) {
  return (
      <>
          <CtCard top={top}>
              <ImgCard src={reverse} />
        </CtCard>
      </>
  )
}

export default Card