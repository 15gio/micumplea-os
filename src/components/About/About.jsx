import React from 'react'
import './About.css'
import Card from '../Card/Card'

const About = () => {
  return (
    <div className='about-container'>
        <h2>Sobre mi fiesta</h2>
        <Card 
            title='lugar' 
            description='Salon Madison.'
            subdescription='Av. Richieri 3649, Santo Tomé.'
        />
    </div>
  )
}

export default About