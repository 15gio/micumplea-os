import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Construccion from './components/Construccion/Construccion'
import CuentaRegresiva from './components/CuentaRegresiva/CuentaRegresiva'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
      <Construccion/>
      <CuentaRegresiva/>
    </>
  )
}

export default App
