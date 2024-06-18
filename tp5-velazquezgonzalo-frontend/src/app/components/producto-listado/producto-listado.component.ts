import { Component } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProductoFormComponent } from '../producto-form/producto-form.component';

@Component({
  selector: 'app-producto-listado',
  standalone: true,
  imports: [CommonModule, ProductoFormComponent],
  templateUrl: './producto-listado.component.html',
  styleUrl: './producto-listado.component.css'
})
export class ProductoListadoComponent {

  productos!: Array<Producto>;

  constructor(private productoService: ProductoService, private router: Router){
    this.obtenerProductos();
  }

  obtenerProductos(){
    this.productoService.getProductosDestacados().subscribe(
      (data:any) => {
        this.productos = data;
      },
      (error:any) => {
        console.log(error);
      }
    )   
  }

  agregar(){
    this.router.navigate(['productos-formulario']);
  }
}
