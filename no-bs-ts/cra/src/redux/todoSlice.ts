import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Todo {
  text: string
  done: boolean
  id: number
}

interface TodoSliceState {
  todos: Todo[]
}

const initialState: TodoSliceState = {
  todos: [],
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos = [
        ...state.todos,
        {
          id: state.todos.length,
          text: action.payload,
          done: false,
        },
      ]
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(
        (todo: Todo) => todo.id !== action.payload
      )
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo } = todosSlice.actions

export default todosSlice.reducer
