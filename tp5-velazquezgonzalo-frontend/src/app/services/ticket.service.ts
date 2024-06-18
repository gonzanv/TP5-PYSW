import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private _http: HttpClient) { }

  getTickets(): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    return this._http.get("http://localhost:3000/api/ticket", httpOptions);
  }

  getTicketByID(id: string): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    return this._http.get("http://localhost:3000/api/ticket/" + id, httpOptions);
  }

  deleteTicket(id: string): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    return this._http.delete("http://localhost:3000/api/ticket/" + id, httpOptions);
  }

  getTicketsPorEspectador(tipoEspectador: string){    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    return this._http.get("http://localhost:3000/api/ticket/espectadores/" + tipoEspectador, httpOptions);
  }

  addTicket(ticket: Ticket): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    var body = JSON.stringify(ticket);
    return this._http.post("http://localhost:3000/api/ticket/", body, httpOptions);
  }

  editTicket(ticket: Ticket): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    var body = JSON.stringify(ticket);
    return this._http.put("http://localhost:3000/api/ticket/" + ticket._id, body, httpOptions);
  }
}
