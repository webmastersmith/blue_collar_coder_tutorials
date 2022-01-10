import { memo, useState } from 'react'

export const UseEffectComponent = memo(() => {
  const [val, valSet] = useState(1)

  //   useEffect(() => {
  //     const timer = window.setInterval(() => {
  //       valSet((v) => v + 1)
  //     }, 1000)
  //     return () => window.clearInterval(timer)
  //   }, [])

  return (
    <div>
      <div>{val}</div>
    </div>
  )
})
