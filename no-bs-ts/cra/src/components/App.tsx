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
  const [value, setValue] = useState(0)

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/users?id=5')
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setPayload(data)
    //   })
  }, [])

  //Button
  const Button: FC<
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    > & {
      //extend types.
      title?: string
    }
  > = ({ title, children, style, ...rest }) => {
    return (
      <button
        style={{
          backgroundColor: 'red',
          color: 'white',
          ...style,
        }}
        {...rest}
      >
        {title ?? children}
      </button>
    )
  }

  const Incrementer: FC<{
    value: number
    setValue: React.Dispatch<React.SetStateAction<number>>
  }> = ({ value, setValue }) => {
    return (
      <Button
        style={{ color: 'blue' }}
        // title="heeper button keeper!"
        onClick={() => setValue((v) => v + 1)}
      >
        Add - {value}
      </Button>
    )
  }

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
      <Incrementer value={value} setValue={setValue} />

      <Heading title="Todos" />
      {todos.map((todo: Todo) => {
        return (
          <div key={todo?.id}>
            {todo?.text}
            <Button
              onClick={() =>
                dispatch({
                  type: 'REMOVE',
                  id: todo.id,
                })
              }
            >
              Remove
            </Button>
          </div>
        )
      })}
      <div>
        <input type="text" ref={newTodoRef} />
        <Button onClick={addTodo}>Add Todo</Button>
      </div>
    </div>
  )
}

export default App
