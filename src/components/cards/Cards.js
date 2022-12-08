import React, { useState, useEffect, useMemo } from 'react';
import Card from '../card/Card';
import { sakuraService } from '../services/Sakura';
import { CtCards } from './Cards.styled';

function Cards({setSelectedCards, selectedCards}) {
  
  const [cards, setCards] = useState([]);

  const api = sakuraService();

  const getAll = () => {
    try {
      api.getAll().then((res) => {
        setCards((res).sort(function (a, b) { return (Math.random() - 0.5) }));
      })
    } catch (error) {
      console.log(error);
    };
  }; 

  useEffect(() => {
    getAll();
  }, []);

  let randomCards = useMemo(() => {
    return cards;
  }, [cards]);
  
  console.log(cards)
  return (
    <>
      <CtCards>
        {randomCards.map((el, index) => (
          <Card key={index} el={el} left={`${index * 1.7}%`} selectedCards={selectedCards} setSelectedCards={setSelectedCards} cards={cards} setCards={setCards} />
        ))}
      </CtCards>
    </>
  )
}

export default Cards