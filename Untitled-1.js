// Comentar una linea

/*
ABRE un comentario
Cierro el comentario
*/

// VARIABLE

/*
Lenguajes de programacion tipados: Java, c++, C
integer
string
boolean
Lenguajes de programacion no tipado: javascript
--Superset TypeScript
let: declara la variable en su entorno local
var: declara la variable en un entorno global
const: es una variable estatica o fija
this.
*/

const NUMERODIA=5;

//NUMERODIA=10;
console.log(NUMERODIA)

let nombre='Pedro';
console.log(nombre)
nombre='Luis';
console.log(nombre)
if(true){
    let nombre='Juan';
    nombre='Maria';
}
console.log(nombre)

if(true){
    let edad=20;
    console.log(edad)
}
//edad=15
//console.log(edad);

var saludo='Hola';

console.log(saludo)

function saludar(){
    this.nombre='Gustavo';
    console.log(this.nombre);
    let nombre='Linda';
    console.log(this.nombre,nombre)
}

saludar();