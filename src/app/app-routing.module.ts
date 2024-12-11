import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ComponentComponent } from './pages/component/component.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
  {path:'inicio',component:InicioComponent},
  {path:'component',component:ComponentComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
