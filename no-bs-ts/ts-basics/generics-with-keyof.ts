function pluck<DataType, KeyType extends keyof DataType>(
  arr: DataType[],
  key: KeyType
): DataType[KeyType][] {
  return arr.map((item) => item[key])
}

const dogs = [
  { name: 'buster', age: 3 },
  { name: 'girldog', age: 20 },
]

console.log(pluck(dogs, 'name'))
console.log(pluck(dogs, 'age'))

// EventMap
interface BaseEvent {
  time: number
  user: string
}

interface EventMap {
  addToCart: BaseEvent & { quantity: number; productId: string }
  checkout: BaseEvent
}

function sendEvent<Name extends keyof EventMap>(
  name: Name,
  data: EventMap[Name]
): void {
  console.log([name, data])
}

sendEvent('addToCart', {
  quantity: 1,
  productId: 'hello',
  time: 23456,
  user: 'billy',
})
sendEvent('checkout', {
  time: 44,
  user: 'James',
})
