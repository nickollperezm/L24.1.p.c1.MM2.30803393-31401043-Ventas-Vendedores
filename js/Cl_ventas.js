export default class Cl_ventas {
    constructor() {
        this.acumMontoMayoristas = 0;
        this.mayorVentaMayorista = 0;
    }

    procesarVendedor(vendedor) {
        if (vendedor.tipo == 1) {
            this.acumMontoMayoristas += vendedor.monto;
            if (vendedor.monto > this.mayorVentaMayorista) {
                this.mayorVentaMayorista = vendedor.monto;
            }
        }
    }

    totalVentasMayoristas() {
        return this.acumMontoMayoristas;
    }

    montoMayorVentaMayorista() {
        return this.mayorVentaMayorista;
    }
}