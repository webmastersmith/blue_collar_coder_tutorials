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

const nums = [1, 2, 3, 2, 3, 5, 6, 7, 8]
const numString = ['1', '2', '3', '2', '3', '5', '6', '7', '8']
const strings = ['a', 'b', 'c', 'b']

// forEach
function customForEach<T>(arr: T[], forEachFunc: (v: T) => void): void {
  arr.reduce((a, v) => {
    forEachFunc(v)
    return undefined
  }, undefined)
}
// customForEach(strings, (v) => console.log(v))

// Filter
function myFilter<T>(arr: T[], filterFunc: (v: T) => boolean): T[] {
  return arr.reduce(
    (acc: T[], cur: T) => (filterFunc(cur) ? [...acc, cur] : acc),
    []
  )
}
// console.log(myFilter<string>(strings, (v) => v === 'b'))
// console.log(myFilter<number>(nums, (v) => v === 2))
// console.log(myFilter<number>(nums, (v) => v % 2 === 0))

// map
function myMap<T, K>(arr: T[], mapFunc: (v: T) => K): K[] {
  return arr.reduce((acc: K[], cur: T) => [...acc, mapFunc(cur)], [])
}

console.log(myMap(nums, (v) => v + 10))
console.log(myMap(nums, (v) => v.toString()))
console.log(myMap(numString, (v) => +v))
