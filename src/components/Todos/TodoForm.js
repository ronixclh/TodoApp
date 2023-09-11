import { useState } from 'react'
import styles from './TodoForm.module.css'
import Button from '../UI/Button'

function TodoForm({ addTodo }) {
  const [text, setText] = useState('')

  const onSubmitHandler = (event) => {
    event.preventDefault()
    addTodo(text) //berem text i otdaem kak parametr v funkciju addTodo
    setText('') //obnulaem formu na submite
  }

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Enter new todo"
          value={text} //beret tekstovoe vvedennoje znachenije
          onChange={(e) => setText(e.target.value)} //otdaet tekstovoe znachenije i izmenaet sostojanije komponenta
        ></input>
        <Button type="submit" title="Submit">
          Submit
        </Button>
      </form>
    </div>
  )
}

export default TodoForm
