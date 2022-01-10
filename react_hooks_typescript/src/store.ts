import { createContext } from 'react'

const initialState = {
  first: '',
  last: '',
}
export type UserState = typeof initialState

export const context = createContext<UserState>(initialState)
