function customSetState<T>(initial: T): [() => void, (v: T) => void] {
  let str: T = initial
  return [() => str, (v: T) => (str = v)]
}

const [num, numSet] = customSetState<number>(3)
const [first, firstSet] = customSetState<string>('bob')

// console.log(num())
// numSet(200)
// console.log(num())

// console.log(first())
// firstSet('nancy')
// console.log(first())

// test  forEach from reduce with generics

const nums = [1, 2, 3]
const strings = ['a', 'b', 'c']

function customForEach<T>(arr: T[], forEachFunc: (v: T) => void): void {
  arr.reduce((a, v) => {
    forEachFunc(v)
    return undefined
  }, undefined)
}

customForEach(strings, (v) => console.log(v))
