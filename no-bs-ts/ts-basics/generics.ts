function customSetState<T>(initial: T): [() => void, (v: T) => void] {
  let str: T = initial
  return [() => str, (v: T) => (str = v)]
}

const [num, numSet] = customSetState<number>(3)
const [first, firstSet] = customSetState<string>('bob')

console.log(num())
console.log(numSet(200))
console.log(num())

console.log(first())
console.log(firstSet('nancy'))
console.log(first())
