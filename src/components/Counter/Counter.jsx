import React, { useRef, useState } from 'react'
import './Counter.css'
const Counter = () => {
    const [state,setState] = useState(1)
    // const plusRef = useRef()
    const handlePlus = ()=>{
        if(state<10) {
            setState(state+1)
        }
    }
    // const minusRef = useRef()
    const handleMinus = ()=>{
        if(state>-10) {
            setState(state-1)
        }
    }
  return (
    <div className='minusPlus'>
        <button onClick={handleMinus}>-</button>
        <input type="number" value={state} disabled/>
        <button onClick={handlePlus}>+</button>
    </div>
  )
}

export default Counter