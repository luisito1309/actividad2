import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ComponentComponent } from './pages/component/component.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { IntroduccionComponent } from './inicio/introduccion/introduccion.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ComponentComponent,
    NavbarComponent,
    FooterComponent,
    CapitalizadoPipe,
    IntroduccionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
