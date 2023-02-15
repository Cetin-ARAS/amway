import { useEffect, useState } from 'react';
import Icons, { Icons2, Icons3 } from './packages/Icons';
import './Card.css';

const Card = ({ id, onAdd, onRemove, total, setTotal }) => {
const [bv, setBv] = useState(id ? 0 :total);

useEffect( () => {
    if(!id) {
      setBv(total)
    }
}, [total])




 return (
  <div className='container' >
    <div className='ıd'>
       <i ><Icons3/></i> 
       <h4 id='id' > DL.: {id}</h4>
    </div>
    <div className='bv'>
       <h4 id='self-bv'>Self BV: </h4>
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
    <p className='total'>Total: {bv}</p>

    <div className='signs' >
      <button className='sum' onClick={onAdd}>+</button>
      <button className='times' onClick={onRemove}>x</button>
    </div>
  </div>
 );
};

export default Card;
