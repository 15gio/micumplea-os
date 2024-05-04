import React from 'react'
import './CuentaRegresiva.css'

const CuentaRegresiva = () => {
  return (
    <div className='countdown--container'>
        <div className='container'>
            <p className='time--number'>00</p>  
            <p className='time--info'>Días</p>
        </div>
        <div className='separador time--number'>:</div>
        <div className='container'>
            <p className='time--number'>00</p>
            <p className='time--info'>Horas</p>
        </div>
        <div className='separador time--number'>:</div> 
        <div className='container'>
            <p className='time--number'>00</p>
            <p className='time--info'>Minutos</p>
        </div>
        <div className='separador time--number'>:</div>
        <div className='container'>
            <p className='time--number'>00</p>
            <p className='time--info'>Segundos</p>
        </div>
    </div>
  )
}

export default CuentaRegresiva