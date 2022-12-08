import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/header/Header';
import { CtReadings, CtSelectedCards, CtSelectedCard, CtImg, TxtSelectedCardName, ImgSelectedCard, CtReadingText, CtCardText, TxtCardName, TxtCardMeaning, TxtStateCard } from './Reading.styled';

function Reading() {

    const location = useLocation();
    const { selectedCards } = location.state;

  return (
      <>
        <Header />
          <CtReadings>
            <CtSelectedCards>
                <CtSelectedCard>
                <TxtStateCard>PASADO</TxtStateCard>
                  <TxtSelectedCardName>{selectedCards[0].spanishName} {selectedCards[0].kanji}</TxtSelectedCardName>
                  <CtImg>
                    <ImgSelectedCard src={selectedCards[0].sakuraCard} alt={selectedCards[0].spanishName} />
                  </CtImg>
                </CtSelectedCard>
                <CtSelectedCard>
                <TxtStateCard>PRESENTE</TxtStateCard>
                  <TxtSelectedCardName>{selectedCards[1].spanishName} {selectedCards[1].kanji}</TxtSelectedCardName>
                  <CtImg>
                    <ImgSelectedCard src={selectedCards[1].sakuraCard} alt={selectedCards[1].spanishName} />
                  </CtImg>
                </CtSelectedCard>
                  <CtSelectedCard>
                      <TxtStateCard>FUTURO</TxtStateCard>
                  <TxtSelectedCardName>{selectedCards[2].spanishName} {selectedCards[2].kanji}</TxtSelectedCardName>
                  <CtImg>
                    <ImgSelectedCard src={selectedCards[2].sakuraCard} alt={selectedCards[2].spanishName} />
                  </CtImg>
                </CtSelectedCard>
                </CtSelectedCards>
                <CtReadingText>
                  <CtCardText>
                      <TxtCardName>{selectedCards[0].spanishName}</TxtCardName>
                      <TxtCardMeaning>: {selectedCards[0].meaning}</TxtCardMeaning>
                  </CtCardText>
                  <CtCardText>
                      <TxtCardName>{selectedCards[1].spanishName}</TxtCardName>
                      <TxtCardMeaning>: {selectedCards[1].meaning}</TxtCardMeaning>
                  </CtCardText>
                  <CtCardText>
                      <TxtCardName>{selectedCards[2].spanishName}</TxtCardName>
                      <TxtCardMeaning>: {selectedCards[2].meaning}</TxtCardMeaning>
                  </CtCardText>
                </CtReadingText>
          </CtReadings>
      </>
  )
}

export default Reading