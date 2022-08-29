import React from 'react'
import '../styles/result.css'

export default ({result}) => {
  return (
    <div className='result'>
      <h1>Resultado: </h1>
      <span>{result}</span>
    </div>
  )
}
