import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContactosRoutingModule } from './contactos-routing.module';
import { ContactosComponent } from './contactos.component';
import { AltasComponent } from './altas/altas.component';
import { ListaComponent } from './lista/lista.component';
import { ContactosService } from '../services/contactos.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ContactosRoutingModule
  ],
  declarations: [
    ContactosComponent,
    AltasComponent,
    ListaComponent
  ],
  exports: [
    ContactosComponent
  ],
  providers: [
    ContactosService
  ]
})
export class ContactosModule { }
