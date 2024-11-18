import { Persona } from "./02-metodos"

class Persona2 {
  protected nombre: string
  public apellido: string
  public edad: number

  constructor(nombre: string, apellido: string, edad: number) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
  }

  get nombreCompleto(): string {
    return `Su nombre es : ${this.nombre} ${this.apellido}`
  }
}


class Estudiante extends Persona2 {
  carrera: string
  cu: number


  constructor(nombre: string, apellido: string, edad: number, carrera: string, cu: number) {
    super(nombre, apellido, edad)
    this.carrera = carrera
    this.cu = cu
  }

  get datosEstudiante(): string {
    return `${this.nombre}`
  }

}


const persona = new Persona2("Karlos", "Ramirez", 23)
console.log(persona.nombreCompleto)

const estuadiante = new Estudiante("Karlas", "Ramirez", 23, "Sistemas", 42342)
console.log(estuadiante.nombreCompleto)
