import { FC, useCallback, useRef } from 'react'
import { RootState } from 'redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, removeTodo, Todo } from 'redux/todoSlice'

const Heading: FC<{ title: string }> = ({ title }) => <h2>{title}</h2>

function App() {
  const todos = useSelector((state: RootState) => state.todosReducer.todos)
  const dispatch = useDispatch()

  const newTodoRef = useRef<HTMLInputElement>(null)
  const addNewTodo = useCallback(() => {
    if (newTodoRef.current) {
      dispatch(addTodo(newTodoRef.current.value))
      newTodoRef.current.value = ''
    }
  }, [dispatch])

  return (
    <div>
      <Heading title="Hello Bryon" />
      <Heading title="Todos" />
      {todos.map((todo: Todo) => {
        return (
          <div key={todo?.id}>
            {todo?.text}
            <button onClick={() => dispatch(removeTodo(todo.id))}>
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
