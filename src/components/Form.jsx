import React from 'react'
import { useState } from 'react';
import '../styles/form.css'

export default ({getResult}) => {
  const [n, setN] = useState(0)

  return (
    <div className="form">
      <h1>Ingrese N</h1>
      <input 
        type="number" 
        name="n-ellement" 
        value={n}
        onChange={e => setN(e.target.value)}
        />
        <span>
          <p onClick={() => getResult(n)}>►</p>
        </span>
    </div>
  )
}