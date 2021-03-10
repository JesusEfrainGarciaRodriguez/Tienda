import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  ListProductos: any[] = [];
  busqueda: string;
  constructor(private productosServicios: ProductosService, 
              private activateRoute: ActivatedRoute, ) { }

  ngOnInit(): void {
    /* this.productosServicios.getItemBusqueda(texto).toPromise(); */

    this.activateRoute.params.subscribe(params => {
      this.busqueda = params['texto'];
      //Llamo mi servicio para que se comunique con la web api
      this.productosServicios.getItemBusqueda(params['texto']).subscribe(data => {
        this.ListProductos = data;
      })
    });
    
  }

  

}
