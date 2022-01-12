import { myPromise } from './functions'

interface MyUser {
  name: string
  id: string
  email: string
}

const merge = (user: MyUser, overrides: Partial<MyUser>): MyUser => {
  return {
    ...user,
    ...overrides,
  }
}

console.log(
  merge(
    {
      name: 'bob',
      id: '213',
      email: 'bob@bob.com',
    },
    {
      email: 'bobby@bob.com',
    }
  )
)
