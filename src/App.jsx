import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [count, setCount] = useState(Date.now())

  const [steps, setSteps] = useState(1)

  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  return (
    <div>
      <button onClick={() => {
        setSteps((s) => {
          return s - 1;
        })
      }}>-</button>
      <p>Steps: {steps}</p>
      <button onClick={() => {
        setSteps((s) => {
          return s + 1;
        })
      }}>+</button>
      <button>-</button>
      <p>Count</p>
      <button>+</button>
      <p></p>
    </div>
  )
}

export default App
