import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DivisaService {

  constructor(private _http: HttpClient) { }

  public convert(from: string, to: string, amount: number): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com',
        'X-RapidAPI-Key': '6c0ff18e0fmshd6ae84187f7137dp1e4372jsn3f3d33e0d011'
      }),
    }
    return this._http.get("https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert?from=" + from + "&to=" + to + "&amount=" + amount.toString(), httpOptions);
  }
}
