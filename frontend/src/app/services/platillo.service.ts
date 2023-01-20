import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlatillosService {

 private myAppUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
 private myApiUrl = ''
  constructor(private http: HttpClient) {}

  getListTarjetas(id: any): Observable<any>{
    return this.http.get(this.myAppUrl + id);

  }
  deleteTarjeta(id: number): Observable<any>{
    return this.http.delete(this.myAppUrl + this.myApiUrl + id);

  }
  saveTarjeta(tarjeta: any): Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl , tarjeta);

  }
  updateTarjeta(id: number,tarjeta: any): Observable<any>{
    return this.http.put(this.myAppUrl + this.myApiUrl + id,tarjeta);

  }
}
