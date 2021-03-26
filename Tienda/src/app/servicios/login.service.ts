import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  sesionIniciada: boolean = false;

  constructor( public http:HttpClient ) { }

  login( item:any ) {
    return this.http.post( "https://localhost:5001/api/login", item );
  }

}
