import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

//Servicios
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-altaproductos',
  templateUrl: './altaproductos.component.html',
  styleUrls: ['./altaproductos.component.css']
})
export class AltaproductosComponent implements OnInit {

  lstProductos: any = [];
  frmItem: FormGroup;

  constructor(
    private productosServices: ProductosService,
    private router: Router,
    private formbuilder: FormBuilder
  ) { 
    this.frmItem = formbuilder.group({
      Nombre: ['', Validators.compose([Validators.required])],
      Precio: [0, Validators.compose([Validators.required])],
      Descripcion: ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit(): void {
    this.productosServices.get().subscribe(
      data => this.lstProductos = data
    );
  }

  verProducto( productoId:any ){
    this.router.navigate(['/product',productoId]);
  }

  modificarProducto( item:any ){
    console.log(item);
  }

  eliminarProducto( item:any ){
    console.log(item);
  }

  guardarProducto() {
    console.log(this.frmItem.value);
  }
}
