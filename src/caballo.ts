class Caballo {
    raza: string
    edad: number

    constructor(raza: string, edad: number) {
        this.raza = raza
        this.edad = edad

    }

    saludar(): string {
        return `Hola soy un caballo de la raza ${this.raza}`
    }

    esPotro(): boolean {
        return this.edad < 2; // devuelve true si es cachorro
    }

    comer(): void {
        console.log(`${this.raza} está comiendo...`);
    }

}
export { Caballo }