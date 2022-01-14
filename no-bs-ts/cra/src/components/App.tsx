import React, { FC, useCallback, useState } from 'react'

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
  text: string
}

const items = ['hello', 'goodby', 'see ya!']
function App() {
  const [payload, setPayload] = useState<Payload | null>(null)

  const listAlert = useCallback((item: string): void => {
    alert(item)
  }, [])

  return (
    <div>
      <Heading title="Hello Bryon" />
      <Box>Hello there</Box>
      <List items={items} onClick={listAlert} />
    </div>
  )
}

export default App
