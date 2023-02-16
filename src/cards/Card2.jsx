import { useState, useEffect } from 'react';
import Icons, { Icons2, Icons3 } from "../packages/Icons";
import './Card.css';

const Card2 = ({ id2, onAdd2, onRemove2, total2, setTotal2 }) => {
const [bv, setBv] = useState(0);

useEffect( () => {
    if(!id2) {
      setBv(total2)
    }
}, [total2, id2])

return (
    <section className='container' style={{marginTop:"30px"}} >
      <div className='ıd'>
         <i><Icons3/></i> 
         <h4 id='id' > DL.: {id2}</h4>
      </div>
      <div className='bv'>
         <h4 id='self-bv'>Self BV: </h4>
         <p id='bv' >{bv}</p>
         <div className='buttons' >
            <button id='button1' onClick={() => {setBv(bv + 100);setTotal2(total2 + 100)}}>
            <Icons/>
            </button>
            <button id='button2' onClick={() => {
             if (bv > 0) {
             setBv(bv - 100);
             setTotal2(total2 - 100);
             }
             }}><Icons2/>
            </button>
          </div>      
      </div >
      <h3 className='total'>Total: {bv}</h3>
  
      <div className='signs' >
        <button className='sum' onClick={onAdd2}>+</button>
        <button className='times' onClick={onRemove2}>x</button>
      </div>
    </section>
   );
  };
export default Card2;