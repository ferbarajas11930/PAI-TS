class Pato {
    nombre: string
    sonido: string

    constructor(nombre: string, sonido: string) {
        this.nombre = nombre
        this.sonido = sonido

    }

    saludar(): string {
        return `Hola soy un ${this.nombre}`
    }

    sonidoPato(): string {
        console.log("Sonido del pato: ", this.sonido)
        return this.sonido
    }

}
export { Pato }