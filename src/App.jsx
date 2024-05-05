import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Construccion from './components/Construccion/Construccion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
      <Construccion/>
    </>
  )
}

export default App
