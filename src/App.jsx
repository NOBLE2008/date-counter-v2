import { useState } from 'react'
import './App.css'

function App() {
  
  const [count, setCount] = useState(Date.now())

  const [steps, setSteps] = useState(1)

  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  return (
    <div className='con'>
      <span>
      <input type="range" min={0} max={10} value={steps} onChange={(e) => {
        setSteps(e.target.value)
      }}/>
      <p>Steps: {steps}</p>
      </span>
      <div>
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
      </div>
      <div><p>{Date.now() > count ? `${Math.floor((Date.now() - count)/86400000)} days ago was ${weekdays[new Date(count).getDay()]}, ${months[new Date(count).getMonth()]} ${new Date(count).getDate()}, ${new Date(count).getFullYear()}`: Math.floor((Date.now() - count)/86400000) === 0 ? `Today is ${weekdays[new Date(count).getDay()]}, ${months[new Date(count).getMonth()]} ${new Date(count).getDate()}, ${new Date(count).getFullYear()}` : `${Math.abs(Math.floor((Date.now() - count)/86400000))} days till ${weekdays[new Date(count).getDay()]}, ${months[new Date(count).getMonth()]} ${new Date(count).getDate()}, ${new Date(count).getFullYear()}`}</p></div>
    </div>
  )
}

export default App
