import React, { useState } from 'react';
import Card from './Card';

const App = () => {
  const [cards, setCards] = useState([1]);

  const addCard = () => {
    setCards([...cards, cards.length + 1]);
  };

  const removeCard = () => {
    setCards(cards.slice(0, -1));
  };

  return (
    <div>
      {cards.map((id) => (
        <Card key={id} id={id} onAdd={addCard} onRemove={removeCard} />
      ))}
    </div>
  );
};

export default App;
