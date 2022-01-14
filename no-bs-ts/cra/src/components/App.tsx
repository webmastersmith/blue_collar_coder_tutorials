import React, { FC, useCallback, useState, useEffect } from 'react'
import User from 'data.json'

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

interface Payload {
  name: string
}

const items = ['hello', 'goodby', 'see ya!']
function App() {
  const [payload, setPayload] = useState<Payload[] | null>(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users?id=5')
      .then((res) => res.json())
      .then((data: Payload[]) => {
        setPayload(data)
      })
  }, [])

  const listAlert = useCallback((item: string): void => {
    alert(item)
  }, [])

  return (
    <div>
      <Heading title="Hello Bryon" />
      <Box>Hello there</Box>
      <List items={items} onClick={listAlert} />
      <Box>{JSON.stringify(payload?.[0])}</Box>
    </div>
  )
}

export default App
