import React, { useState } from 'react';
<FontAwesomeIcon icon="fa-duotone fa-arrow-up-wide-short" />
const Card = ({ id, onAdd, onRemove, name }) => {
const [bv, setBv] = useState(0);
const [total, setTotal] = useState(0);


return (
  <div style={{ padding: '20px', border: '1px solid black', width:"100px", margin:"20px", display: "inline-block" }}>
    <h3>{name}</h3>
    <div>
      <p>ID: {id}</p>
      <p>BV: {bv}</p>
      <button onClick={() => {
        setBv(bv + 100);
        setTotal(total + 100);
      }}>{FontAwesomeIcon}</button>
      <button onClick={() => {
        if (bv > 0) {
          setBv(bv - 100);
          setTotal(total - 100);
        }
      }}>-</button>
    </div>
    <p>Total: {total}</p>
    <button onClick={onAdd}>+</button>
    <button onClick={onRemove}>x</button>
  </div>
);
};

export default Card;