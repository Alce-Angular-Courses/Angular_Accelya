// Modulos de Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
// Modulos de la aplicacion
import { CoreModule } from './core/core.module';
import { InicioModule } from './inicio/inicio.module';
// Componentes del modulo
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CoreModule,
    InicioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
