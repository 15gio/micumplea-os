import React from 'react'
import CuentaRegresiva from '../CuentaRegresiva/CuentaRegresiva'
import './Portada.css'

const Portada = () => {
  return (
    <div className='cover-container'>
        <h1>Mis 15 años</h1>
        <CuentaRegresiva />
    </div>
  )
}

export default Portada