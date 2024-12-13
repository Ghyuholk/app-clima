import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Temperatura {
  temperatura: number
}

@Injectable({
  providedIn: 'root'
})
export class GetDataClimaService {

  constructor(private http: HttpClient) { }
  



  getTemperatura(){
    return this.http.get<Temperatura[]>("http://172.24.188.176:5000/api/temperatura");
  } 
  
}
