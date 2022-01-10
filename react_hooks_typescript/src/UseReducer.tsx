import { memo, useReducer } from 'react'

const initialState = {
  counter: 100,
}

type ACTIONTYPES =
  | { type: 'increment'; payload: number }
  | { type: 'decrement'; payload: number }

function counterReducer(state: typeof initialState, action: ACTIONTYPES) {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        counter: state.counter + action.payload,
      }
    case 'decrement':
      return {
        ...state,
        counter: state.counter - action.payload,
      }
    default:
      return state
  }
}

export const UseReducerComponent = memo(() => {
  const [state, dispatch] = useReducer(counterReducer, initialState)
  return (
    <div>
      <div>
        <button
          onClick={() =>
            dispatch({
              type: 'increment',
              payload: 10,
            })
          }
        >
          Increment
        </button>{' '}
        |{' '}
        <button
          onClick={() =>
            dispatch({
              type: 'decrement',
              payload: 20,
            })
          }
        >
          Decrement
        </button>
      </div>
      {state.counter}
    </div>
  )
})
