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
      <button onClick={() => {
        setCount((c) => {
          return count - (86400000 * steps);
        })
      }}>-</button>
      <p>Count</p>
      <button onClick={() => {
        setCount((c) => {
          return count + (86400000 * steps);
        })
      }}>+</button>
      <p>{Date.now() > count ? `${Math.floor((Date.now() - count)/86400000)} days ago was ${weekdays[new Date(count).getDay()]}, ${months[new Date(count).getMonth()]} ${new Date(count).getDate()}, ${new Date(count).getFullYear()}`: Math.floor((Date.now() - count)/86400000) === 0 ? `Today is ${weekdays[new Date(count).getDay()]}, ${months[new Date(count).getMonth()]} ${new Date(count).getDate()}, ${new Date(count).getFullYear()}` : `${Math.abs(Math.floor((Date.now() - count)/86400000))} days till ${weekdays[new Date(count).getDay()]}, ${months[new Date(count).getMonth()]} ${new Date(count).getDate()}, ${new Date(count).getFullYear()}`}</p>
    </div>
  )
}

export default App
