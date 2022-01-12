const firstClassFunc = (): ((v: string) => void) => {
  return (str: string): void => {
    console.log(str)
  }
}
