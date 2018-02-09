import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormulariosComponent } from './formularios.component';
import { FormTdComponent } from './form-td/form-td.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: FormulariosComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
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
