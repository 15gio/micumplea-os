import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Portada from './components/Portada/Portada'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
      <Portada/>
    </>
  )
}

export default App
