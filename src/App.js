import React, { useState } from 'react';
import * as d3 from "d3";
import Card from './Card';
import Card2 from './Card2';
import Tree from './Tree';

const App = () => {
  const [cards, setCards] = useState(["You"]);
  const [card2, setCard2] = useState(["Me"]);
  const [treeData, setTreeData] = useState({
    name: "Root",
    children: []
  });

  const addCard = () => {
    setCards([...cards, cards.length]);
    setTreeData({
      ...treeData,
      children: [
        ...treeData.children,
        {
          name: `Card ${cards.length}`
        }
      ]
    });
  };

  const removeCard = (card) => {
    const index = cards.indexOf(card);
    setCards(cards.slice(0, index));
  }

  const addCard2 = () => {
    setCard2([...card2, card2.length]);
    setTreeData({
      ...treeData,
      children: [
        ...treeData.children,
        {
          name: `Card2 ${card2.length}`
        }
      ]
    });
  };

  const removeCard2 = () => {
    setCard2(card2.slice(0, -1));
    setTreeData({
      ...treeData,
      children: treeData.children.slice(0, -1)
    });
  };

  const root = d3.hierarchy(treeData);
  const treeLayout = d3.tree().size([100, 500]);
  treeLayout(root);
  const nodes = root.descendants();
  const links = root.links();

  return (
    <div>
      <Tree data={treeData} cards={cards} card2={card2} links={links} />
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
             x={nodes[i].x}
             y={nodes[i].y}
             onAdd2={addCard2}
             onRemove2={removeCard2}
             />
    ))}
    </div>
    </div>
    );
    };
            
    export default App;
