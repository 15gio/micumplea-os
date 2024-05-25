import React from 'react'
import './Card.css'

const Card = ({title, description, subdescription}) => {
  return (
    <div className='card-container'>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{subdescription}</p>
        <button>more info</button>
    </div>
  )
}

export default Card