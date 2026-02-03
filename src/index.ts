/*let a : number = 5
let b : number = 12

let result = a + b

console.log(`El resultado es: ${result}`)*/

import { Mascota } from "./mascota.js";
import { Caballo } from "./caballo.js";

/*const suma = (a: number, b: number): number => {return a + b}

    const result = suma(4,6)
    console.log(`El resultado de la suma es: ${result}`)*/


const mascota1 = new Mascota("Fido", 3)
console.log(mascota1.saludar(), mascota1.cumplirAnio(), mascota1.mostrarEdad())

const  caballo1 = new Caballo("Horsey", 2)
console.log(caballo1.saludar(), caballo1.esPotro(), caballo1.comer())