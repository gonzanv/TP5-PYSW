import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private _http: HttpClient) { }

  public getProductosDestacados(): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    return this._http.get("http://localhost:3000/api/producto/destacados", httpOptions);
  }

  public addProducto(producto: Producto): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    var body = JSON.stringify(producto);
    return this._http.post("http://localhost:3000/api/producto/", body, httpOptions);
  } 
}
