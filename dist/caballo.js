class Caballo {
    raza;
    edad;
    constructor(raza, edad) {
        this.raza = raza;
        this.edad = edad;
    }
    saludar() {
        return `Hola soy un caballo de la raza ${this.raza}`;
    }
    esPotro() {
        return this.edad < 2; // devuelve true si es cachorro
    }
    comer() {
        console.log(`${this.raza} está comiendo...`);
    }
}
export { Caballo };
//# sourceMappingURL=caballo.js.map