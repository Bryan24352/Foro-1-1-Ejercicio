//node cambioDolar.js --cantidad=1000 --tasa=24.78 --tipo=false
//false -> de lps a dolares
//true-> de dolares a lps
//console.log(valorResultante)

console.log(process.argv)
let[,,p1,p2,p3]=process.argv
console.log(p1,p2,p3)
const [,cantidad]=p1.splite('=')
const [,tasa]=p2.splite('=')
const [,tipo]=p3.splite('=')

tipo(tipo===true)

//console.log(tipo )
let valorResultante= tipo ? cantidad8tasa : cantidad/tasa 

console.log(`El cambio es: ${valorResultante} ${tipo?'lps':'$'}`)