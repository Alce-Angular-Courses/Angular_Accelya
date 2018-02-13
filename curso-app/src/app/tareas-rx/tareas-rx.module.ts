import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TareasRxRoutingModule } from './tareas-rx-routing.module';
import { TareasRxComponent } from './tareas-rx/tareas-rx.component';
import { ListaRxComponent } from './lista-rx/lista-rx.component';
import { ItemRxComponent } from './item-rx/item-rx.component';
import { FormsModule } from '@angular/forms';
import { StoreService } from '../services/store.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TareasRxRoutingModule
  ],
  declarations: [
    TareasRxComponent,
    ListaRxComponent,
    ItemRxComponent
  ],
  exports: [
    TareasRxComponent
  ],
  providers: [
    StoreService
  ]
})
export class TareasRxModule { }
