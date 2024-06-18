export class Transaccion {
    _id!: string; 
    monedaOrigen: string;
    cantidadOrigen!: number; 
    monedaDestino: string; 
    cantidadDestino!: number;
    emailCliente: string;
    tasaConversion!: number;

    constructor(){
        this.monedaOrigen = '';
        this.monedaDestino = '';
        this.emailCliente = 'emailejemplo@gmail.com';
    }

    Producto(monedaOrigen: string, cantidadOrigen: number, monedaDestino:string, cantidadDestino:number, emailCliente:string, tasaConversion: number){        
        this.monedaOrigen = monedaOrigen;
        this.cantidadOrigen = cantidadOrigen;
        this.monedaDestino = monedaDestino;
        this.cantidadDestino = cantidadDestino;
        this.emailCliente = emailCliente;
        this.tasaConversion = tasaConversion;
    }
}
