import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta-productos',
  templateUrl: './tarjeta-productos.component.html',
  styleUrls: ['./tarjeta-productos.component.css']
})
export class TarjetaProductosComponent implements OnInit {
  @Input() producto: any = {};

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  verProducto(productoId){
    this.router.navigate(['/product',productoId]);
  }
}
