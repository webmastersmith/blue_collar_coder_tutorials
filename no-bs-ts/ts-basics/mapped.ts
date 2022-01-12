type MyFlexibleDogInfo = {
  name: string
  [key: string]: string | number
}

const dog: MyFlexibleDogInfo = {
  name: 'fighter',
  breed: 'mutt',
  age: 23,
  [23]: 'hello',
}
