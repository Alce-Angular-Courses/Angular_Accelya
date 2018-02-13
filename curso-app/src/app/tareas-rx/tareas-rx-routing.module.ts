import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TareasRxComponent } from './tareas-rx/tareas-rx.component';

const routes: Routes = [
  { path: '', component: TareasRxComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TareasRxRoutingModule { }
