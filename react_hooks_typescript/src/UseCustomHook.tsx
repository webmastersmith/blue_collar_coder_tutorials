import { memo, useState, useEffect, useMemo } from 'react'

interface Todo {
  id: number
  title: string
  completed: boolean
}
function useFetchData<Payload>(url: string): {
  data: Payload[] | null
  done: boolean
} {
  const [data, dataSet] = useState<Payload[] | null>(null!)
  const [done, doneSet] = useState(false)

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((d: Payload[]) => {
        dataSet(d)
        doneSet(true)
      })
  }, [url])

  return {
    data,
    done,
  }
}

export const UseCustomHookComponent = memo(() => {
  const { data, done } = useFetchData<Todo>(
    'https://jsonplaceholder.typicode.com/todos'
  )
  const lo = useMemo(
    () => (data || []).filter((todo) => todo.title.includes('lorem')),
    [data]
  )

  return (
    <div>
      {lo.length && lo.map((l) => <div key={l.id}>{l.title}</div>)}
      {<div>---------------------------------------------------- </div>}
      {done && data!.map((todo: Todo) => <div key={todo.id}>{todo.title}</div>)}
    </div>
  )
})
