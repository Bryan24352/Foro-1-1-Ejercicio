let dispositivo = {

    nombre: "gateway",
    nserie: 12345,
    valor: 1500,
    DireccianIpv4:[192,168,10,5],
    estado:false,
    cambiarEstado: function(){

        this.estado=!this.estado,
        console.log(`Estado cambio: ${this.estado}`)

    }
}

//dispostivo.valor=255
console.log(dispositivo)


dispositivo.cambiarEstado()
console.log(dispositivo.estado)

let numeroserie = disposittivo.nserie
let nombreDispositivo = dispostivo.nombre 

console.log(numeroserie,nombreDispositivo)

let {nserie,nombre} = dispositivo

console.log(nSerie,nombre)

let Equipo ={
    nombre:"Barcelona",
    golesaFavor:1,
    golesEnContra:3
}

golesLocal = Equipo.golesaFavor
golesvisitantes = Equipo.golesEnContra

console.log(golesLocal,golesEnContra)

let loteria = [32,69,47,69]

console.log(loteria)
//Destructuracion de arreglo 
let [,,ganador]=loteria 
console.log(ganador)