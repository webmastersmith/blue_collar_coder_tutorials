type MyFlexibleDogInfo = {
  name: string
} & Record<string, string | number>

const dog: MyFlexibleDogInfo = {
  name: 'fighter',
  breed: 'mutt',
  age: 23,
  [23]: 'hello',
}
