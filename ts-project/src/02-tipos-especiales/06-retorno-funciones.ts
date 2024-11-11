(() => {

  function imprimirNombre(name: string): void {
    console.log(`Hola ${name}`)
  }

  function suma(valor1: number, valor2: number): number {
    return valor1 + valor2
  }

  //Retorno
  function nombrecompleto(nombre: string, apellido: string): string {
    return `${nombre} ${apellido}`
  }

  //Sin Retorno
  function inprimirNombre(nombre: string, apellido: string): void {
    const respuesta = nombrecompleto(nombre, apellido)
    console.log(`El nombre completo es:${respuesta}`)
  }

  inprimirNombre("Samira", "Palacios")

})()