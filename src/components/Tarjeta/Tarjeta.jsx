import './Tarjeta.css'
import React from 'react'
import { useHref, useMatch } from 'react-router-dom'
import Card from '../Card/Card';

const Tarjeta = () => {

    const match = useHref();

  return (
    <div className='tarjeta-container'>
        <h2>Tarjeta</h2>
        {match == "/micumple/" ? 
            <Card title="Cena"
                description="Valor adultos: $25.000"
                secondDescription="Valor adolecentes: $18.000"
                thirdDescription="Valor menores (4 a 12 años): $11.000" 
                fourthDescription="Valor menores de 3 años: $6.000"
                buttonText="datos de pago"
            /> : 
            match == "/micumple/trasnoche" ? 
            <Card title="Trasnoche"
                description="Valor de la tarjeta"
                secondDescription="$8.000"
                buttonText="datos de pago"
            /> : ""}
    </div>  
  )
}

export default Tarjeta