import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TareasComponent } from './tareas.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    TareasComponent
  ],
  exports : [
    TareasComponent
  ]
})
export class TareasModule { }
