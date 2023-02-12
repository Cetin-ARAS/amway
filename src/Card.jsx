import React, { useState } from 'react';
import Icons, { Icons2, Icons3 } from './packages/Icons';
import './Card.css';

const Card = ({ id, onAdd, onRemove, name }) => {
const [bv, setBv] = useState(0);
const [total, setTotal] = useState(0);



return (
  <div className='container' >
    <h3>{name}</h3>
    <div>
      <p className='text'>
      <p ><Icons3/> ID: {id}</p>
      <p >Self BV:</p>
      <p className='bv' >{bv}</p>

      <div className='buttons' >
      <button id='button1' onClick={() => {setBv(bv + 100);setTotal(total + 100)}}>
        <Icons/>
      </button>

      <button id='button2' onClick={() => {
        if (bv > 0) {
          setBv(bv - 100);
          setTotal(total - 100);
        }
      }}><Icons2/></button>
      </div>
      </p>
      
    </div >
    <p className='total'><b>Total: {total}</b></p>

    <div className='signs' >
    <button className='sum' onClick={onAdd}>+</button>
    <button className='times' onClick={onRemove}>x</button>

    </div>
  </div>
);
};

export default Card;