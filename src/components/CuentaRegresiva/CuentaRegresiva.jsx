import React, { useEffect, useRef, useState } from 'react'
import './CuentaRegresiva.css'

const CuentaRegresiva = () => {

  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');
  
  let interval = useRef();

  const DATE_TARGET = new Date('08/05/2024 9:00 PM');
  const MILLISECONDS_OF_A_SECOND = 1000;
  const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
  const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
  const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24

  const  startTimer = ()=>{

    interval = setInterval(()=>{

      const NOW = new Date();
      const DURATION = DATE_TARGET - NOW;
      
      const REMAINING_DAYS = Math.floor(DURATION / MILLISECONDS_OF_A_DAY);
      const REMAINING_HOURS = Math.floor((DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);
      const REMAINING_MINUTES = Math.floor((DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);
      const REMAINING_SECONDS = Math.floor((DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);

      if(DURATION < 0){
        clearInterval(interval.current);
      }else{
        setTimerDays(REMAINING_DAYS);
        setTimerHours(REMAINING_HOURS);
        setTimerMinutes(REMAINING_MINUTES);
        setTimerSeconds(REMAINING_SECONDS);
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
        <h3>{timerMinutes}</h3>
        <p>Minutos</p>
      </section>
      <span>:</span>
      <section className='timer-info'>
        <h3>{timerSeconds}</h3>
        <p>Segundos</p>
      </section>
    </div>
  )
}

export default CuentaRegresiva