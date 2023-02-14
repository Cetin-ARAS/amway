import React, { useState } from 'react';
import Card from './Card';
import Card2 from './Card2';

const App = () => {
  const [cards, setCards] = useState(["You"]);
  const [card2, setCard2] = useState(["Me"]);
 
  const addCard = () => {
    setCards([...cards,  [cards.length]]);
  };

  const removeCard = (card) => {
    const index = cards.indexOf(card);
    setCards(cards.slice(0, index));
  }

  const addCard2 = () => {
    setCard2([...card2, [card2.length]]);
  }

  const removeCard2 = () => {
    setCard2(card2.slice(0, -1));
  };

  return (
    <div>
      <div>
        {cards.map((id, i) => (
        <Card
             key={id}
             id={id}
             onAdd={addCard}
             onRemove={removeCard}
           />
        ))}
      </div>
      <div>
        {card2.map((id, i) => (
        <Card2
             key={id}
             id={id}
             onAdd2={addCard2}
             onRemove2={removeCard2}
             />
        ))}
     </div>
    </div>
  );
};      

export default App;
