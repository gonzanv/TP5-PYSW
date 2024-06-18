import { Component } from '@angular/core';
import { Transaccion } from '../../models/transaccion';
import { TransaccionService } from '../../services/transaccion.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaccion-listado',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './transaccion-listado.component.html',
  styleUrl: './transaccion-listado.component.css'
})
export class TransaccionListadoComponent {
  transacciones!: Array<Transaccion>;
  filtroOrigen: string = "";
  filtroDestino: string = "";

  constructor(private transaccionService: TransaccionService, private route: Router){
    this.getAllTransacciones();
  }

  getAllTransacciones(){
    this.transaccionService.getTransacciones().subscribe(
      (data:any) => {
        this.transacciones = data;
      },
      (error:any) =>{
        console.log(error);
      }
    )
  }

  getPorMonedas(){
    this.transaccionService.getTransaccionesPorMonedas(this.filtroOrigen,this.filtroDestino).subscribe(
      (data:any) => {
        this.transacciones = data;
      },
      (error:any) => {
        console.log(error);
      }
    )
  }

  agregar(){
    this.route.navigate(['transaccion-formulario'])
  }
}
