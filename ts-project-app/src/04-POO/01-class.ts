
const date = new Date(2023, 11, 12) //0-11

date.getDay
date.getHours
date.getTime

/*
class nombre_de_la_clase{
  ...
  constructor(....){

  }
}
*/

class MiDia {
  año: number
  mes: number
  dia: number

  constructor(año: number, mes: number, dia: number) {
    this.año = año
    this.mes = mes
    this.dia = dia
  }
}

const MiDiaKarla = new MiDia(2021, 1, 23)
console.log(MiDiaKarla)