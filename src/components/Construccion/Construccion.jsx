import React from 'react'
import craneLogo from '/crane.svg'
import './Construccion.css'
import CuentaRegresiva from '../CuentaRegresiva/CuentaRegresiva'

const Construccion = () => {
  return (
    <div className='building-container'>
        <h1>Mis 15 años</h1>
        <CuentaRegresiva />
        <img src={craneLogo} alt="" />
        <h3>PAGINA EN CONSTRUCCION</h3>
    </div>
  )
}

export default Construccion