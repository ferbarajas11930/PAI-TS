class Mascota {
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
        console.log("Edad +1: ", this.edad += 1);
        return this.edad;
    }
    mostrarEdad() {
        this.edad += 1;
        return `Tengo ${this.edad} años`;
    }
}
export { Mascota };
//# sourceMappingURL=mascota.js.map