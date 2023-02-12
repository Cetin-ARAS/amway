import React from 'react'
import { FaArrowUp, FaArrowDown, FaUser} from 'react-icons/fa'
import "./Icons.css"

export function Icons3 ()  {
    return (
       <>
        <div className='icons'><FaUser /></div>
       </>
      
    )
  }
function Icons ()  {
  return (
     <>
      <div className='icons'><FaArrowUp /></div>
     </>
    
  )
}

export function Icons2 ()  {
  return (
     <>
      <div className='icons'><FaArrowDown/></div>
     </>
    
  )
}


export default Icons
