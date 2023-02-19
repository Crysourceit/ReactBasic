import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Transaction from './components/Transaction'
import FormComponents from './components/FormComponents'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className='logo'>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className='bttn'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <h1>Vite + React For First Time</h1>
      <FormComponents />
      <Transaction />
    </div>
  )
}

export default App
