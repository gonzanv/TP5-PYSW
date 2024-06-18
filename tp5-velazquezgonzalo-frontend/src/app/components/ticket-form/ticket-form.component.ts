import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from '../../services/ticket.service';
import { Ticket } from '../../models/ticket';
import { FormsModule } from '@angular/forms';
import { EspectadorService } from '../../services/espectador.service';
import { Espectador } from '../../models/espectador';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ticket-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ticket-form.component.html',
  styleUrl: './ticket-form.component.css'
})
export class TicketFormComponent {
  accion!: string;
  ticket: Ticket = new Ticket();
  espectadores!: Array<Espectador>;

  constructor(private ticketService: TicketService, private espectadorService: EspectadorService , private activatedRoute: ActivatedRoute, private router: Router){
    this.cargarEspectadores();
  }

  ngOnInit(): void{
    this.activatedRoute.params.subscribe(params => {
      if(params['id'] == "nuevo"){
        this.accion = "new"
      } else{
        this.accion = "update";
        this.cargarTicket(params['id']);
      }
    });  
  }

  cargarTicket(id: string){
    this.ticketService.getTicketByID(id).subscribe(
      (data:any) => {
        Object.assign(this.ticket,data);
        this.ticket.espectador = this.espectadores.find(espectador => (espectador._id === this.ticket.espectador._id))!;
        //console.log(this.ticket);
      },
      (error:any) => {
        console.log(error);
      }
    )
  }

  cargarEspectadores(){
    this.espectadorService.getEspectadores().subscribe(
      (data:any) => {
        this.espectadores = data;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  volver(){
    this.router.navigate(['tickets-listado']);
  }

  registrar(){
    this.ticketService.addTicket(this.ticket).subscribe(
      (data:any) => {
        console.log(data);
        this.router.navigate(['tickets-listado']);
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

  modificar(){
    this.ticketService.editTicket(this.ticket).subscribe(
      (data:any) => {
        console.log(data);
        this.router.navigate(['tickets-listado']);
      },
      (error:any) => {
        console.log(error);
      }
    )
  }
}
