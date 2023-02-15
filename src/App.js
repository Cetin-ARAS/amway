import React, { useState } from 'react';
import Card from './Card';
import Card2 from './Card2';
import Tree from './Tree';

const App = () => {

  const [cards, setCards] = useState(["You"])
  const [card2, setCard2] = useState(["Me"]);
  const [total, setTotal] = useState(0);
  const [total2, setTotal2] = useState(0);
  
  const addCard = () => {
  setCards([...cards, + total]);
  }
  const removeCard = (card) => {
      setCards(cards.slice(0, -1));
  }
  const addCard2 = () => {
    setCard2([...card2, + total]);
  }
  console.log(card2)

  const removeCard2 = () => {
    setCard2(card2.slice(0, -1));
  };

  return (
    <div>
      <div>
        {cards.map((id, i) => (
        <Card
             key={id}
             id={i}
             onAdd={addCard}
             onRemove={removeCard}
             total={total}
             setTotal={setTotal}
           />
        ))}
      </div>
      <div>
        {card2.map((id2, i2) => (
        <Card2
             key={id2}
             id2={i2}
             onAdd2={addCard2}
             onRemove2={removeCard2}
             total2={total2}
             setTotal2={setTotal2}
             />
        ))}
     </div>
     {/* <Tree cards={cards} /> */}
    </div>
  );
};      

export default App;
