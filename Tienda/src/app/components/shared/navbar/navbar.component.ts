import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Servicios
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router, 
    public loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  async buscarProducto(texto:any){
    this.router.navigate(['/buscar',texto]);
  }

  salir(){
    this.loginService.sesionIniciada = false;
    this.router.navigate(['login']);
  }
}
