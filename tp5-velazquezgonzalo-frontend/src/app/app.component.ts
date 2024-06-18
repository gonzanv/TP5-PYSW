import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductoListadoComponent } from './components/producto-listado/producto-listado.component';
import { ProductoFormComponent } from './components/producto-form/producto-form.component';
import { DivisaFormComponent } from './components/divisa-form/divisa-form.component';
import { TransaccionListadoComponent } from './components/transaccion-listado/transaccion-listado.component';
import { TicketListadoComponent } from './components/ticket-listado/ticket-listado.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductoListadoComponent, ProductoFormComponent, DivisaFormComponent, TransaccionListadoComponent, TicketListadoComponent, TicketFormComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tp5-velazquezgonzalo-frontend';
}
