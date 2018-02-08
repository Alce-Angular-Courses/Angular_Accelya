import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TareasComponent } from './tareas.component';
import { ItemComponent } from './item/item.component';
import { ListaComponent } from './lista/lista.component';
import { SharedModule } from '../shared/shared.module';
import { PipesComponent } from './pipes/pipes.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    TareasComponent,
    ItemComponent,
    ListaComponent,
    PipesComponent
  ],
  exports : [
    TareasComponent
  ]
})
export class TareasModule { }
