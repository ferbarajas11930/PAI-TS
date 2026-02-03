class Mascota {
    nombre: string
    edad: number

    constructor(nombre: string, edad: number) {
        this.nombre = nombre
        this.edad = edad

    }

    saludar(): string {
        return `Hola soy ${this.nombre}`
    }

    cumplirAnio(): number {
        console.log("Edad +1: ", this.edad += 1)
        return this.edad
    }

    mostrarEdad(): string {
        this.edad += 1
        return `Tengo ${this.edad} años`
    }

}
export { Mascota }