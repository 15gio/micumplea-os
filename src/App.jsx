import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Portada from './components/Portada/Portada'
import About from './components/About/About'
import Tarjeta from './components/Tarjeta/Tarjeta'

function App() {

  return (
    <>  
      <Portada/>
      <About/>
      <Tarjeta/>
    </>
  )
}

export default App
