import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InicioComponent } from './inicio.component';
import { BindingComponent } from './binding/binding.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    InicioComponent,
    BindingComponent
  ],
  exports : [
    InicioComponent
  ]
})
export class InicioModule { }
