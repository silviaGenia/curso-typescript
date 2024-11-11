

export function parseText(input: string): string[]
export function parseText(input: string[]): string

export function parseText(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join('') //string==>string[]
  } else {
    return input.split('') // string[]=>string
  }
}

const respuestaArray = parseText("karla")
console.log("respuesta", respuestaArray)

const respuestaArray1 = parseText(['k', 'a', 'r', 'l', 'a'])

console.log("respuesta1", respuestaArray1)