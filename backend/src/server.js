import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(helmet())
app.use(cors())
app.use(morgan('combined'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.get('/api/hello', (req, res) => {
  res.json({
    message: 'Hello from Express backend! 🚀',
    timestamp: new Date().toISOString(),
    status: 'success'
  })
})

app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  })
})

// Basic CRUD example
let todos = [
  { id: 1, text: 'Learn Vite', completed: false },
  { id: 2, text: 'Build Express API', completed: true },
  { id: 3, text: 'Connect Frontend & Backend', completed: true }
]

app.get('/api/todos', (req, res) => {
  res.json(todos)
})

app.post('/api/todos', (req, res) => {
  const { text } = req.body
  const newTodo = {
    id: Date.now(),
    text,
    completed: false
  }
  todos.push(newTodo)
  res.status(201).json(newTodo)
})

app.put('/api/todos/:id', (req, res) => {
  const { id } = req.params
  const { text, completed } = req.body
  const todoIndex = todos.findIndex(todo => todo.id === parseInt(id))
  
  if (todoIndex === -1) {
    return res.status(404).json({ error: 'Todo not found' })
  }
  
  todos[todoIndex] = { ...todos[todoIndex], text, completed }
  res.json(todos[todoIndex])
})

app.delete('/api/todos/:id', (req, res) => {
  const { id } = req.params
  const todoIndex = todos.findIndex(todo => todo.id === parseInt(id))
  
  if (todoIndex === -1) {
    return res.status(404).json({ error: 'Todo not found' })
  }
  
  todos.splice(todoIndex, 1)
  res.status(204).send()
})

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Route not found',
    message: `The route ${req.originalUrl} does not exist on this server`
  })
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'production' ? 'Internal server error' : err.message
  })
})

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
  console.log(`📡 API endpoints available at http://localhost:${PORT}/api`)
}) 