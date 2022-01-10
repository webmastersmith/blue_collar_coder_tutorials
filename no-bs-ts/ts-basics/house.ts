import houses from './house-info'

interface House {
  name: string
  planets: string | string[]
}

interface HouseWithID {
  id: string
  name: string
  planets: string | string[]
}

function findHouses(houses: string): HouseWithID[]

function findHouses(
  houses: string,
  filter: (house: House) => boolean
): HouseWithID[]

function findHouses(houses: House[]): HouseWithID[]

function findHouses(
  houses: House[],
  filter: (house: House) => boolean
): HouseWithID[]

function findHouses(
  input: string | House[],
  filter?: (house: HouseWithID) => boolean
) {
  const houses = typeof input === 'string' ? JSON.parse(input) : input

  return (filter ? houses.filter(filter) : houses).map((house: House) => ({
    ...house,
    id: houses.indexOf(house),
  }))
}

console.log(
  findHouses(JSON.stringify(houses), ({ name }) => name === 'Atreides')
)
console.log(findHouses(houses, ({ name }) => name === 'Harkonnen'))
