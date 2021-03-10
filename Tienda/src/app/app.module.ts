import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import { App_routing } from './app.route';

//Servicios
import { ProductosService } from './servicios/productos.service';

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { MarcasComponent } from './components/marcas/marcas/marcas.component';

import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './components/product/product.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { TarjetaProductosComponent } from './components/tarjeta-productos/tarjeta-productos.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    MarcasComponent,
    ProductComponent,
    BusquedaComponent,
    TarjetaProductosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    App_routing,
    HttpClientModule
  ],
  providers: [
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
