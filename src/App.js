import React, { useState } from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TOdoForm'
import { v4 as uuid } from 'uuid'

const App = () => {
  const [todos, setTodos] = useState([
    // {
    //   id: 1,
    //   title: "Play",
    //   isCompleted: false
    // },
    // {
    //   id: 2,
    //   title: "Play Cricket",
    //   isCompleted: true
    // },
    // {
    //   id: 3,
    //   title: "Code",
    //   isCompleted: true
    // }
  ])

  const checkTodo = (id) => {
    console.log(id)
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted
      }
      console.log(todo.isCompleted)
      return todo
    }))
  }
  // Delete
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  // Add a Todo
  const addTodo = (texts) => {
    const newTodo = {
      id: uuid(),
      title: texts,
      isCompleted: false
    }
    setTodos([...todos, newTodo])
  }
  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo} />
    </div>
  )
}

export default App