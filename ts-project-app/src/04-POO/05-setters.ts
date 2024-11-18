class Auto {
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

  set setPrecio(precioDeAuto: number) {
    if (precioDeAuto >= 30000) {
      this.precio = precioDeAuto
      console.log(`Puedes llevartelo el auto pagaste los ${this.precio}`)
    } else {
      console.log(`No te lo puedes llevar el auto te falta pagar`)
    }
  }

}


const miAuto = new Auto("Toyota", "Montañoso", "Azul", 50000)

//console.log(`Marca del Auto: ${miAuto.getMarca}`)
//console.log(`Color del Auto: ${miAuto.getColor}`)
//console.log(`Precio del Auto: ${miAuto.precio}`)
//console.log(miAuto)
miAuto.setPrecio = 50000
