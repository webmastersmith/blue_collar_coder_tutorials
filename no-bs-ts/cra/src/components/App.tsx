import React, {
  FC,
  useCallback,
  useState,
  useEffect,
  useReducer,
  useRef,
} from 'react'

const Heading: FC<{ title: string }> = ({ title }) => <h2>{title}</h2>
const Box: React.FunctionComponent = ({ children }) => <div>{children}</div>
const List: FC<{
  items: string[]
  onClick?: (item: string) => void
}> = ({ items, onClick }) => (
  <ul>
    {items.map((item) => (
      <li key={item} onClick={() => onClick?.(item)}>
        {item}
      </li>
    ))}
  </ul>
)

const items = ['hello', 'goodby', 'see ya!']
function App() {
  // const [payload, setPayload] = useState<Payload[] | null>(null)

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/users?id=5')
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setPayload(data)
    //   })
  }, [])

  type ActionType =
    | { type: 'ADD'; text: string }
    | { type: 'REMOVE'; id: number }

  interface Todo {
    text: string
    done: boolean
    id: number
  }
  const reducer = (state: Todo[], action: ActionType) => {
    switch (action.type) {
      case 'ADD':
        return [
          ...state,
          {
            id: state.length,
            text: action.text,
            done: false,
          },
        ]
      case 'REMOVE':
        return state.filter((todo: Todo) => todo.id !== action.id)
      default:
        return state
    }
  }

  const newTodoRef = useRef<HTMLInputElement>(null)

  const [todos, dispatch] = useReducer(reducer, [])

  const listAlert = useCallback((item: string): void => {
    alert(item)
  }, [])

  const addTodo = useCallback(() => {
    if (newTodoRef.current) {
      dispatch({
        type: 'ADD',
        text: newTodoRef.current.value,
      })
      newTodoRef.current.value = ''
    }
  }, [])
  return (
    <div>
      <Heading title="Hello Bryon" />
      <Box>Hello there</Box>
      <List items={items} onClick={listAlert} />

      <Heading title="Todos" />
      {todos.map((todo: Todo) => {
        return (
          <div key={todo?.id}>
            {todo?.text}
            <button
              onClick={() =>
                dispatch({
                  type: 'REMOVE',
                  id: todo.id,
                })
              }
            >
              Remove
            </button>
          </div>
        )
      })}
      <div>
        <input type="text" ref={newTodoRef} />
        <button onClick={addTodo}>Add Todo</button>
      </div>
    </div>
  )
}

export default App
