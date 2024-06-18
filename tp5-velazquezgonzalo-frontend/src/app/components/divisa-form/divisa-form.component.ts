import { Component } from '@angular/core';
import { Transaccion } from '../../models/transaccion';
import { FormsModule } from '@angular/forms';
import { DivisaService } from '../../services/divisa.service';
import { TransaccionService } from '../../services/transaccion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-divisa-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './divisa-form.component.html',
  styleUrl: './divisa-form.component.css'
})
export class DivisaFormComponent {
  transaccion: Transaccion = new Transaccion();

  constructor(private divisaService: DivisaService, private transaccionService: TransaccionService, private router: Router){

  }

  convertirDivisa(){
    this.divisaService.convert(this.transaccion.monedaOrigen, this.transaccion.monedaDestino, this.transaccion.cantidadOrigen).subscribe(
      (data:any) => {
        //console.log(data);
        this.transaccion.cantidadDestino = data.result;
        this.transaccion.tasaConversion = data.info.rate;
        console.log(this.transaccion);
        this.guardarTransaccion();
      },
      (error:any) => {
        console.log(error);
      }
    )
    
  }

  guardarTransaccion(){
    this.transaccionService.addTransaccion(this.transaccion).subscribe(
      (data:any) => {
        console.log(data);
        alert("transaccion registrada correctamente");
        this.router.navigate(['transaccion-listado'])
      },
      (error:any) => {
        console.log(error);
      }
    )
  }
}
