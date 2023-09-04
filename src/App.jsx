import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import cryptoRandomString from 'crypto-random-string'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Crypto</h1>
      <div className="card">
        <p>
          Random crypto kod  <code>cryptoRandomString({length: 10});</code> i spremi
        </p>
      </div>
      <p className="read-the-docs">
        Klikni i vidi više
      </p>
    </>
  )
}

export default App
