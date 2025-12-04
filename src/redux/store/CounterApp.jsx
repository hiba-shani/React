import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './store'

function CounterApp(){
    const count = useSelector((state)=>state.counter)
    const dispatch=useDispatch()
  return (
    <div>
      <h1>Counter app using redux toolkit</h1>
      <h2>count:{count}</h2>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <button onClick={()=>dispatch(reset())}>reset</button>
    </div>
  )
}

export default CounterApp
