import { Component, OnInit } from '@angular/core';
//Servicios
import { LoginService } from 'src/app/servicios/login.service';
//Extras
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //Variables
  login = {
    usuario : null,
    password : null
  }

  //Base
  constructor( private loginService: LoginService ) { }

  ngOnInit(): void {
  }

  //Funciones
  async ingresar() {
    console.log(this.login.usuario);
    console.log(this.login.password);

    try {
      
      let response = await this.loginService.login(this.login).toPromise();
      this.loginService.sesionIniciada = true;
      console.table(response);

    } catch (error) {

      Swal.fire({
        title: 'Error!',
        text: error.error,
        icon: 'error',
        confirmButtonText: 'Aceptar'
      })

    }

  }

}
