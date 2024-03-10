import { useState } from 'react'

import './App.css'
import Users from './Users'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React</h1>
      <Users></Users>
      <div>
        <button onClick={()=> setCount((count)=> count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
