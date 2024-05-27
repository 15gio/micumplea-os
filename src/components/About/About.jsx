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
            link="https://maps.app.goo.gl/wmQcBq4QkJQHZxmw9"
            buttonText="Ver ubicación"
        />
        <Card 
            title='Fecha' 
            description='Sábado 3 de agosto'
            secondDescription='21:00 hs'
            link=""
            sw=''
            buttonText=""
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
            sw='true'
            link= "https://docs.google.com/forms/d/e/1FAIpQLSe2Bq4zs9i9C5OAZzRWG2VZ67J6Rh8HDYamk4EeZCLDu74Y0g/viewform"
            buttonText="Confirmar asistencia"
        />
    </div>
  )
}

export default About