class Pato {
    nombre;
    sonido;
    constructor(nombre, sonido) {
        this.nombre = nombre;
        this.sonido = sonido;
    }
    saludar() {
        return `Hola soy un ${this.nombre}`;
    }
    sonidoPato() {
        console.log("Yo soy un pato y hago ", this.sonido);
        return this.sonido;
    }
}
export { Pato };
//# sourceMappingURL=pato.js.map