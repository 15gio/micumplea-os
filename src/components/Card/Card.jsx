import React from 'react'
import './Card.css'

const Card = ({title, description, subdescription, buttonText}) => {

  return (
    <div className='card-container'>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{subdescription}</p>
        {buttonText == '' ? "" : <button>{buttonText}</button>}  
    </div>
  )
}

export default Card