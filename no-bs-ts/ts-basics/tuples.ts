type ThreeDCoordinate = [x: number, y: number, z: number] //any item can different type.

function addCoords(
  c1: ThreeDCoordinate,
  c2: ThreeDCoordinate
): ThreeDCoordinate {
  return [c1[0] + c2[0], c1[1] + c2[1], c1[2] + c2[2]]
}

console.log(addCoords([1, 2, 3], [10, 20, 30]))

function customSetState(initial: string): [() => void, (v: string) => string] {
  let str: string = initial
  return [() => str, (v) => (str = v)]
}

const [get1, set1] = customSetState('bob')
const [get2, set2] = customSetState('jack')
console.log(get1())
console.log(get2())
set1('peeps')
console.log(get1())
console.log(get2())
