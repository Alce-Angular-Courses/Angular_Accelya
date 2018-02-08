import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InicioComponent } from './inicio.component';
import { BindingComponent } from './binding/binding.component';
import { ReflocalComponent } from './reflocal/reflocal.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    InicioComponent,
    BindingComponent,
    ReflocalComponent,
    PadreComponent,
    HijoComponent
  ],
  exports : [
    InicioComponent
  ]
})
export class InicioModule { }
