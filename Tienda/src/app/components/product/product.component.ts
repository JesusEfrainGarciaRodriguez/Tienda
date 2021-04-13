import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  producto: any = {};  
  constructor(
    private activateRoute: ActivatedRoute,
    private productosService: ProductosService,
    private location: Location  
  ) {}

  ngOnInit(): void {
    //Obtengo el id de la url
    this.activateRoute.params.subscribe(params => {

      //Llamo mi servicio para que se comunique con la web api
      this.productosService.getItem(params['id']).subscribe(data => {
        console.log(data);
        this.producto = data;
        console.log(this.producto);
      })
    });
  }

  backPage() {
    this.location.back();
  }

}
