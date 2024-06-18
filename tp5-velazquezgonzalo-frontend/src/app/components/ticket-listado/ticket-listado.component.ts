import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ticket } from '../../models/ticket';
import { TicketService } from '../../services/ticket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-listado',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ticket-listado.component.html',
  styleUrl: './ticket-listado.component.css'
})
export class TicketListadoComponent {

  filtroEspectador: string = "";
  tickets!: Array<Ticket>;

  constructor(private ticketService: TicketService, private router: Router){
    this.getAllTickets();
  }

  getAllTickets(){
    this.ticketService.getTickets().subscribe(
      (data:any) => {
        this.tickets = data;
      },
      (error:any) => {
        console.log(error);
      }
    )
  }

  getPorTipoEspectador(){
    this.ticketService.getTicketsPorEspectador(this.filtroEspectador).subscribe(
      (data:any) => {
        this.tickets = data;
      },
      (error:any) => {
        console.log(error);
      }
    )
  }

  eliminar(id: string){
    this.ticketService.deleteTicket(id).subscribe(
      (data:any) => {
        console.log(data);
        this.getAllTickets();
      },
      (error:any) => {
        console.log(error);
      }
    )
  }

  agregar(){
    this.router.navigate(['ticket-formulario','nuevo']);
  }

  modificar(id: string){
    this.router.navigate(['ticket-formulario', id]);
  }
}
