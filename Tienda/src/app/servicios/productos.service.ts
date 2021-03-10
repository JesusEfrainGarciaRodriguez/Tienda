import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(public http: HttpClient) { 
  }

  get(){
    return this.http.get<any[]>("https://localhost:5001/api/productos");
  }
  getItem(id:Number){
    return this.http.get<any[]>(`https://localhost:5001/api/productos/${id}`);
  }

  getItemBusqueda(texto:string){
    return this.http.get<any[]>(`https://localhost:5001/api/productos/buscar/${texto}`);
  }
}
