import React from 'react'
import './CuentaRegresiva.css'

const CuentaRegresiva = () => {
  return (
    <div className='main--container'>
        <div className='container dias'>
            <p className='time--number'>00</p>
            <p className='time--info'>Días</p>
        </div>
        <div className='container horas'>
            <p className='time--number'>00</p>
            <p className='time--info'>Horas</p>
        </div>
        <div className='container minutos'>
            <p className='time--number'>00</p>
            <p className='time--info'>Minutos</p>
        </div>
        <div className='container segundos'>
            <p className='time--number'>00</p>
            <p className='time--info'>Segundos</p>
        </div>
    </div>
  )
}

export default CuentaRegresiva