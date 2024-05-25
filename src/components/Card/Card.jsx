import React from 'react'
import './Card.css'

const Card = ({title, description, secondDescription, thirdDescription, fourthDescription, buttonText}) => {

  return (
    <div className='card-container'>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{secondDescription}</p>
        <p>{thirdDescription}</p>
        <p>{fourthDescription}</p>
        {buttonText == '' ? "" : <button>{buttonText}</button>}  
    </div>
  )
}

export default Card