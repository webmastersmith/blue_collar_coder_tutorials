import { memo, useRef } from 'react'

export const UseRefComponent = memo(() => {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  )
})
