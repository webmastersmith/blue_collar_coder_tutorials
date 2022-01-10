import { memo, useState } from 'react'

export const UseStateComponent = memo(() => {
  const [arr, arrSet] = useState<number[]>([])
  const [name, nameSet] = useState<string | null>(null)

  return (
    <div>
      <div>
        <button onClick={() => arrSet([...arr, arr.length + 1])}>
          Add to array
        </button>
        {JSON.stringify(arr)}
      </div>

      <div>
        <button onClick={() => nameSet(name + 'hi')}>add hi</button>
        {name}
      </div>
    </div>
  )
})
