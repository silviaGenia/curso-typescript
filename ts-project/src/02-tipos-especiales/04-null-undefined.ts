(()=>{
let myNull:null =null
let myUndefined:undefined =undefined

let miDosTipos:number|null=null

miDosTipos=12

let miDosTipos1:string|undefined
miDosTipos1="Hola"

function hola(nombre:string|null){
  let hola1="Hola"
  if(nombre){
    hola1 +=nombre
  }else{
    hola1 += " nada"
  }
  console.log(hola1)
}

hola("Carlos")
hola(null)
})()
