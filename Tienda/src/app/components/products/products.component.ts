import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  ListProductos: any[] = [];

  constructor(private productosServices: ProductosService) { }

  ngOnInit(): void {
    //option 1
    this.productosServices.get().subscribe(data => {
      console.log(data);
      this.ListProductos = data;
    });

    //2
    /*this.ListProductos = await this.productosServices.get().toPromise();
    console.log(this.ListProductos);*/
  }

}
