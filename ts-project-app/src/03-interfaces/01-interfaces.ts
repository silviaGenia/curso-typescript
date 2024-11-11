
type Carreras = "Pedagogia" | "Administracion" | "Derecho"

type Persona = {
  id: string | number,
  name: string,
  edad: number,
  carrera?: Carreras
}

interface Persona1 {
  id: string | number,
  name: string,
  edad: number,
  carrera?: Carreras
}

const persona: Persona[] = []
//[{},{}]

persona.push({
  id: "1",
  name: "Karla",
  edad: 12,
})

const addPersonas = (data: Persona) => {
  persona.push(data)
}

console.log("Persona:", persona)


