import { useState } from 'react';
import Icons, { Icons2, Icons3 } from './packages/Icons';
import './Card.css';

const Card2 = ({ id, onAdd2, onRemove2, name }) => {
const [bv, setBv] = useState(0);
const [total, setTotal] = useState(0);


 return (
  <div className='container' >
    <h3>{name}</h3>
    <div className='ıd'>
       <p ><Icons3/></p> 
       <p id='id' > ID: {id}</p>
    </div>
    <div className='bv'>
       <p id='self-bv'>Self BV: </p>
       <p id='bv' >{bv}</p>
       <div className='buttons' >
          <button id='button1' onClick={() => {setBv(bv + 100);setTotal(total + 100)}}>
          <Icons/>
          </button>
          <button id='button2' onClick={() => {
           if (bv > 0) {
           setBv(bv - 100);
           setTotal(total - 100);
           }
           }}><Icons2/>
          </button>
        </div>      
    </div >
    <p className='total'>Total: {total}</p>

    <div className='signs' >
      <button className='sum' onClick={onAdd2}>+</button>
      <button className='times' onClick={onRemove2}>x</button>
    </div>
  </div>
 );
};

export default Card2;