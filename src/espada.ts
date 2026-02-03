class Espada {
    nombre: string;
    daño: number;
    textura: string;

    constructor(nombre: string, daño: number, textura: string) {
        this.nombre = nombre;
        this.daño = daño;
        this.textura = textura;
    }
    atacar(): string {
        return `Atacando con ${this.nombre}, hiciste ${this.daño} de daño!`;
    }
    reparar(): string {
        return `Reparando ${this.nombre}`
    }

}
export { Espada }