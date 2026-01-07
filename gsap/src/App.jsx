import { useState } from 'react'

import Herosection from './Pages/Herosection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Herosection/>
    </>
  )
}

export default App
