import { useState, useEffect } from 'react'
import axios from 'axios'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Input } from './components/ui/input'
import { Badge } from './components/ui/badge'
import { Loader2, Server, Smartphone, Code2, CheckCircle, XCircle } from 'lucide-react'

function App() {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(true)
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Test backend connection
        const response = await axios.get('/api/hello')
        setMessage(response.data.message)
        setIsConnected(true)
        
        // Fetch todos
        const todosResponse = await axios.get('/api/todos')
        setTodos(todosResponse.data)
      } catch (error) {
        console.error('Error fetching data:', error)
        setMessage('Failed to connect to backend')
        setIsConnected(false)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const addTodo = async () => {
    if (!newTodo.trim()) return
    
    try {
      const response = await axios.post('/api/todos', { text: newTodo })
      setTodos([...todos, response.data])
      setNewTodo('')
    } catch (error) {
      console.error('Error adding todo:', error)
    }
  }

  const toggleTodo = async (id) => {
    const todo = todos.find(t => t.id === id)
    try {
      const response = await axios.put(`/api/todos/${id}`, {
        ...todo,
        completed: !todo.completed
      })
      setTodos(todos.map(t => t.id === id ? response.data : t))
    } catch (error) {
      console.error('Error updating todo:', error)
    }
  }

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`/api/todos/${id}`)
      setTodos(todos.filter(t => t.id !== id))
    } catch (error) {
      console.error('Error deleting todo:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Vite Express Starter
          </h1>
          <p className="text-gray-600 mb-4">
            Full-stack starter with shadcn/ui components
          </p>
          <div className="flex items-center justify-center gap-2">
            {isConnected ? (
              <Badge variant="default" className="bg-green-500">
                <CheckCircle className="w-3 h-3 mr-1" />
                Connected
              </Badge>
            ) : (
              <Badge variant="destructive">
                <XCircle className="w-3 h-3 mr-1" />
                Disconnected
              </Badge>
            )}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="text-center">
              <Smartphone className="w-8 h-8 mx-auto text-blue-600 mb-2" />
              <CardTitle className="text-lg">Vite + React</CardTitle>
              <CardDescription>
                Lightning fast development with HMR
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Server className="w-8 h-8 mx-auto text-green-600 mb-2" />
              <CardTitle className="text-lg">Express Backend</CardTitle>
              <CardDescription>
                RESTful API with modern middleware
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Code2 className="w-8 h-8 mx-auto text-purple-600 mb-2" />
              <CardTitle className="text-lg">shadcn/ui</CardTitle>
              <CardDescription>
                Beautiful, accessible components
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Connection Status */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Backend Connection</CardTitle>
            <CardDescription>
              Testing the connection between frontend and backend
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Connecting to backend...</span>
              </div>
            ) : (
              <div className="bg-gray-50 p-4 rounded-lg">
                <code className="text-sm">{message}</code>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Todo App Demo */}
        <Card>
          <CardHeader>
            <CardTitle>Todo Demo</CardTitle>
            <CardDescription>
              Interactive demo showing CRUD operations with the backend
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Add Todo */}
            <div className="flex gap-2">
              <Input
                placeholder="Add a new todo..."
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addTodo()}
                className="flex-1"
              />
              <Button onClick={addTodo} disabled={!newTodo.trim()}>
                Add Todo
              </Button>
            </div>

            {/* Todo List */}
            <div className="space-y-2">
              {todos.map((todo) => (
                <div
                  key={todo.id}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                >
                  <button
                    onClick={() => toggleTodo(todo.id)}
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      todo.completed
                        ? 'bg-green-500 border-green-500 text-white'
                        : 'border-gray-300 hover:border-green-400'
                    }`}
                  >
                    {todo.completed && <CheckCircle className="w-3 h-3" />}
                  </button>
                  <span
                    className={`flex-1 ${
                      todo.completed
                        ? 'line-through text-gray-500'
                        : 'text-gray-900'
                    }`}
                  >
                    {todo.text}
                  </span>
                  <Badge variant={todo.completed ? "secondary" : "default"}>
                    {todo.completed ? "Done" : "Pending"}
                  </Badge>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    Delete
                  </Button>
                </div>
              ))}
              {todos.length === 0 && !loading && (
                <p className="text-center text-gray-500 py-4">
                  No todos yet. Add one above!
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-600">
          <p>
            Edit <code className="bg-gray-200 px-2 py-1 rounded">frontend/src/App.jsx</code> or{' '}
            <code className="bg-gray-200 px-2 py-1 rounded">backend/src/server.js</code> to see changes
          </p>
        </div>
      </div>
    </div>
  )
}

export default App 