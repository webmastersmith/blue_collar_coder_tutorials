function addNumbers(a: number, b: number): number {
  return a + b
}

export const addStrings = (str: string, str2: string = ''): string => {
  return str + str2
}

export const myPromise: Promise<string> = Promise.resolve('hello')

export const multi = (salutation: string, ...names: string[]): string => {
  return `${salutation} ${names.join(' ')}`
}

export default addNumbers
