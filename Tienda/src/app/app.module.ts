import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Herramientas
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { ProductComponent } from './components/product/product.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { TarjetaProductosComponent } from './components/tarjeta-productos/tarjeta-productos.component';
import { LoginComponent } from './components/login/login.component';
import { AltaproductosComponent } from './components/altaproductos/altaproductos.component';



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
    LoginComponent,
    AltaproductosComponent
  ],
  imports: [
    BrowserModule,
    App_routing,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
