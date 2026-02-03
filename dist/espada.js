class Espada {
    nombre;
    daño;
    textura;
    constructor(nombre, daño, textura) {
        this.nombre = nombre;
        this.daño = daño;
        this.textura = textura;
    }
    atacar() {
        return `Atacando con ${this.nombre}, hiciste ${this.daño} de daño!`;
    }
    reparar() {
        return `Reparando ${this.nombre}`;
    }
}
export { Espada };
//# sourceMappingURL=espada.js.map