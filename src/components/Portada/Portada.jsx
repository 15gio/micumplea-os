import React from 'react'
import CuentaRegresiva from '../CuentaRegresiva/CuentaRegresiva'
import './Portada.css'

const Portada = () => {
  return (
    <div className='cover-container'>
      <div className='text-container'>
        <h3>Huilén</h3>
        <h1>Mis 15 años</h1>
      </div>
        
      <CuentaRegresiva />
    </div>
  )
}

export default Portada