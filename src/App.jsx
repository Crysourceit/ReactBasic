import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Transaction from './components/Transaction'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className='flex justify-center'>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='m-1 text-3xl font-bold text-orange-400'>Vite + React For First Time</h1>
      <div className="p-1 card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Transaction />
    </div>
  )
}

export default App
