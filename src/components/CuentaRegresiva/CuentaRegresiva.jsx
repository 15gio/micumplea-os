import React, { useEffect, useRef, useState } from 'react'
import './CuentaRegresiva.css'

const CuentaRegresiva = () => {

  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');
  
  let interval = useRef();

  const date = new Date("Aug 3 2024 21:00").getTime();

  const  startTimer = ()=>{

    interval = setInterval(()=>{

      const now = new Date().getTime();
      const distance = date- now;
      
      const days = Math.floor(distance/(1000*60*60*24));
      const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
      const minutes = Math.floor((distance%(1000*60*60))/(1000*60));
      const seconds = Math.floor((distance%(1000*60))/1000)

      if(distance < 0){
        clearInterval(interval.current);
      }else{
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }

    },1000)
  }

  useEffect(()=>{
    startTimer()
    return()=>{
      clearInterval(interval.current)
    }
  })

  
  
  return (
    <div className='countdown-container'>
      <section className='timer-info'>
        <h3>{timerDays}</h3>
        <p>Días</p>
      </section>
      <span>:</span>
      <section className='timer-info'>
        <h3>{timerHours}</h3>
        <p>Horas</p>
      </section>
      <span>:</span>
      <section className='timer-info'>
        <h3>{timerHours}</h3>
        <p>Minutos</p>
      </section>
      <span>:</span>
      <section className='timer-info'>
        <h3>{timerSeconds}</h3>
        <p>segundos</p>
      </section>
    </div>
  )
}

export default CuentaRegresiva