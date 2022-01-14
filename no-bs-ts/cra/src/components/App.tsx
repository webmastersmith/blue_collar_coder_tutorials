import React, { FC, useCallback, useRef } from 'react'
import { useTodos, Todo } from './useTodos'

const Heading: FC<{ title: string }> = ({ title }) => <h2>{title}</h2>

function App() {
  const { todos, addTodo, removeTodo } = useTodos([])
  const newTodoRef = useRef<HTMLInputElement>(null)
  const addNewTodo = useCallback(() => {
    if (newTodoRef.current) {
      addTodo(newTodoRef.current.value)
      newTodoRef.current.value = ''
    }
  }, [addTodo])

  return (
    <div>
      <Heading title="Hello Bryon" />
      <Heading title="Todos" />
      {todos.map((todo: Todo) => {
        return (
          <div key={todo?.id}>
            {todo?.text}
            <button
              onClick={() => {
                removeTodo(todo.id)
              }}
            >
              Remove
            </button>
          </div>
        )
      })}
      <div>
        <input type="text" ref={newTodoRef} />
        <button onClick={addNewTodo}>Add Todo</button>
      </div>
    </div>
  )
}

export default App
