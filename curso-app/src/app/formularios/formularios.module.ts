import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormulariosComponent } from './formularios.component';
import { FormTdComponent } from './form-td/form-td.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    FormulariosComponent,
    FormTdComponent
  ],
  exports: [
    FormulariosComponent
  ]
})
export class FormulariosModule { }
