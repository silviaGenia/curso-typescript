
export class Persona {
  nombre: string
  apellido: string
  edad: number


  constructor(nombre: string, apellido: string, edad: number) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
  }

  saludar() {
    return `Hola, Me llamo ${this.nombre} ${this.apellido} y mi edad es ${this.edad}`
  }

}

const personaKarla = new Persona("Karla", "Perez", 12)
console.log(personaKarla.saludar())
console.log(personaKarla)




class MiDia1 {
  año: number
  mes: number
  dia: number

  constructor(año: number, mes: number, dia: number) {
    this.año = año
    this.mes = mes
    this.dia = dia
  }

  imprimirMiDia() {
    return `${this.año}/${this.mes}/${this.dia}`
  }

}

const MiDiaKarla = new MiDia1(2021, 1, 23)
console.log(MiDiaKarla.imprimirMiDia())