interface Cat {
  // readonly name: string  //can also mark as 'readonly' for individual fields.
  name: string
  breed: string
}
// type ReadOnlyCat = Readonly<Cat>

const makeCat = (name: string, breed: string): Readonly<Cat> => {
  return { name, breed }
}

const usul = makeCat('Usul', 'Tabby')
// usul.name = 'Peta'

console.log(usul)
