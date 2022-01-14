import { memo, useState, useEffect, useCallback, useMemo } from 'react'
import { RootState } from 'redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, removeTodo, Todo } from 'redux/todoSlice'

export const JustTodos = memo(() => {
  const todos = useSelector((state: RootState) => state.todosReducer.todos)
  const dispatch = useDispatch()

  return (
    <div>
      <div>{JSON.stringify(todos)}</div>
    </div>
  )
})
