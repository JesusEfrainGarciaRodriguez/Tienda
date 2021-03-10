import { Component, OnInit } from '@angular/core';
import { MarcasService } from 'src/app/servicios/marcas.service';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent implements OnInit {
  ListMarcas: any[] = [];

  constructor(private marcasService: MarcasService) { }

  ngOnInit(): void {
    this.marcasService.get().subscribe(data => {
      console.log(data);
      this.ListMarcas = data;
    });
  }

}
