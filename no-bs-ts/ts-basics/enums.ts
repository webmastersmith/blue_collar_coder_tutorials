enum Test {
  name1,
  name2,
  name3,
}
// console.log(Test.name2)

// Literal types
const rollDice = (dice: 1 | 2 | 3): number => {
  let pip = 0
  for (let i = 0; i < dice; i++) {
    pip += Math.floor(Math.random() * 5) + 1
  }
  return pip
}
console.log(rollDice(3))
