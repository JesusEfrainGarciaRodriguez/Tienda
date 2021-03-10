import { RouterModule, Routes } from '@angular/router';

//Componentes
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MarcasComponent } from './components/marcas/marcas/marcas.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './components/about/about.component';

const app_routes : Routes = [
    { path:'home',component: HomeComponent },
    { path:'about',component: AboutComponent },
    { path:'products',component: ProductsComponent },
    { path:'marcas',component: MarcasComponent },
    { path: 'product/:id',component: ProductComponent },
    { path: 'buscar/:texto',component: BusquedaComponent },
    { path: 'login',component: LoginComponent },
    { path:'**',pathMatch: 'full', redirectTo:'home'}
]

export const App_routing = RouterModule.forRoot(app_routes);