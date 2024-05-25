import './Tarjeta.css'
import React from 'react'
import { useHref } from 'react-router-dom'
import Card from '../Card/Card';

const Tarjeta = () => {

    const match = useHref();
    console.log(match)

  return (
    <div className='tarjeta-container'>
        <h2>Tarjeta</h2>
        {match == "/micumple/" ? <Card title="Cena"/> : match == "/micumple/trasnoche" ? <Card title="Trasnoche"/> : ""}
    </div>
  )
}

export default Tarjeta