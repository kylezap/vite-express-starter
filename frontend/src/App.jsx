import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await axios.get('/api/hello')
        setMessage(response.data.message)
      } catch (error) {
        console.error('Error fetching message:', error)
        setMessage('Failed to connect to backend')
      } finally {
        setLoading(false)
      }
    }

    fetchMessage()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Vite Express Starter</h1>
        <div className="card">
          <h2>Frontend & Backend Connected!</h2>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <p className="message">{message}</p>
          )}
        </div>
        <div className="info">
          <p>
            Edit <code>frontend/src/App.jsx</code> or <code>backend/src/server.js</code> and save to test HMR
          </p>
        </div>
      </header>
    </div>
  )
}

export default App 