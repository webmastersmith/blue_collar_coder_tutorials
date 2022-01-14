import { useCallback, useReducer } from 'react'

type ActionType = { type: 'ADD'; text: string } | { type: 'REMOVE'; id: number }

export interface Todo {
  text: string
  done: boolean
  id: number
}
export const useTodos = (
  initialTodos: Todo[]
): {
  todos: Todo[]
  addTodo: (text: string) => void
  removeTodo: (id: number) => void
} => {
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

  const [todos, dispatch] = useReducer(reducer, initialTodos)

  const addTodo = useCallback((text: string) => {
    return dispatch({
      type: 'ADD',
      text,
    })
  }, [])
  const removeTodo = useCallback((id: number) => {
    return dispatch({
      type: 'REMOVE',
      id,
    })
  }, [])

  return {
    todos,
    addTodo,
    removeTodo,
  }
}
