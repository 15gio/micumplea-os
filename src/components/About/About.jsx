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
            secondDescription='Av. Richieri 3649, Santo Tomé.'
            buttonText="Ver ubicación"
        />
        <Card 
            title='Fecha' 
            description='Sábado 3 de agosto'
            secondDescription='21:00 hs'
            buttonText="Agendar"
        />
        <Card 
            title='Vestimenta' 
            description='Formal'
            buttonText=''
        />
        <Card 
            title='¿Venís?' 
            description='Me  gustaria compartir mi fiesta con vos'
            secondDescription=''
            buttonText="Confirmar asistencia"
        />
    </div>
  )
}

export default About