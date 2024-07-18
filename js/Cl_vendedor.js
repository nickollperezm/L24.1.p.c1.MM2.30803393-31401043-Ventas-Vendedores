export default class Cl_vendedor {
    constructor(nombre, tipo, monto) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.monto = monto;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    set tipo(tipo) {
        this._tipo = tipo;
    }
    get tipo() {
        return this._tipo;
    }
    set monto(monto) {
        this._monto = monto;
    }
    get monto() {
        return this._monto;
    }
}