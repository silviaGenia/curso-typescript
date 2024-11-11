
let numeros: (number | string)[] = [1, 2, 3, 'holaa']
console.log(numeros)

numeros.push(12)
numeros.push("uno")

console.log(numeros)

//tuples
let user: [string, number, number, string]
user = ["karla", 14, 12, "pedro"]

const [name1, edad] = user

console.log(name1)
console.log(edad)