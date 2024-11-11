(()=>{

  let userId:string|number
  userId=124141
  userId="docedoce"
  //userId=true

function dosTipos(miTexto:string|number){
  if(typeof miTexto==="string"){
    console.log(`string ${miTexto}`)
  }else{
    console.log(`number ${miTexto.toFixed(1)}`)
  }
}

dosTipos("Doce")
dosTipos(12.456789)

})()
