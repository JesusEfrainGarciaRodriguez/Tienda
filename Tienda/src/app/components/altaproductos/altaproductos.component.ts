import { Component, OnInit } from '@angular/core';

//Servicios
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-altaproductos',
  templateUrl: './altaproductos.component.html',
  styleUrls: ['./altaproductos.component.css']
})
export class AltaproductosComponent implements OnInit {

  lstProductos: any = [];

  constructor(
    private productosServices: ProductosService
  ) { }

  ngOnInit(): void {
    this.productosServices.get().subscribe(
      data => this.lstProductos = data
    );
  }

  verProducto( item:any ){
    console.log(item);
  }

  modificarProducto( item:any ){
    console.log(item);
  }

  eliminarProducto( item:any ){
    console.log(item);
  }

}
