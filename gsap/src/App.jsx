import { useState } from 'react'

import Herosection from './Pages/Herosection'
import Hello from './Components/Hello'
import Welcome from './Components/Welcome.jsx'
import Message from './Components/Message.jsx'
import Counter from './Components/Counter.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Herosection/>
     <Hello/>
     <Welcome name="puran" heroName="mylaram"/>
     <Message/>
     <Counter/>

    </>
  )
}

export default App
