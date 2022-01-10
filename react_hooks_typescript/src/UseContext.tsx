import { memo, useState, useContext } from 'react'
import { context as UserContext, UserState } from 'store'

function ConsumerComponent() {
  const user = useContext<UserState>(UserContext)

  return (
    <div>
      <div>First: {user.first}</div>
      <div>Last: {user.last}</div>
    </div>
  )
}

export const UseContextComponent = memo(() => {
  const [user, userSet] = useState<UserState>({
    first: 'Chilly',
    last: 'Willy',
  })

  return (
    <UserContext.Provider value={user}>
      <ConsumerComponent />
      <button
        onClick={() =>
          userSet({
            first: 'Josie',
            last: 'Wales',
          })
        }
      >
        Change Context
      </button>
    </UserContext.Provider>
  )
})
