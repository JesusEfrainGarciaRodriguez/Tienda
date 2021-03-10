import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarcasService {

  constructor(public http: HttpClient) { 
    console.log("marcas");
  }

  get(){
    return this.http.get<any[]>("https://localhost:5001/api/marcas");
  }
}
