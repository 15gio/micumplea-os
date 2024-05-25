import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Portada from './components/Portada/Portada'
import About from './components/About/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
      <Portada/>
      <About/>
    </>
  )
}

export default App
