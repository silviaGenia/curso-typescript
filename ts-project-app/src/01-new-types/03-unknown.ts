let anyVar: any

anyVar = true
anyVar = undefined
anyVar = null
anyVar = 1
anyVar = []
anyVar = {}


let isNew: boolean = anyVar
console.log(isNew)

let unknownVar: unknown

unknownVar = true
unknownVar = undefined
unknownVar = null
unknownVar = 1
unknownVar = []
unknownVar = {}


if (typeof unknownVar === "string") {
  unknownVar.toUpperCase()
}

