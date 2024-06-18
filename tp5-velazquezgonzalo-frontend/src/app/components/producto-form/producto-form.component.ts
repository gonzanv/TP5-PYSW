import { Component } from '@angular/core';
import { Producto } from '../../models/producto';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../../services/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-form',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './producto-form.component.html',
  styleUrl: './producto-form.component.css'
})
export class ProductoFormComponent {
  producto: Producto = new Producto();

  constructor(private productoService: ProductoService, private router: Router){
    
  }

  registrar(){
    console.log(this.producto);
    this.productoService.addProducto(this.producto).subscribe(
      (data:any) => {
        console.log(data);
        this.router.navigate(['producto-listado'])
      },
      (error:any) => {
        console.log(error);
      }
    )
  }

  volver(){
    this.router.navigate(['producto-listado'])
  }
}
