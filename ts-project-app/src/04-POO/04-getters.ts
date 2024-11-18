export class Auto {
  marca: string
  modelo: string
  public color: string
  precio: number

  constructor(marca: string, modelo: string, color: string, precio: number) {
    this.marca = marca
    this.modelo = modelo
    this.color = color
    this.precio = precio
  }

  get getMarca(): string {
    return this.marca
  }

  get getColor(): string {
    return this.color
  }

  precioAuto() {
    return `El precio del auto es: ${this.precio}`
  }

}


const miAuto = new Auto("Toyota", "Montañoso", "Azul", 50000)

//console.log(`Marca del Auto: ${miAuto.getMarca}`)
//console.log(`Color del Auto: ${miAuto.getColor}`)
//console.log(`Precio del Auto: ${miAuto.precio}`)
console.log(miAuto.precioAuto())


//miAuto.color = "Rojo"
//console.log(miAuto)