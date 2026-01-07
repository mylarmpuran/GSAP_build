import { useState } from 'react'

import Herosection from './Pages/Herosection'
import Hello from './Components/Hello'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Herosection/>
     <Hello/>

    </>
  )
}

export default App
