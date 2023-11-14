import React from 'react'
import { useDispatch } from 'react-redux'

export default function Operations() {

    const dispatch = useDispatch()
  return (
    <div>
        <button onClick={() => dispatch({type:'INCREMENT', payload:3})}>Incrementer</button>
        <button onClick={() => dispatch({type:'DECREMENT', payload:2})}>Decrementer</button>
        <button onClick={() => dispatch({type:'INIT', payload:200})}>Initialiser</button>
    </div>
  )
}
