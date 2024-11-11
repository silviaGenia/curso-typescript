(()=>{

  let userId:string|number

  function dosTipos1(miTexto:string|number){
  }


  type UserId=string|number|boolean

  let user:UserId
user=12
user="12"
user=true


function dosTipos(miTexto:UserId){
  if(typeof miTexto==="string"){
    console.log(`string ${miTexto}`)
  }else{
    console.log(`number ${miTexto}`)
  }
}


type Size = 'S'|'M'|'L'|'XL'|'XXL'


let tallaCamisas:Size
 tallaCamisas="M"
 tallaCamisas="S"
 tallaCamisas="XL"
 tallaCamisas="XXL"

 function dosTipos2(user2:UserId, talla:Size){
}

dosTipos2(1111,"S")
dosTipos2("once", "XL")
dosTipos2(true,"L")

})()
