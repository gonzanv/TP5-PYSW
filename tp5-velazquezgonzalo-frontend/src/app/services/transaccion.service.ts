import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaccion } from '../models/transaccion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {

  constructor(private _http: HttpClient) { }

  addTransaccion(transaccion: Transaccion): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    var body = JSON.stringify(transaccion);
    return this._http.post("http://localhost:3000/api/transaccion/", body, httpOptions);
  }

  getTransacciones(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    return this._http.get("http://localhost:3000/api/transaccion/", httpOptions);
  }

  getTransaccionesPorMonedas(monedaOrigen: string, monedaDestino: string){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    return this._http.get("http://localhost:3000/api/transaccion/origen/" + monedaOrigen + "/destino/" + monedaDestino, httpOptions);
  }
}
