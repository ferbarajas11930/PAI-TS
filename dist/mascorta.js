class mascota {
    nombre;
    edad;
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        return `Hola soy ${this.nombre}`;
    }
    cumplirAnio() {
        this.edad += 1;
        console.log("Edad +1: ", this.edad);
        return this.edad;
    }
    mostrarEdad() {
        this.edad += 1;
        return `Tengo ${this.edad} años`;
    }
    esCachorro() {
        return this.edad < 2; // devuelve true si es cachorro
    }
    comer() {
        console.log(`${this.nombre} está comiendo...`);
    }
}
export { mascota };
//# sourceMappingURL=mascorta.js.map