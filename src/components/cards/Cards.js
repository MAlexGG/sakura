import React, { useState, useEffect } from 'react';
import Card from '../card/Card';
import { sakuraService } from '../services/Sakura';
import { CtCards } from './Cards.styled';

function Cards() {

    const [cards, setCards] = useState([]);

    const api = sakuraService();

  useEffect(() => {
    try {
        api.getAll().then((res) => {
            setCards(res);
        })
    } catch (error) {
        console.log(error);
    };
  }, [])
  
    
    return (
      <>
          <CtCards>
                {cards.map((el, index) => (
                    <Card key={index} el={el} left={`${index * 2.5}vh`} />
                ))}
          </CtCards>
        
      </>
  )
}

export default Cards