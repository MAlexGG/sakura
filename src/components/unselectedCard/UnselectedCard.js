import React from 'react'
import { useState } from 'react';
import { CtOpenCard, CtSelectedCard, CtUnselectedCard, CtUnselectedCardGroup, ImgSelectedCard, TxtCardName, TxtUnselectedCard } from './UnselectedCard.styled';
import reverse from '../../assets/img/reverso.jpg';

function UnselectedCard({ text, selectedCard }) {

  const [card, setCard] = useState({
    "spanishName": "???",
    "kanji": "",
    "sakuraCard": reverse,
  });

  const [revealedCard, setRevealedCard] = useState(false);
  const [revealMsg, setRevealMsg] = useState(true);

  const reveal = () => {
    setCard(selectedCard);
    setRevealedCard(true);
    setRevealMsg(false);
    setTimeout(() => {
      setRevealedCard(false);
    }, 2000);
    
  };
  
  return (
      <>
        {
          selectedCard ?
            <>
            <CtUnselectedCardGroup>
              <TxtCardName>{card.spanishName} {card.kanji}</TxtCardName>
              <CtSelectedCard onClick={reveal} revealedCard={revealedCard}>
                <CtOpenCard revealMsg={revealMsg}>REVELAR</CtOpenCard>
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