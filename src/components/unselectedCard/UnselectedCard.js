import React from 'react'
import { useState } from 'react';
import { CtSelectedCard, CtUnselectedCard, CtUnselectedCardGroup, ImgSelectedCard, TxtCardName, TxtUnselectedCard } from './UnselectedCard.styled';
import reverse from '../../assets/img/reverso.jpg';

function UnselectedCard({ text, selectedCard }) {

  const [card, setCard] = useState({
    "spanishName": "???",
    "kanji": "",
    "sakuraCard": reverse,
  });

  const reveal = () => {
    setCard(selectedCard);
  };
  
  return (
      <>
        {
          selectedCard ?
            <>
            <CtUnselectedCardGroup>
              <TxtCardName>{card.spanishName} {card.kanji}</TxtCardName>
              <CtSelectedCard onClick={reveal}>
                <ImgSelectedCard src={card.sakuraCard} /> 
              </CtSelectedCard>
            </CtUnselectedCardGroup>
          </>
          : 
          <>
            <CtUnselectedCardGroup>
              <TxtCardName>???</TxtCardName>
              <CtUnselectedCard>
                <TxtUnselectedCard text={text}>{text}</TxtUnselectedCard>      
              </CtUnselectedCard>
            </CtUnselectedCardGroup>
          </>
        }
      </>
  )
}

export default UnselectedCard