import './App.css'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TodosActions from './components/Todos/TodosActions'

//Todo

function App() {
  const [todos, setTodos] = useState([]) //nachalnoje znachenije eto pustoj massiv budet

  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(), //npm paket kotorij generirujet unikalnije ID
    }
    setTodos([...todos, newTodo])
  } //formiruem novij massiv v kotorm idut snachala starije zadachi a potom dobavljautsja novije zadachi

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  } //funkcional dlja udalenija todo pri dvojnom klike, sravnenije indexov
  //todo id sravnivaetsja s id peredannim kak parametr funkcii

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    )
  } //v funkciju peredaem obnovlennij massiv dannih

  const resetTodosHandler = () => {
    setTodos([])
  } //funckija dlja udalenija vseh zadach

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted))
  } //funkcija dlja udalenija vipolnennih zadach

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length //shetchik zavershennih zadach

  return (
    <div className="App">
      <h1>To-Do App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {todos.length > 0 && (
        <TodosActions
          completedTodosExist={!!completedTodosCount}
          resetTodos={resetTodosHandler}
          deleteCompletedTodos={deleteCompletedTodosHandler}
        />
      )}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
      {completedTodosCount > 0 && (
        <h2>{`You have completed ${completedTodosCount} ${
          completedTodosCount > 1 ? 'todos' : 'todo'
        } `}</h2>
      )}
    </div> //k komponentam dobalajutsja svojstva, toestj chto oni mogut delatj po funkcionalu
  )
}

export default App
